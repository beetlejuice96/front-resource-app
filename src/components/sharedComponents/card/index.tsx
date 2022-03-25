import React from "react";
import Card from "@mui/material/Card";
import { Group } from "../../../interfaces/group";
import { CardContent, Typography } from "@mui/material";
import { useCardStyles, StyledCard } from "./styles";

export interface propsCard {
  group: Group;
}

const Subtitle = () => {
  return <div>index</div>;
};

export default function CardShared({ group }: propsCard) {
  const classes = useCardStyles();
  return (
    <StyledCard className={classes.container}>
      <CardContent className={classes.containerContent}>
        <div className={classes.containerTitle}>
          {group.resources.length > 0 ? (
            <Typography className={classes.subTitle}>
              Recursos:{group.resources.length}
            </Typography>
          ) : (
            <Typography className={classes.subTitle}>
              No posee recursos aun!
            </Typography>
          )}
          <Typography className={classes.title}>{group.title}</Typography>
        </div>
      </CardContent>
    </StyledCard>
  );
}
