import { Typography } from "@mui/material";
import React from "react";
import { useGroup } from "../../providers/groupProvider/groupContext";
import CardShared from "../sharedComponents/card";
import { useSectionShowGroups } from "./styles";

const ShowGroups = () => {
  const { state } = useGroup();
  const { groups } = state;
  const classes = useSectionShowGroups();
  const drawGroups = () => {
    return groups.map((group, index) => (
      <CardShared key={index} group={group} />
    ));
  };
  return (
    <section className={classes.container}>
      <Typography className={classes.title}>
        Last Resources groups added
      </Typography>
      <section className={classes.containerCards}>
        {groups.length > 0 && drawGroups()}
      </section>
    </section>
  );
};

export default ShowGroups;
