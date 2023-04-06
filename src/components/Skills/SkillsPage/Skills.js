import React, { useRef, useEffect, useState } from "react";
import { ContentButton } from "../../Skills/SkillsPage/SkillsStyles";
import { useAnimation } from "framer-motion";


import {
  Wrapper,
  Title,
  Container,
  Header,
  Menu,
} from "../SkillsPage/SkillsStyles";
import Features from "../Features/Features";
import Tools from "../../../data/ToolsData";
import Toggle from "../../Buttons/Toggle/Toggle";
import Modal from "../Modal/Modal";
import useModal from "../Modal/useModal";

const Skills = () => {
  const [value, setValue] = useState(false);
  const { isActive, handleModal } = useModal();

  const animation = useAnimation();

  
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
          <ContentButton
            className="glow-on-hover"
            onClick={() => handleModal(true)}
            transition={{ delay: 1, duration: 0.6 }}
            animate={animation}
          >
            <p>
            Fancy a game?

            </p>
          </ContentButton>
          <Toggle
            isOn={value}
            onColor="#7a172f"
            handleToggle={() => setValue(!value)}
          />
        </Menu>
      </Header>
      <Container>
        <Features />
        {isActive && <Modal isActive={isActive} handleModal={handleModal} />}
        {!value && <Tools />}
      </Container>
    </Wrapper>
  );
};

export default Skills;
