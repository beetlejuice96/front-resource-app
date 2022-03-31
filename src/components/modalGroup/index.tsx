import {
  Dialog,
  DialogTitle,
  Link,
  List,
  ListItem,
  ListItemButton,
} from "@mui/material";
import React, { Fragment, useEffect } from "react";
import { Group } from "../../interfaces/group";
import { useModalGroupStyles } from "./styles";
import { useResource } from "../../providers/resourceProvider/resourceContext";
export interface SimpleDialogProps {
  open: boolean;
  group: Group;
  onClose: () => void;
}

const ModalGroup = (props: SimpleDialogProps) => {
  const { onClose, group, open } = props;
  const { state, actions } = useResource();
  const classes = useModalGroupStyles();

  const handleClose = () => {
    onClose();
  };

  useEffect(() => {
    if (open) {
      actions.handleResources(group);
    }
  }, [open]);
  return (
    <Fragment>
      <Dialog onClose={handleClose} open={open} className={classes.container}>
        <DialogTitle>{group.title}</DialogTitle>
        <List>
          {state.resources.map((resource, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton>
                <Link
                  href={resource.url}
                  color="inherit"
                  underline="none"
                  target="_blank"
                >
                  {resource.title}
                </Link>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Dialog>
    </Fragment>
  );
};

export default ModalGroup;
