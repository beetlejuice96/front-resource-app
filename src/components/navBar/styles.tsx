import { createStyles, makeStyles } from "@mui/styles";
import { styled, Theme } from "@mui/system";

export const useNavBarStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      background: "#313a46",
    },
    bar: {
      backgroundColor: "white",
      height: "64px",
      width: "100%",
      zIndex: "100",
    },
    appBar: {
      height: "64px",
    },
    toolbar: {
      height: "100%",
      justifyContent: "space-between",
    },
    menuButton: {
      display: "none !important",
      [theme.breakpoints.up("sm")]: {
        display: "inline-flex !important",
      },
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
