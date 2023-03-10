import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  border: solid red 2px;
  @media screen and (max-width: 768px) {
flex-direction:column;
height: 40%;
  }
`;


export const LeftContainer = styled.div`
  border: solid blue 5px;
  display: flex;
  width: 35%;
  height: 500vh;
  left: 0;
  
  @media screen and (max-width: 768px) {
    position: relative;
    height: 10vh;
    width: 100%;
  }
`;
  
