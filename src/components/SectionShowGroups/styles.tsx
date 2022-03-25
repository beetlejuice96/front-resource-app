import { createStyles, makeStyles } from "@mui/styles";
import { Theme } from "@mui/system";
import { CustomTheme } from "../..";

export const useSectionShowGroups = makeStyles((theme: CustomTheme) =>
  createStyles({
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    containerCards: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      width: "90% ",
      justifyContent: "center",
    },
    title: {
      ...theme.titleSecond,
    },
  })
);
