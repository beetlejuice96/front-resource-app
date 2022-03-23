import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Group } from "../../interfaces/group";
import groupService from "../../services/groupService";
import CardShared from "../sharedComponents/card";
import { useSectionShowGroups } from "./styles";

const ShowGroups = () => {
  const [groups, setGroups] = useState<Group[]>([]);
  const classes = useSectionShowGroups();
  useEffect(() => {
    // const getResuorce = async () => {
    //   const request: ResourceByIdRequest = {
    //     id: "6218e4d20b16511f93d46a32",
    //   };
    //   try {
    //     let results = await resourceService.getResource(request);
    //     if (results.success) {
    //       console.log("success");
    //       console.log(results);
    //     } else {
    //       console.log("error");
    //       console.log(results);
    //     }
    //   } catch (error) {
    //     console.error(error);
    //   }
    // };
    // getResuorce();
    // const createResource = async () => {
    //   const resource: Resource = {
    //     title: "resource 4",
    //     description: "este es el resource 4",
    //     url: "https://www.cigna.com/es-us/individuals-families/health-wellness/hw/temas-de-salud/trastorno-del-espectro-autista-hw152184#:~:text=El%20trastorno%20del%20espectro%20autista%20(ASD%2C%20por%20sus%20siglas%20en,persona%20y%20su%20gravedad%20var%C3%ADan.",
    //     group: "621ba3ad27465cb39d9d03d8",
    //   };
    //   try {
    //     let result = await resourceService.createResource(resource);
    //     if (result.success) {
    //       console.log("success");
    //       console.log(result);
    //     } else {
    //       console.log("error");
    //       console.log(result);
    //     }
    //   } catch (error) {
    //     console.error(error);
    //   }
    // };
    // createResource();

    const getGroup = async () => {
      try {
        let results = await groupService.getAllGroups();
        if (results.success) {
          console.log("success");
          console.log(results);
          setGroups(results.payload);
        } else {
          console.log("error");
          console.log(results);
        }
      } catch (error) {
        console.error(error);
      }
    };
    getGroup();
  }, []);

  const drawGroups = () => {
    return groups.map((group) => <CardShared group={group} />);
  };
  return (
    <section className={classes.container}>
      <Typography className={classes.title}>
        Last Resources groups added
      </Typography>
      {groups.length > 0 && drawGroups()}
    </section>
  );
};

export default ShowGroups;
