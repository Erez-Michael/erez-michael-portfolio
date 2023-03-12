import React from "react";
import Navbar from "../Navbar/Navbar";
import MainPage from "../MainPage/MainPage";
import ScrollTop from "../Buttons/ScrollTop";
import { Wrapper } from "./HomeStyles";

const Home = () => {
  return (
    <Wrapper>
      <Navbar />
      <MainPage />
      <ScrollTop />
    </Wrapper>
  );
};

export default Home;
