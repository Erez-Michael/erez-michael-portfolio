import React from "react";
import Navbar from "../Navbar/Navbar";
import MainPage from "../MainPage/MainPage";

import { Wrapper } from "./HomeStyles";

const Home = () => {
  return (
    <Wrapper>
      <Navbar />
      <MainPage/>
    </Wrapper>
  );
};

export default Home;
