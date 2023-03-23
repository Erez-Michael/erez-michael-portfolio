import React from "react";
import { Wrapper } from "./MainPageStyles";
import { heroOne, heroTwo, heroThree } from "../../data/ProjectData";
import { Projects } from "../Projects/Projects";
import About from "../About/About";
import Skills from "../Skills/Skills";

const MainPage = () => {
  return (
    <Wrapper>
      <About />
      <Projects {...heroOne} />
      <Projects {...heroTwo} />
      <Projects {...heroThree} />
      <Skills />
    </Wrapper>
  );
};

export default MainPage;
