import styled from "styled-components";
import { motion } from "framer-motion";

export const Wrapper = styled.div``;
export const Title = styled.div`
  background-color: #485461;
  font-size: 3rem;
  padding-bottom: 2rem;
  text-shadow: rgb(254, 190, 16) 1px 0px 0px,
    rgb(254, 190, 16) 0.540302px 0.841471px 0px,
    rgb(254, 190, 16) -0.416147px 0.909297px 0px,
    rgb(254, 190, 16) -0.989992px 0.14112px 0px,
    rgb(254, 190, 16) -0.653644px -0.756802px 0px,
    rgb(254, 190, 16) 0.283662px -0.958924px 0px,
    rgb(254, 190, 16) 0.96017px -0.279415px 0px;
  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    padding-top: 10%;
  }
`;

export const ContentRow = styled.div`
  background-color: #485461;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 50px 0;
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
    align-items: flex-start;
  }
`;

export const TextWrapper = styled.div`
width: 100%;
  padding-top: 0;
  background-color: #485461;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  @media screen and (max-width: 1536px) {
    position: relative;
    top: 0;
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

export const Buttons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #485461;
  @media screen and (max-width: 768px) {
justify-content:space-around;
  }
`;

export const GitIcon = styled.div`
  background-color: #485461;
  a {
    background-color: #485461;
  }

  &:hover {
    transform: scale(1.3) rotate(360deg);
    transition: 0.5s ease-in-out;
  }
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
  background-color: #485461;
  border: solid #febe10 1px;
  border-radius: 2rem;

  a {
    text-decoration: none;
    background-color: transparent;
    color: #febe10;
  }
  @media screen and (max-width: 768px) {
    margin-right: 2rem;
  }

`;
