import { useState } from "react";
import { useTranslation } from "react-i18next";
import ListControls from "./components/common/ListControls/ListControls";
import AlbumForm from "./components/composed/AlbumForm/AlbumForm";
import Layout from "./components/composed/Layout/Layout";
import { useSortedAlbums } from "./hooks/useSortedAlbums";

const App = () => {
  const [sortBy, setSortBy] = useState("name");
  const [sortDirection, setSortDirection] = useState("asc");
  const [listDisplayType, setListDisplayType] = useState("list");
  const { t } = useTranslation();
  const sortedAlbums = useSortedAlbums(sortBy, sortDirection);

  console.log(sortedAlbums);

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
    </Layout>
  );
};

export default App;
