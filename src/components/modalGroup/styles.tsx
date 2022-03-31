import { createStyles, makeStyles } from "@mui/styles";
import { Theme } from "@mui/system";

export const useModalGroupStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      zIndex: "99001 !important",
    },
  })
);
