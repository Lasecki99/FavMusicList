import React, { useState } from "react";
import {
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useTheme } from "@emotion/react";

import HideOnScroll from "../../common/HideOnScroll/HideOnScroll";
import LanguageSwitch from "./LanguageSwitch/LanguageSwitch";

const drawerWidth = 500;
const transition = "cubic-bezier(0, 0, 0.2, 1) .225s";

const Layout = ({ children, drawerContent }) => {
  const [isNavbarOpen, setNavbarOpen] = useState(true);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <HideOnScroll direction="down">
        <AppBar position="fixed" sx={{ zIndex: theme.zIndex.drawer + 1 }}>
          <Toolbar>
            <div>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={() => setNavbarOpen((prevState) => !prevState)}
              >
                <MenuIcon />
              </IconButton>
            </div>
            <div style={{ margin: "0 auto" }}>
              <Typography variant="h6">FavMusicList</Typography>
            </div>

            <div>
              <LanguageSwitch />
            </div>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
      <Drawer
        anchor="left"
        variant="persistent"
        elevation={1}
        open={isNavbarOpen}
        sx={{
          width: matches ? "100%" : drawerWidth,
          ".MuiDrawer-paper": {
            width: matches ? "100%" : drawerWidth,
          },
        }}
      >
        <IconButton
          onClick={() => setNavbarOpen(false)}
          sx={{ width: 50, marginLeft: "auto", padding: "1rem" }}
        >
          <CloseIcon fontSize="large" />
        </IconButton>
        <Toolbar />
        <div
          style={{
            padding: "1rem",
            margin: "0 auto",
            ...(!matches ? { width: 350 } : { width: 300 }),
          }}
        >
          {drawerContent()}
        </div>
      </Drawer>
      <main
        style={
          isNavbarOpen && !matches
            ? {
                marginLeft: drawerWidth,
                transition,
              }
            : {}
        }
      >
        {children}
      </main>
    </>
  );
};

export default Layout;
