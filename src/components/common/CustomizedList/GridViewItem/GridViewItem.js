import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Tooltip,
  IconButton,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DeleteIcon from "@mui/icons-material/Delete";
import PlayerIcon from "../../../../assets/player.svg";

const GridViewItem = ({ item, onFavoriteChange, setItemToDelete }) => {
  const { t } = useTranslation();

  return (
    <li style={{ margin: "1.5rem", transition: "1s" }}>
      <Card sx={{ width: 280 }}>
        <CardMedia component="img" image={PlayerIcon} height="200"></CardMedia>
        <CardContent>
          <Typography noWrap sx={{ textAlign: "center" }}>
            {item.name}
          </Typography>
          <Typography
            noWrap
            sx={{ textAlign: "center", color: "rgba(0, 0, 0, 0.6);" }}
            variant="body2"
          >
            {t("list.createdAt", {
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
          </Typography>
        </CardContent>
        <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
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
        </CardActions>
      </Card>
    </li>
  );
};

export default GridViewItem;
