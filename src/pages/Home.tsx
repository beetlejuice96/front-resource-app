import { Fragment } from "react";
import Hero from "../components/hero";
import SectionAddGroup from "../components/sectionAddGroup";
import ShowGroups from "../components/SectionShowGroups";
import GroupProvider from "../providers/groupProvider/groupProvider";

const Home = () => {
  return (
    <Fragment>
      <Hero />
      <GroupProvider>
        <SectionAddGroup />
        <ShowGroups />
      </GroupProvider>
      {/* <div style={{ display: "flex", flexDirection: "row" }} id="section2">
        {groups.map((group) => (
          <CardShared group={group}></CardShared>
        ))}
      </div> */}
    </Fragment>
  );
};

export default Home;
