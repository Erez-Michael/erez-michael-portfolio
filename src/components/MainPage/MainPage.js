import React from "react";
import { Wrapper } from "./MainPageStyles";
import { heroOne, heroTwo, heroThree } from "../../data/ProjectData";
import About from "../About/About";
import Skills from "../Skills/Skills";
import { ProjectOne } from "../Projects/Projects/ProjectOne";
import { ProjectTwo } from "../Projects/Projects/ProjectTwo";
import { ProjectThree } from "../Projects/Projects/ProjectThree";

const MainPage = () => {
  return (
    <Wrapper>
      <About />
      <ProjectOne {...heroOne} />
      <ProjectTwo {...heroTwo} />
      <ProjectThree {...heroThree} />
      <Skills />
    </Wrapper>
  );
};

export default MainPage;
