import { Typography } from "@mui/material";
import React, { Fragment, useState } from "react";
import { Group } from "../../interfaces/group";
import { useGroup } from "../../providers/groupProvider/groupContext";
import ResourceProvider from "../../providers/resourceProvider/resourceProvider";
import ModalGroup from "../modalGroup";
import CardShared from "../sharedComponents/card";
import { useSectionShowGroups } from "./styles";

const ShowGroups = () => {
  const { state } = useGroup();
  const { groups } = state;
  const classes = useSectionShowGroups();
  const [open, setOpen] = useState(false);
  const [groupSelected, setGroupSelected] = useState<Group | undefined>();
  const openModal = (group: Group) => {
    setGroupSelected(group);
    setOpen(!open);
  };
  const onClose = () => {
    setOpen(!open);
  };
  const drawGroups = () => {
    return groups.map((group, index) => (
      <CardShared key={index} group={group} openModal={openModal} />
    ));
  };
  return (
    <Fragment>
      <section className={classes.container}>
        <Typography className={classes.title}>
          Last Resources groups added
        </Typography>
        <section className={classes.containerCards}>
          {groups.length > 0 && drawGroups()}
        </section>
      </section>
      <ResourceProvider>
        {groupSelected !== undefined ? (
          <ModalGroup group={groupSelected} open={open} onClose={onClose} />
        ) : (
          <></>
        )}
      </ResourceProvider>
    </Fragment>
  );
};

export default ShowGroups;
