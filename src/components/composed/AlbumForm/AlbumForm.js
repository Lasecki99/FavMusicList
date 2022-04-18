import React from "react";
import { TextField, Button } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { addAlbum } from "../../../app/slices/albumSlice";
import { toast } from "react-toastify";

const AlbumForm = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const notify = (name) =>
    toast(t("addAlbumForm.addedSuccessfully", { name }), { type: "success" });

  const onSubmit = ({ name }) => {
    dispatch(addAlbum(name));
    notify(name);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
      <Controller
        name="name"
        defaultValue=""
        control={control}
        rules={{ required: true, minLength: 2, maxLength: 50 }}
        render={({ field: { ref, ...fields } }) => (
          <TextField
            {...fields}
            ref={ref}
            fullWidth
            sx={{ display: "block" }}
            label={t("addAlbumForm.name")}
            variant="outlined"
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
        )}
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
