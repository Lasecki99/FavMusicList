import React from "react";
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction,
  Tooltip,
  IconButton,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DeleteIcon from "@mui/icons-material/Delete";

import PlayerIcon from "../../../../assets/player.svg";
import { useTranslation } from "react-i18next";

const ListViewItem = ({ item, onFavoriteChange, setItemToDelete }) => {
  const { t } = useTranslation();

  return (
    <ListItem divider>
      <ListItemIcon>
        <img src={PlayerIcon} alt="CD" style={{ width: 40 }} />
      </ListItemIcon>
      <ListItemText
        primary={item.name}
        secondary={t("list.createdAt", {
          val: item.createdAt,
          formatParams: {
            val: {
              year: "numeric",
              month: "long",
              day: "numeric",
              hour: "numeric",
              minute: "numeric",
            },
          },
        })}
        primaryTypographyProps={{
          noWrap: true,
          style: { width: "75%" },
        }}
        secondaryTypographyProps={{
          noWrap: true,
          style: { width: "75%" },
        }}
        sx={{
          marginLeft: "0.5rem",
        }}
      />
      <ListItemSecondaryAction>
        {item.isFavorite ? (
          <Tooltip title={t("list.removeFromFavorite")}>
            <IconButton
              sx={{
                color: "#1ED760",
              }}
              onClick={() => onFavoriteChange(item.id, false)}
            >
              <FavoriteIcon />
            </IconButton>
          </Tooltip>
        ) : (
          <Tooltip title={t("list.setAsFavorite")}>
            <IconButton onClick={() => onFavoriteChange(item.id, true)}>
              <FavoriteBorderIcon />
            </IconButton>
          </Tooltip>
        )}

        <Tooltip title={t("list.delete")}>
          <IconButton color="error" onClick={() => setItemToDelete(item)}>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default ListViewItem;
