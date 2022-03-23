import { Button, Typography } from "@mui/material";
import React from "react";
import { useHeroStyles } from "./styles";
import { Link, animateScroll as scroll } from "react-scroll";
import CONSTANTS from "../../constants";
import { useError } from "../../providers/errorProvider/ErrorContext";
const { ROUTES } = CONSTANTS;

const Hero = () => {
  const classes = useHeroStyles();
  return (
    <section className={classes.container}>
      <div className={classes.containerTitles}>
        <Typography className={classes.title}>
          Save and Organize your Resources
        </Typography>
        <Typography className={classes.subTitle}>
          Ruben magicaly saves your resources
        </Typography>
        <Button variant="contained" className={classes.getStartedButton}>
          <Link
            to={ROUTES.SECTION1}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Get Started
          </Link>
        </Button>
      </div>
      <img src="/purr-magic.png" alt="imghero" className={classes.imgHero} />
    </section>
  );
};

export default Hero;
