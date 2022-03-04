import { Typography } from "@mui/material";
import React from "react";
import { useHeroStyles } from "./styles";

const Hero = () => {
  const classes = useHeroStyles();

  return (
    <section className={classes.container}>
      <div className={classes.containerTitles}>
        <Typography className={classes.title}>
          Save and Orginize your Resources
        </Typography>
        <Typography className={classes.subTitle}>
          Ruben magicaly saves your resources
        </Typography>
      </div>
      <img src="/purr-magic.png" alt="imghero" className={classes.imghero} />
    </section>
  );
};

export default Hero;
