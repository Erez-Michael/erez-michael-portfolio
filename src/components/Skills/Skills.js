import React, { useEffect, useRef } from "react";
import { Wrapper, Title, Container, Header, Menu, OptionOne, OptionTwo } from "./SkillsStyles";
import Tools from "../../data/ToolsData";
import Features from "./Features";

const Skills = () => {
  const wrapperRef = useRef(null);

  useEffect(() => {
    animateDiv("#a");
    animateDiv("#b");
    animateDiv("#c");
    animateDiv("#d");
    animateDiv("#e");
    animateDiv("#f");
    animateDiv("#g");
    animateDiv("#h");
    animateDiv("#i");
    animateDiv("#j");
    animateDiv("#k");
    animateDiv("#l");
    animateDiv("#m");
  }, [10000]);

  const makeNewPosition = () => {
    const wrapperElement = wrapperRef.current;
    const boundingBox = wrapperElement.getBoundingClientRect();
    const minX = boundingBox.x;
    const minY = boundingBox.y;

    const w = boundingBox.width;
    const h = boundingBox.height;

    const nw = Math.floor(Math.random() * (w - 50)) + minX;
    const nh = Math.floor(Math.random() * (h - 50)) + minY;

    return [nh, nw];
  };

  const animateDiv = (myclass) => {
    const newq = makeNewPosition();
    const element = document.querySelector(myclass);

    element.style.top = `${newq[0]}px`;
    element.style.left = `${newq[1]}px`;

    setTimeout(() => {
      animateDiv(myclass);
    }, 5000);
  };

  return (
    <Wrapper id="skills" ref={wrapperRef}>
      <Header>
        <Title>Skills</Title>
        <Menu>
          <OptionOne>Ghost Icons</OptionOne>
          <OptionTwo>Fancy a game?</OptionTwo>
        </Menu>
      </Header>
      <Container>
        <Features />
        <Tools />
      </Container>
    </Wrapper>
  );
};

export default Skills;
