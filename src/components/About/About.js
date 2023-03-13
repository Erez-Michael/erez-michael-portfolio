import React from "react";
import MarqueeTools from "../Home/MarqueeTools";
import {
  Wrapper,
  Title,
  SubTitle,
  Body,
  Container,
} from "./AboutStyles";



const About = () => {
  

  return (
    <Wrapper id="about">
      <Container>
        <Title>Erez Michael</Title>
        <SubTitle>
          <div>Full-Stack Web Developer</div>
        </SubTitle>
        <Body>
          Culinary expert 👨‍🍳 turned Full-Stack Web Developer 💻, experienced
          river surfer, process focused and always <span>curious</span> to try
          new things. I'm excited to help create and implement ideas in an
          efficient way. My <span>passion</span> about this work lies in <span>building</span>, <span> creating</span> from scratch and being part of a <span>team</span>.
          Coding to me isn't just knowing a language, it's also about all the
          pieces coming together to solve a problem.
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
