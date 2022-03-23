import { IconButton, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import CONSTANTS from "../../constants";
import { useSectionAddGroupStyles } from "./styles";
import AddIcon from "@mui/icons-material/Add";
import { useError } from "../../providers/errorProvider/ErrorContext";
import GroupService from "../../services/groupService";
import { Group } from "../../interfaces/group";
const { ROUTES } = CONSTANTS;

const SectionAddGroup = () => {
  const classes = useSectionAddGroupStyles();
  const { actions } = useError();
  const [titleGroup, setTitleGroup] = useState("");
  const handleClick = async () => {
    let r: Group = {
      title: titleGroup,
      resources: [],
    };
    let response = await GroupService.createGroup(r);
    if (response.success) {
      actions.openToastError("SE GENERO EL GRUPO CON EXITO!");
      setTitleGroup("");
    } else {
      actions.openToastError("NO SE PUDO GENERAR EL GRUPO!");
    }
  };

  const handleChange = (event: any) => {
    setTitleGroup(event.target.value);
  };

  return (
    <section className={classes.container} id={ROUTES.SECTION1}>
      <Typography className={classes.title}>
        Add new resources group.
      </Typography>
      <div className={classes.containerTextField}>
        <TextField onChange={handleChange} value={titleGroup} />
        <IconButton onClick={handleClick}>
          <AddIcon />
        </IconButton>
      </div>
      {/* <div className={classes.customshapedividertop}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className={classes.svg}
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className={classes.shapeFill}
          ></path>
        </svg>
      </div> */}
    </section>
  );
};

export default SectionAddGroup;
