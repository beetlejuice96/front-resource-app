import {
  Button,
  Dialog,
  DialogTitle,
  Link,
  List,
  ListItem,
  ListItemButton,
  useMediaQuery,
} from "@mui/material";
import React, { Fragment, useEffect } from "react";
import { Group } from "../../interfaces/group";
import { useModalGroupStyles } from "./styles";
import { useResource } from "../../providers/resourceProvider/resourceContext";
import { useTheme } from "@mui/styles";
import { CustomTheme } from "../..";
import { Theme } from "@mui/system";
import { DialogProps } from "@mui/material/Dialog";

export interface SimpleDialogProps {
  open: boolean;
  group: Group;
  onClose: () => void;
}

const ModalGroup = (props: SimpleDialogProps) => {
  const { onClose, group, open } = props;
  const { state, actions } = useResource();
  const classes = useModalGroupStyles();
  const theme = useTheme<Theme>();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

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
        <div className={classes.containerContent}>
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
          <Button variant="contained" className={classes.addResourceButton}>
            Add new resource
          </Button>
        </div>
      </Dialog>
    </Fragment>
  );
};

export default ModalGroup;
