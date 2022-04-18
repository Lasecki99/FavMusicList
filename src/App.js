import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Divider } from "@mui/material";
import ListControls from "./components/common/ListControls/ListControls";
import AlbumForm from "./components/composed/AlbumForm/AlbumForm";
import Layout from "./components/composed/Layout/Layout";
import { useSortedAlbums } from "./hooks/useSortedAlbums";

import CustomizedList from "./components/common/CustomizedList/CustomizedList";
import { useDispatch } from "react-redux";
import { changeFavorite, removeAlbum } from "./app/slices/albumSlice";

const App = () => {
  const [sortBy, setSortBy] = useState("name");
  const [sortDirection, setSortDirection] = useState("asc");
  const [listDisplayType, setListDisplayType] = useState("list");
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const sortedAlbums = useSortedAlbums(sortBy, sortDirection);

  return (
    <Layout drawerContent={() => <AlbumForm />}>
      <ListControls
        sortOptions={[
          { value: "name", text: t("addAlbumForm.name") },
          { value: "createdAt", text: t("sort.createdAt") },
          { value: "id", text: "ID" },
        ]}
        sortBy={sortBy}
        setSortBy={setSortBy}
        sortDirection={sortDirection}
        setSortDirection={setSortDirection}
        listDisplayType={listDisplayType}
        setListDisplayType={setListDisplayType}
      />
      <Divider />
      <CustomizedList
        collection={sortedAlbums}
        listDisplayType={listDisplayType}
        onFavoriteChange={(id, value) =>
          dispatch(changeFavorite({ id, value }))
        }
        removeItem={(id) => dispatch(removeAlbum(id))}
      />
    </Layout>
  );
};

export default App;
