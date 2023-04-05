import styled, { createGlobalStyle } from "styled-components";
import { motion } from "framer-motion";


const GlobalStyles = createGlobalStyle`

*{
  
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    background-color: #cfccbe;
    font-family: 'Trispace', sans-serif;

   
  } 
  `;
  

export const Container = styled.div`
  border-top: solid #febe10 0.1rem;
  width: 100%;

  @media screen and (max-width: 768px) {
    border: none;
  }
`;
export const MainHeading = styled.h1`
  font-size: clamp(2.3rem, 3vw, 4.5rem);
  /* https://developer.mozilla.org/en-US/docs/Web/CSS/clamp */
  margin-bottom: 2rem;
  /* Because styles are wrapper in backticks, everything in  between is considered a string. Therefore, when you use ${{}} it becomes vanilla JS and {()} is a functional component and inside a props is passed */
  color: #15202b;
  margin-top: 180px;
  width: 100%;
  letter-spacing: 4px;
  backdrop-filter: blur(3px);
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 28px;
    margin-top: 200px;
  }

  @media screen and (max-width: 375px) {
    font-size: 20px;
    margin-top: 180px;
  }

  span {
    background-image: linear-gradient(45deg, #009966, #f3ec78);
    background-size: 100%;
    background-repeat: repeat;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
  }
`;

export const Heading = styled.h2`
  font-size: clamp(1.3rem, 13vw, 3.1rem);
  margin: ${({ margin }) => (margin ? margin : "")};
  margin-bottom: ${({ mb }) => (mb ? mb : "")};
  margin-top: ${({ mt }) => (mt ? mt : "")};
  color: ${({ inverse }) => (inverse ? "$403ae3" : "#fff")};
  letter-spacing: 0.4rem;
  line-height: 1.06;
  text-align: center;
  width: ${({ width }) => (width ? width : "100%")};
`;
export const TextWrapper = styled.span`
  color: ${({ color }) => (color ? color : "")};
  font-size: ${({ size }) => (size ? size : "")};
  font-weight: ${({ weight }) => (weight ? weight : "")};
  letter-spacing: ${({ spacing }) => (spacing ? spacing : "")};
  padding: ${({ padding }) => (padding ? padding : "")};
  margin: ${({ margin }) => (margin ? margin : "")};
  margin-bottom: ${({ mb }) => (mb ? mb : "")};
  margin-top: ${({ mt }) => (mt ? mt : "")};
`;
export const Section = styled.section`
  padding: ${({ padding }) => (padding ? padding : "0 12%")};
  margin: ${({ margin }) => (margin ? margin : "")};
  background: ${({ inverse }) => (inverse ? "white" : "#071c2f")};
  position: ${({ position }) => (position ? position : "")};
  width: ${({ width }) => (width ? width : "auto")};
  min-width: ${({ minWidth }) => (minWidth ? minWidth : "auto")};
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "auto")};
  height: ${({ height }) => (height ? height : "")};
  max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : "")};
  min-height: ${({ minHeight }) => (minHeight ? minHeight : "auto")};
  display: flex;
  align-items: center;
 
  background-color: #485461;
  @media screen and (max-width: 768px) {
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: ${({ justify }) => (justify ? justify : "")};
  flex-direction: ${({ direction }) => (direction ? direction : "")};
  align-items: ${({ align }) => (align ? align : "")};
  gap: ${({ gap }) => (gap ? gap : "")};
  padding: ${({ padding }) => (padding ? padding : "")};
  margin: ${({ margin }) => (margin ? margin : "")};
  position: ${({ position }) => (position ? position : "")};
  width: ${({ width }) => (width ? width : "auto")};
  min-width: ${({ minWidth }) => (minWidth ? minWidth : "auto")};
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "auto")};
  height: ${({ height }) => (height ? height : "auto")};
  max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : "auto")};
  min-height: ${({ minHeight }) => (minHeight ? minHeight : "auto")};
  flex-wrap: ${({ wrap }) => (wrap ? wrap : "")};
  @media screen and (max-width: 768px) {
    display: ${({ smPadding }) => (smPadding ? smPadding : "0 0")};
  }
  @media screen and (max-width: 1024px) {
    flex-direction: ${({ direction }) => (direction ? direction : "row")};
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${({ justify }) => (justify ? justify : "")};
  align-items: ${({ align }) => (align ? align : "")};
  gap: ${({ gap }) => (gap ? gap : "")};
  padding: ${({ padding }) => (padding ? padding : "")};
  margin: ${({ margin }) => (margin ? margin : "")};
  position: ${({ position }) => (position ? position : "")};
  width: ${({ width }) => (width ? width : "auto")};
  min-width: ${({ minWidth }) => (minWidth ? minWidth : "auto")};
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "auto")};
  height: ${({ height }) => (height ? height : "auto")};
  max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : "auto")};
  min-height: ${({ minHeight }) => (minHeight ? minHeight : "auto")};
`;

export const ContentButton = styled(motion.button)`
margin-top: px;
  height: 3rem;
  padding: 16px 32px;
  font-weight: 700;
  font-size: 0.8rem;
  line-height: 18px;
  letter-spacing: 1.54px;
  text-transform: uppercase;
  cursor: pointer;
  background: none;
  color: ${({ inverse }) => (inverse ? "#0c4577" : "white")};
  border-radius: 4px;
  white-space: nowrap;
  padding: ${({ big }) => (big ? "12px 64px" : "10px 20px")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: 2px solid ${({ inverse }) => (inverse ? "#0c4577" : "white")};
  cursor: pointer;
  position: relative;
  overflow: hidden;
  &:before {
    background: ${({ inverse }) => (inverse ? "#0c4577" : "white")};
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    transition: all 0.6s ease;
    width: 100%;
    height: 0%;
    transform: translate(-50%, -50%) rotate(45deg);
  }
  &:hover:before {
    height: 500%;
  }
  &:hover {
    color: ${({ inverse }) => (inverse ? "white" : "black")};
  }
`;

export const Button = styled.button`
position: relative;
top:3%;
border-radius: 4px;
  background: none;
  white-space: nowrap;
  padding: 10px 20px;
  font-size: 16px;
  color: #fff;
  outline: none;
  border: 1px solid #fff;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  &:before {
    background: #fff;
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    transition: all 0.6s ease;
    width: 100%;
    height: 0%;
    transform: translate(-50%, -50%) rotate(45deg);
  }
  &:hover:before {
    height: 500%;
  }
  &:hover {
    color: black;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export default GlobalStyles;


