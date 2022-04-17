import { configureStore } from "@reduxjs/toolkit";
import { saveAlbumsToLocalStorage } from "../utils/localStorage";
import albumsReducer from "./slices/albumSlice";

export const store = configureStore({
  reducer: {
    albums: albumsReducer,
  },
});

store.subscribe(() => {
  const albums = store.getState().albums.albums;
  saveAlbumsToLocalStorage(albums);
});
