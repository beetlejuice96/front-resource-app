import React from "react";
import Card from "@mui/material/Card";
import { Group } from "../../../interfaces/group";
import { CardContent, Typography } from "@mui/material";
import { useCardStyles } from "./styles";

export interface propsCard {
  group: Group;
}
export default function CardShared({ group }: propsCard) {
  const classes = useCardStyles();
  return (
    <Card className={classes.container}>
      <CardContent className={classes.containerContent}>
        <Typography className={classes.title}>{group.title}</Typography>
      </CardContent>
    </Card>
  );
}
