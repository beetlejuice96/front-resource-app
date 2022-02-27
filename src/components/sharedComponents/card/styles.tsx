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
    minWidth: "275px",
    minHeight: "130px",
  },
  title: {
    color: "#fff",
    fontWeight: "800 !important",
    position: "absolute",
    left: "20px",
    bottom: "20px",
    fontSize: "35px !important",
  },
});
