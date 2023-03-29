import styled from "styled-components";
import { motion } from "framer-motion";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #485461;
  height: 100%;
  padding-top: 4%;

  div.a {
    position: fixed;
    opacity: 0.4;

    transition: all 3s ease-in-out;
    border-radius: 50%;
    height: 0%;
  }

  div.b {
    position: fixed;
    opacity: 0.4;

    transition: all 3s ease-in-out;
    border-radius: 50%;
    height: 0%;
  }
  div.c {
    position: fixed;
    opacity: 0.4;

    transition: all 3s ease-in-out;
    border-radius: 50%;
    height: 0%;
  }
  div.d {
    position: fixed;
    opacity: 0.4;

    transition: all 3s ease-in-out;
    border-radius: 50%;
    height: 0%;
  }
  div.e {
    position: fixed;
    opacity: 0.4;

    transition: all 3s ease-in-out;
    border-radius: 50%;
    height: 0%;
  }
  div.f {
    position: fixed;
    opacity: 0.4;

    transition: all 3s ease-in-out;
    border-radius: 50%;
    height: 0%;
  }
  div.g {
    position: fixed;
    opacity: 0.4;

    transition: all 3s ease-in-out;
    border-radius: 50%;
    height: 0%;
  }
  div.h {
    position: fixed;
    opacity: 0.4;

    transition: all 3s ease-in-out;
    border-radius: 50%;
    height: 0%;
  }
  div.i {
    position: fixed;
    opacity: 0.4;

    transition: all 3s ease-in-out;
    border-radius: 50%;
    height: 0%;
  }
  div.j {
    position: fixed;
    opacity: 0.4;

    transition: all 3s ease-in-out;
    border-radius: 50%;
    height: 0%;
  }
  div.k {
    position: fixed;
    opacity: 0.4;

    transition: all 3s ease-in-out;
    border-radius: 50%;
    height: 0%;
  }
  div.l {
    position: fixed;
    opacity: 0.4;

    transition: all 3s ease-in-out;
    border-radius: 50%;
    height: 0%;
  }
  div.m {
    position: fixed;
    opacity: 0.4;

    transition: all 3s ease-in-out;
    border-radius: 50%;
    height: 0%;
  }
`;


export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #485461;
  border-bottom: solid #febe10 0.1rem;
  margin: 0 12%;
`;

export const Title = styled.div`
  width: 50%;
  background-color: #485461;
  padding-bottom: 2rem;
  font-size: 3rem;
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
    padding-top: 12%;
  }
`;
export const Menu = styled.div`
  background-color: #485461;
  width: 50%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  letter-spacing: 0.1rem;
`;

// export const ButtonOne = styled.button`
// border: solid #febe10 1px;
// border-radius: 4rem;
// padding: 0.5rem;
//   cursor: pointer;
//   height: fit-content;
//   background-color: #485461;
//   color: #febe10;
//   margin-right: 30px;
//   width: fit-content;
//   &:hover {
//     color: #fffbe6;
//   }
// `;
// export const ButtonTwo = styled.button`
//   border: solid #febe10 1px;
//   margin-left: 2rem;
//   border-radius: 4rem;
//   padding: 0.75rem;
//   cursor: pointer;
//   height: 3.5rem;
//   background-color: #485461;
//   color: #febe10;
//   &:hover {
//     color: #fffbe6;
//   }
// `;

export const ContentButton = styled(motion.button)`
  height: 3.5rem;
  width: fit-content;
  padding: 16px 20px;
  font-weight: 600;
  font-size: 0.75em;
  line-height: 18px;
  letter-spacing: 2px;
  text-transform: uppercase;
  cursor: pointer;
  background-color: #485461;
  color: #febe10;
  border: solid #febe10 1px;
  border-radius: 2rem;

  @media screen and (max-width: 1264px) {
    padding: 16px 10px;
  }
  @media screen and (max-width: 1160px) {
padding: 10px 6px;
font-size: 0.6rem;
height: 3rem;
width: 10rem;
}
`;

export const Container = styled.div`
  width: 100%;
  background-color: #485461;
  margin: 10% 0;
`;
  
export const Toggle = styled.button`
  
`;
