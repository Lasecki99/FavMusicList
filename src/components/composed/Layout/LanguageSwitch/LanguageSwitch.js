import React from "react";
import { useTranslation } from "react-i18next";
import { Switch, Typography } from "@mui/material";

const LanguageSwitch = () => {
  const { i18n } = useTranslation();

  return (
    <>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Typography>EN</Typography>
        <Switch
          color="secondary"
          onChange={(_, value) => {
            if (value) {
              i18n.changeLanguage("pl");
            } else {
              i18n.changeLanguage("en");
            }
          }}
          checked={i18n.language === "pl-PL" || i18n.language === "pl"}
        />
        <Typography>PL</Typography>
      </div>
    </>
  );
};

export default LanguageSwitch;
