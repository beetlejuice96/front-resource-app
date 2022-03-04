import { createStyles, makeStyles } from "@mui/styles";
import { styled, Theme } from "@mui/system";

export const useHeroStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      height: "80vh",
      display: "flex",
      alignItems: "center",
      margin: "0 0 0 80px",
      justifyContent: "space-between",
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
    imghero: {
      height: "inherit",
    },
    containerTitles: {
      display: "flex",
      flexDirection: "column",
      textAlign: "start",
      width: "40%",
    },
  })
);
