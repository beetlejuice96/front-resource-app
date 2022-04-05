import { createStyles, makeStyles } from "@mui/styles";
import { Theme } from "@mui/system";

export const useModalGroupStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      zIndex: "99001 !important",
    },
    containerContent: {
      width: "500px",
      textAlign: "center",
    },
    addResourceButton: {
      backgroundColor: "#1d1d1d !important",
    },
  })
);
