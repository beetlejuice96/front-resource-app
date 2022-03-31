import React from "react";
import Card from "@mui/material/Card";
import { Group } from "../../../interfaces/group";
import { CardContent, Typography } from "@mui/material";
import { useCardStyles, StyledCard } from "./styles";

export interface propsCard {
  group: Group;
  openModal: (group: Group) => void;
}

export default function CardShared({ group, openModal }: propsCard) {
  const classes = useCardStyles();

  const handleOpenModal = () => {
    openModal(group);
  };
  return (
    <StyledCard className={classes.container} onClick={handleOpenModal}>
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
