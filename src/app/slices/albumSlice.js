import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { getAlbumsFromLocalStorage } from "../../utils/localStorage";

const initialState = {
  albums: getAlbumsFromLocalStorage(),
};

const albumsSlice = createSlice({
  name: "albums",
  initialState,
  reducers: {
    addAlbum: {
      reducer: (state, action) => {
        state.albums.push(action.payload);
      },
      prepare: (name) => ({
        payload: {
          id: uuidv4(),
          name,
          isFavorite: false,
          createdAt: new Date().getTime(),
        },
      }),
    },
    removeAlbum: (state, action) => {},
    markAsFavorite: (state, action) => {},
  },
});

export const { addAlbum, removeAlbum } = albumsSlice.actions;
export default albumsSlice.reducer;
