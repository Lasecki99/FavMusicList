import AlbumForm from "./components/composed/AlbumForm/AlbumForm";
import Layout from "./components/composed/Layout/Layout";

const App = () => {
  return <Layout drawerContent={() => <AlbumForm />}>123</Layout>;
};

export default App;
