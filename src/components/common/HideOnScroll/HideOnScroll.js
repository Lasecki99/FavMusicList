import React from "react";
import { Slide } from "@mui/material";
import useScrollTrigger from "@mui/material/useScrollTrigger";

const HideOnScroll = ({ children, direction }) => {
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction={direction} in={!trigger}>
      {children}
    </Slide>
  );
};

export default HideOnScroll;
