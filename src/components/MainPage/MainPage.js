import React from 'react';
import { Wrapper } from './MainPageStyles';
import { heroOne, heroTwo, heroThree } from "../../data/HeroData";
import { Content } from "../../components/Content/Content";

const MainPage = () => {
  return (
    <Wrapper>
      <Content {...heroOne} />
      <Content {...heroTwo} />
      <Content {...heroThree} />
    </Wrapper>
  );
}

export default MainPage;