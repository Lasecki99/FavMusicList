import React from "react";
import {
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Tooltip,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ListIcon from "@mui/icons-material/List";
import GridViewIcon from "@mui/icons-material/GridView";

const ListControls = ({
  sortOptions,
  sortBy,
  setSortBy,
  sortDirection,
  setSortDirection,
  listDisplayType,
  setListDisplayType,
}) => {
  const { t } = useTranslation();

  return (
    <>
      <div style={{ display: "flex", padding: "1rem", width: 300 }}>
        <Tooltip title={t("list.viewType")}>
          <IconButton
            onClick={() => {
              if (listDisplayType === "list") {
                setListDisplayType("grid");
              } else {
                setListDisplayType("list");
              }
            }}
            sx={{
              marginRight: "1rem",
            }}
          >
            {listDisplayType === "list" ? <ListIcon /> : <GridViewIcon />}
          </IconButton>
        </Tooltip>

        <FormControl fullWidth>
          <InputLabel>{t("sort.sortBy")}</InputLabel>
          <Select
            label={t("sort.sortBy")}
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            {sortOptions.map((option) => (
              <MenuItem value={option.value} key={option.value}>
                {option.text}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Tooltip title={t("sort.sort")}>
          <IconButton
            onClick={() => {
              if (sortDirection === "asc") {
                setSortDirection("desc");
              } else {
                setSortDirection("asc");
              }
            }}
            sx={{
              marginLeft: "0.5rem",
            }}
          >
            {sortDirection === "asc" ? (
              <ArrowUpwardIcon />
            ) : (
              <ArrowDownwardIcon />
            )}
          </IconButton>
        </Tooltip>
      </div>
    </>
  );
};

export default ListControls;
