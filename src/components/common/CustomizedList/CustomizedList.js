import React, { useMemo, useState } from "react";
import {
  List,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  Collapse,
  useTheme,
  useMediaQuery,
  Typography,
} from "@mui/material";
import { Trans, useTranslation } from "react-i18next";
import { TransitionGroup } from "react-transition-group";
import ListViewItem from "./ListViewItem/ListViewItem";
import GridViewItem from "./GridViewItem/GridViewItem";

const CustomizedList = ({
  collection,
  onFavoriteChange,
  removeItem,
  listDisplayType,
}) => {
  const [itemToDelete, setItemToDelete] = useState(null);
  const { t } = useTranslation();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  const dialog = useMemo(
    () => (
      <Dialog
        open={Boolean(itemToDelete)}
        onClose={() => setItemToDelete(null)}
      >
        <DialogTitle>{t("list.areYouSure")}</DialogTitle>

        <DialogContent>
          <DialogContentText>
            <Trans
              i18nKey="list.deleteConfirmation"
              components={[<strong></strong>]}
              values={{ name: itemToDelete?.name }}
            />
          </DialogContentText>
        </DialogContent>

        <DialogActions>
          <Button color="inherit" onClick={() => setItemToDelete(null)}>
            {t("list.cancel")}
          </Button>
          <Button
            color="error"
            onClick={() => {
              removeItem(itemToDelete.id);
              setItemToDelete(null);
            }}
          >
            {t("list.delete")}
          </Button>
        </DialogActions>
      </Dialog>
    ),
    [itemToDelete, t, removeItem]
  );

  if (collection.length === 0) {
    return (
      <Typography sx={{ textAlign: "center", marginTop: "1rem" }}>
        {t("list.emptyList")}
      </Typography>
    );
  }

  return (
    <>
      {listDisplayType === "list" ? (
        <List>
          <TransitionGroup>
            {collection.map((item) => (
              <Collapse key={item.id}>
                <ListViewItem
                  item={item}
                  onFavoriteChange={onFavoriteChange}
                  setItemToDelete={setItemToDelete}
                />
              </Collapse>
            ))}
          </TransitionGroup>
        </List>
      ) : (
        <List
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: matches ? "center" : "flex-start",
          }}
        >
          {collection.map((item) => (
            <GridViewItem
              key={item.id}
              item={item}
              onFavoriteChange={onFavoriteChange}
              setItemToDelete={setItemToDelete}
            />
          ))}
        </List>
      )}
      {dialog}
    </>
  );
};

export default CustomizedList;
