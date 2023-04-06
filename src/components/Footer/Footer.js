import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <div>
        <p> © Erez Michael | 2023 | All rights reserved</p>
      </div>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  border-top: #febe10 solid 0.1rem;
  width: 100%;
  padding: 40px 0;
  background: #485461;
  div {
    background: #485461;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    font-weight: 600;
    letter-spacing: 0.2em;
    border-top: #febe10 solid 0.1rem;
    margin: 20px 20%;

    text-shadow: #000 1px 0px 0px, #000 0.540302px 0.841471px 0px,
      #000 -0.416147px 0.909297px 0px, #000 -0.989992px 0.14112px 0px,
      #000 -0.653644px -0.756802px 0px, #000 0.283662px -0.958924px 0px,
      #000 0.96017px -0.279415px 0px;
  }
  p {
    margin-top: -10px;
    color: whitesmoke;
    background: #485461;
    z-index: 10;
    padding: 0 20px;
  }
  @media screen and (max-width: 1024px) {
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
  }
  @media screen and (max-width: 768px) {
  }
`;
export default Footer;
