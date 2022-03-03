import {
  AppBar,
  IconButton,
  SwipeableDrawer,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import CONSTANTS from "../../constants";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLinks, useNavBarStyles } from "./styles";
const { ROUTES } = CONSTANTS;
const NavBar = (): JSX.Element => {
  const classes = useNavBarStyles();
  const [opened, setOpened] = useState(false);
  const toggleDrawer = () => {
    setOpened(!opened);
  };

  return (
    <Fragment>
      <SwipeableDrawer
        anchor="left"
        open={opened}
        onClose={toggleDrawer}
        onOpen={toggleDrawer}
      >
        <Link to={ROUTES.MAIN}>
          <Typography>Home</Typography>
        </Link>
      </SwipeableDrawer>
      <div className={classes.bar}>
        <AppBar className={classes.appBar} color="transparent">
          <Toolbar className={classes.toolbar}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <NavLinks>
              <Link to={ROUTES.MAIN}>
                <Typography>Home</Typography>
              </Link>
              <Link to={ROUTES.EXAMPLE}>
                <Typography>Example</Typography>
              </Link>
            </NavLinks>
          </Toolbar>
        </AppBar>
      </div>
    </Fragment>
  );
};
export default NavBar;
