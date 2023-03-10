import styled from "styled-components";
import { motion } from "framer-motion";

export const ContentRow = styled.div`
 /*border: solid blue 5px;*/
background-color:#485461;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding:50px 0;
  flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};
  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

export const ContentColumn = styled(motion.div)`
  background-color: #485461;

  padding: 10px;
  flex: 1;
  z-index: 10;
  display: flex;
  flex-direction: column;
align-items: flex-start;

  @media screen and (max-width: 1536px) {
    max-width: 100% !important;
    flex-basis: 100%;
    justify-content: center;
    align-items: center;
  }
`;

export const TextWrapper = styled.div`
  padding-top: 0;
  background-color: #485461;
  display: flex;
flex-direction  : column;
justify-content: flex-start;

  @media screen and (max-width: 1536px) {
 position: relative;
 top : 0;
  }

  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
    > h1,
    p {
      text-align: center;
    }
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  > img {
    width: 300px;
    margin-left: -3px;
  }
`;

export const ImgWrapper = styled(motion.div)`
  display: flex;
  justify-content: "flex-end";
  max-height: 700px;
  justify-content: center;
  position: relative;
  z-index: -1;
  /*box-shadow: 0px 8px 25px #eee;*/
  border-radius: 4px;
`;



export const TopLine = styled(motion.div)`
  font-size: 0.9rem;
  line-height: 16px;
  font-weight: 550;
  letter-spacing: 1.4px;
  margin-bottom: 1.3rem;
  color: #febe10;
  background-color: #485461;
  `;

export const Img = styled(motion.img)`
  padding-right: 0;
 
  border-radius: 4px;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  object-fit: cover;
  max-height: 700px;
  z-index: 1;
`;


export const Heading = styled(motion.h2)`
  background-color: #485461;
  margin-bottom: 24px;
  font-size: 2rem;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ inverse }) => (inverse ? "#fffbe6" : "white")};
  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;

export const Subtitle = styled(motion.p)`
  max-width: 440px;
  margin-bottom: 35px;
  line-height: 24px;
  background-color: #485461;

  color: ${({ inverse }) => (inverse ? "#fffbe6" : "white")};
`;

export const ContentButton = styled(motion.button)`
  height: 3rem;
  width: fit-content;
  padding: 16px 32px;
  font-weight: 700;
  font-size: 0.8rem;
  line-height: 18px;
  letter-spacing: 3px;
  text-transform: uppercase;
  cursor: pointer;
  background: none;
  color: ${({ inverse }) => (inverse ? "#FEBE10" : "#FEBE10")};
  border-radius: 4px;
  white-space: nowrap;
  padding: ${({ big }) => (big ? "12px 64px" : "10px 20px")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: 2px solid ${({ inverse }) => (inverse ? "#FEBE10" : "#FEBE10")};
  cursor: pointer;
  position: relative;
  overflow: hidden;
  &:before {
    background: ${({ inverse }) => (inverse ? "#FEBE10" :" #FEBE10")};
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    transition: all 0.6s ease-in-out;
    width: 100%;
    height: 0%;
    transform: translate(-50%, -50%) rotate(45deg);
  }
  &:hover:before {
    height: 800%;
  }
  &:hover {
    color: ${({ inverse }) => (inverse ? "#eee" : "#eee")};
  }
`;

