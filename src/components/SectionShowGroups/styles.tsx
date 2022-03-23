import { createStyles, makeStyles } from "@mui/styles";
import { Theme } from "@mui/system";
import { CustomTheme } from "../..";

export const useSectionShowGroups = makeStyles((theme: CustomTheme) =>
  createStyles({
    container: {},
    title: {
      ...theme.titleSecond,
    },
  })
);
