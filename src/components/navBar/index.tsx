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
import { Image } from "@mui/icons-material";
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
        className={classes.drawer}
      >
        <div className={classes.drawerLink}>
          <Link to={ROUTES.MAIN} className={classes.notUnderLine}>
            <Typography className={classes.navButton}>Home</Typography>
          </Link>
          <a href={ROUTES.EXAMPLE} className={classes.notUnderLine}>
            <Typography>Example</Typography>
          </a>
          <Link to={ROUTES.ABOUTME} className={classes.notUnderLine}>
            <Typography className={classes.navButton}>About me</Typography>
          </Link>
        </div>
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
            <Link to={ROUTES.MAIN} className={classes.notUnderLine}>
              <div className={classes.mainLink}>
                <img height={60} src="/logo.png" alt="logo" />
                <Typography className={classes.title}>ResourcesApp</Typography>
              </div>
            </Link>
            <NavLinks>
              <Link to={ROUTES.MAIN} className={classes.notUnderLine}>
                <Typography className={classes.navButton}>Home</Typography>
              </Link>
              <a href={ROUTES.EXAMPLE} className={classes.notUnderLine}>
                <Typography className={classes.navButton}>Example</Typography>
              </a>
              <Link to={ROUTES.ABOUTME} className={classes.notUnderLine}>
                <Typography className={classes.navButton}>About me</Typography>
              </Link>
            </NavLinks>
          </Toolbar>
        </AppBar>
      </div>
    </Fragment>
  );
};
export default NavBar;
