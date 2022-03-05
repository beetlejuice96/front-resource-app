import { createStyles, makeStyles } from "@mui/styles";
import { styled, Theme } from "@mui/system";

export const useSectionAddGroup = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      height: "30vh",
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
      backgroundColor: "#ddc9af",
    },
    containerTextField: {
      backgroundColor: "white",
      width: "20%",
      height: "70px",
      borderRadius: "35px",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "0 30px 0 30px",
    },
    title: {
      fontSize: "2.5rem !important",
      color: "#1d1d1d",
      fontWeight: "1000 !important",
      lineHeight: "55px !important",
    },
    customshapedividertop: {
      position: "absolute",
      bottom: 0,
      left: 0,
      width: "100%",
      overflow: "hidden",
      lineHeight: 0,
      transform: "rotate(180deg)",
    },
    svg: {
      position: "relative",
      display: "block",
      width: "calc(100% + 1.3px)",
      height: "262px",
    },
    shapeFill: {
      fill: "#faebd7",
    },
  })
);
