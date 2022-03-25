import { createStyles, makeStyles } from "@mui/styles";
import { Theme } from "@mui/system";
import styled from "styled-components";
import Card from "@mui/material/Card";

export const StyledCard = styled(Card)`
  ${({ theme }) => `
  cursor: pointer;
  transition: ${theme.transitions.create(["background-color", "transform"], {
    duration: theme.transitions.duration.standard,
  })};
  &:hover {
    transform: scale(1.1);
    z-index: 99000;
  }
  `}
`;

export const useCardStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      backgroundColor: "#E4BAE6 !important",
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
      color: "black",
      fontWeight: "800 !important",
      fontSize: "35px !important",
    },
    subTitle: {
      color: "black",
      fontSize: "15px !important",
      fontWeight: "600 !important",
      lineHeight: "1px !important",
      textAlign: "start",
    },
  })
);
