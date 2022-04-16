import React from "react";
import { TextField, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

const formWidth = 350;

const AlbumForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { t } = useTranslation();

  const onSubmit = ({ name }) => {
    console.log(name);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ width: formWidth }}>
      <TextField
        fullWidth
        sx={{ display: "block" }}
        label={t("addAlbumForm.name")}
        variant="outlined"
        {...register("name", { required: true, minLength: 2, maxLength: 50 })}
        error={Boolean(errors.name)}
        helperText={
          (errors.name?.type === "required" &&
            t("addAlbumForm.requiredError")) ||
          (errors.name?.type === "minLength" &&
            t("addAlbumForm.minLengthError")) ||
          (errors.name?.type === "maxLength" &&
            t("addAlbumForm.maxLengthError"))
        }
      />
      <Button
        sx={{ width: "100%", marginTop: "1rem" }}
        variant="contained"
        type="submit"
      >
        {t("addAlbumForm.addAlbum")}
      </Button>
    </form>
  );
};

export default AlbumForm;
