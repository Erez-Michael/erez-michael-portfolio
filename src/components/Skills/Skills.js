import React, { useRef, useEffect, useState } from "react";

import {
  Wrapper,
  Title,
  Container,
  Header,
  Menu,
  ButtonOne,
  ButtonTwo,
} from "./SkillsStyles";
import Features from "./Features";
import Tools from "../../data/ToolsData";
import Timer from "./Timer";
import Toggle from "../Buttons/Toggle/Toggle";

const Skills = () => {
  const [isClicked, setIsClicked] = useState();
  const [toggle, setToggle] = useState();
  

  const handleClick = () => {
    setToggle(!toggle);
  };
  const handleGame = () => {
    setIsClicked(!isClicked);
  };

  // Randomly Floating Icons /*************************/
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
  }, []);

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
    }, 1500);
  };

  // Randomly Floating Icons /*************************/

 
  return (
    <Wrapper id="skills" ref={wrapperRef}>
      <Header>
        <Title>Skills</Title>
        <Menu>
          <Toggle handleClick={handleClick} />

          <ButtonTwo onClick={handleGame}>
            Fancy a game? {isClicked && <Timer />}
          </ButtonTwo>
        </Menu>
      </Header>
      <Container>
        <Features />
        {!toggle && <Tools />}
      </Container>
    </Wrapper>
  );
};

export default Skills;
