import { Fragment, useEffect, useState } from "react";
import Hero from "../components/hero";
import SectionAddGroup from "../components/sectionAddGroup";
import ShowGroups from "../components/SectionShowGroups";
import CardShared from "../components/sharedComponents/card";
import { Group } from "../interfaces/group";
import { Resource, ResourceByIdRequest } from "../interfaces/resource";
import groupService from "../services/groupService";
import resourceService from "../services/resourceService";

const Home = () => {
  return (
    <Fragment>
      <Hero />
      <SectionAddGroup />
      <ShowGroups />
      {/* <div style={{ display: "flex", flexDirection: "row" }} id="section2">
        {groups.map((group) => (
          <CardShared group={group}></CardShared>
        ))}
      </div> */}
    </Fragment>
  );
};

export default Home;
