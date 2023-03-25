import React from "react";
import {
  Wrapper,
  TopRow,
  GitIcon,
  Title,
  SubTitle,
  Body,
  Container,
} from "./AboutStyles";

import {BsGithub} from "react-icons/bs"

const styles = {
  backgroundColor: "#485461",
  color: "#febe10",
  fontSize: "2rem",
};

const About = () => {
  

  return (
    <Wrapper id="about">
      <Container>
          <Title>Erez Michael</Title>
        <TopRow>
        <SubTitle>
          <div>Full-Stack Web Developer</div>
        </SubTitle>
          <GitIcon>
            <a href="https://github.com/Erez-Michael">
              <BsGithub style={styles} />
            </a>
          </GitIcon>
        </TopRow>
        <Body>
          Culinary expert 👨‍🍳 turned Full-Stack Web Developer 💻, experienced
          river surfer, process focused and always <span>curious</span> to try
          new things. I'm excited to help create and implement ideas in an
          efficient way. My <span>passion</span> about this work lies in{" "}
          <span>building</span>, <span> creating</span> from scratch and being
          part of a <span>team</span>. Coding to me isn't just knowing a
          language, it's also about all the pieces coming together to solve a
          problem.
        </Body>
      </Container>
      {/*<Tools>
        <div>Tools</div>
        <MarqueeTools />
  </Tools>*/}
    </Wrapper>
  );
};

export default About;
