import { makeStyles } from "@mui/styles";

export const useCardStyles = makeStyles({
  container: {
    backgroundColor: "#6e4aff !important",
    minWidth: "275px",
    minHeight: "130px",
    margin: "10px",
    borderRadius: "10px !important",
  },
  containerContent: {
    position: "relative",
    minWidth: "inherit",
    minHeight: "inherit",
  },
  containerTitle: {
    position: "absolute",
    left: "20px",
    bottom: "20px",
    textAlign: "start",
  },
  title: {
    color: "#fff",
    fontWeight: "800 !important",
    fontSize: "35px !important",
  },
  subTitle: {
    color: "#fff",
    fontSize: "15px !important",
    fontWeight: "600 !important",
    lineHeight: "1px !important",
    textAlign: "start",
  },
});
