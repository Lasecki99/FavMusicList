export const saveAlbumsToLocalStorage = (albums) => {
  localStorage.setItem("albums", JSON.stringify(albums));
};

export const getAlbumsFromLocalStorage = () => {
  try {
    const rawAlbums = localStorage.getItem("albums");
    if (rawAlbums) {
      const albums = JSON.parse(rawAlbums);
      const hasErrors = albums.some(
        (album) => !album.id || !album.name || !album.createdAt
      );
      if (hasErrors) {
        throw new Error("Localstorage was manipulated!");
      } else {
        return albums;
      }
    } else {
      return [];
    }
  } catch {
    return [];
  }
};
