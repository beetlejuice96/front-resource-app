import { createStyles, makeStyles } from "@mui/styles";
import { styled, Theme } from "@mui/system";

export const useHeroStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      flexDirection: "column",
      [theme.breakpoints.up("md")]: {
        height: "90vh",
        display: "flex",
        alignItems: "center",
        margin: "0 0 0 80px",
        justifyContent: "space-between",
        flexDirection: "row",
      },
    },
    title: {
      fontSize: "3.5rem !important",
      color: "#1d1d1d",
      fontWeight: "1000 !important",
      lineHeight: "55px !important",
    },
    subTitle: {
      fontWeight: "400 !important",
      fontSize: "1.5rem !important",
      lineHeight: "22px !important",
      letterSpacing: ".01em !important",
      color: "#777",
      marginTop: "12px !important",
    },
    containerTitles: {
      [theme.breakpoints.down("md")]: {
        marginTop: "12px !important",
      },

      [theme.breakpoints.up("md")]: {
        display: "flex",
        flexDirection: "column",
        textAlign: "start",
        width: "40%",
      },
    },
    getStartedButton: {
      marginTop: "12px !important",
      backgroundColor: "#1d1d1d !important",
      width: "135px",
    },
    imgHero: {
      [theme.breakpoints.down("xl")]: {
        height: "inherit",
      },
    },
  })
);
