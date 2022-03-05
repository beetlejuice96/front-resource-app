import { createStyles, makeStyles } from "@mui/styles";
import { styled, Theme } from "@mui/system";

export const useNavBarStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
    },
    drawerLink: {
      alignItems: "center",
      display: "flex",
      flexDirection: "column",
    },
    bar: {
      height: "64px",
      width: "100%",
      zIndex: "100",
    },
    appBar: {
      backdropFilter: "blur(3px)",
      height: "64px",
    },
    toolbar: {
      height: "100%",
      justifyContent: "space-between",
    },
    menuButton: {
      display: "inline-flex !important",

      [theme.breakpoints.up("sm")]: {
        display: "none !important",
      },
    },
    navButton: {
      margin: "10px 5px !important",
      textDecoration: " none !important",
      [theme.breakpoints.up("sm")]: {
        margin: "0 10px !important",
        fontSize: "1.4rem!important",
        fontWeight: "100!important",
        textTransform: "capitalize",
        color: "black",
      },
    },
    mainLink: {
      alignItems: "center",
      display: "flex",
      textDecoration: "none !important",
    },
    title: {
      fontSize: "1.5rem !important",
      color: "gray",
      marginLeft: "10px !important",
    },
    notUnderLine: {
      textDecoration: "none !important",
    },
  })
);
//TODO: refactorizar, agregar a useStyle de arriba ya que descubri como usar los breakpoints en makestyles.
export const NavLinks = styled("div")(({ theme }) => ({
  display: "none",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
    flexDirection: "row",
  },
}));
