import React from "react";
import { Typography, AppBar, Toolbar } from "@mui/material";

import HideOnScroll from "../../common/HideOnScroll/HideOnScroll";

const Layout = ({ children }) => {
  return (
    <>
      <HideOnScroll direction="down">
        <AppBar position="fixed">
          <Toolbar style={{ margin: "0 auto" }}>
            <Typography variant="h6">FavMusicList</Typography>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
      <main>{children}</main>
    </>
  );
};

export default Layout;
