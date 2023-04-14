import styled from "styled-components";



export const Wrapper = styled.div`
  /* border: solid blue 5px; */
  display: flex;
  justify-content: space-between;
  width: 35%;
  left: 0;
  z-index: 9;
  @media screen and (max-width: 768px) {
    position: relative;
    height: 10vh;
    width: 100%;
  }
`;



// export const StyledNavbar = styled.div`
//   border: solid greenyellow 2px;
// z-index:2;
// height: 1vh;
//   width: 100%;
//   position: relative;
//   top: 0.5%;
//   left: 10%;
//   @media screen and (max-width: 768px) {
//     position: relative;
//     top: 5%;
//     left: 5%;
//   }
// `;

export const Logo = styled.div`
  /* border: solid red 2px; */
  position: fixed;
  top: 3%;
  left: 3%;
  height: 8vh;
  display: flex;
  justify-content: flex-start;
  font-size: 3rem;

  @media screen and (max-width: 768px) {
    position: relative;
    top: 0;
    left: 5%;
    width: 30%;
    transform: scale(0.8);
  }
  @media screen and (max-width: 400px) {
    transform: scale(0.6);
  }
  /* ///////// Double wave animation //////////*/
  div h2:nth-child(1) {
    cursor: pointer;
    color: #364853;
  }
  div h2:nth-child(2) {
    cursor: pointer;
    color: #febe10;
    transform: translate(0, -81px);
    animation: animate 2s ease-in-out infinite;
  }
  @keyframes animate {
    0%,
    100% {
      clip-path: polygon(
        0% 45%,
        16% 44%,
        33% 50%,
        54% 60%,
        70% 61%,
        84% 59%,
        100% 52%,
        100% 100%,
        0% 100%
      );
    }
    50% {
      clip-path: polygon(
        0% 60%,
        15% 65%,
        34% 66%,
        51% 62%,
        67% 50%,
        84% 45%,
        100% 46%,
        100% 100%,
        0% 100%
      );
    }
  }
  /* ////// HOVER /////////////////////// */
  div:hover h2:nth-child(1) {
    cursor: pointer;
    color: #febe10;
  }
  div:hover h2:nth-child(2) {
    cursor: pointer;
    color: #364853;
    transform: translate(0, -81px);
    animation: animate 2s ease-in-out infinite;
  }
  @keyframes animate {
    0%,
    100% {
      clip-path: polygon(
        0% 45%,
        16% 44%,
        33% 50%,
        54% 60%,
        70% 61%,
        84% 59%,
        100% 52%,
        100% 100%,
        0% 100%
      );
    }
    50% {
      clip-path: polygon(
        0% 60%,
        15% 65%,
        34% 66%,
        51% 62%,
        67% 50%,
        84% 45%,
        100% 46%,
        100% 100%,
        0% 100%
      );
    }
  }
`;

export const Links = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 0px;
  @media screen and (max-width: 768px) {
    display: none !important;
  }
  a {
    text-decoration: none;
    height: 35px;
    width: 35px;
    position: relative;
    top: 75vh;
    right: 2vw;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 3rem;
  }
  /* // Float & twisted animation // 
    transform: rotateX(-31deg) rotateZ(0deg);
    transform-style: preserve-3d;
    border-radius: 32px;
    box-shadow: 1px 1px 0 1px #f9f9fb, -1px 0 28px 0 rgba(34, 33, 81, 0.01),
      28px 28px 28px 0 rgba(34, 33, 81, 0.25);
    transition: 0.4s ease-in-out transform, 1s ease-in-out box-shadow;
    &:hover {
      transform: translate3d(0px, -16px, 0px) rotateX(51deg) rotateZ(43deg);
      box-shadow: 1px 1px 0 1px #f9f9fb, -1px 0 28px 0 rgba(34, 33, 81, 0.01),
        54px 54px 28px -10px rgba(34, 33, 81, 0.15);
    }*/
  /** ////// SHAKE ANIMATION ////////// */
  a:hover {
    animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
    transform: translate3d(0, 0, 0);
    backface-visibility: hidden;
    perspective: 1000px;
  }
  @keyframes shake {
    10%,
    90% {
      transform: translate3d(-1px, 0, 0);
    }
    20%,
    80% {
      transform: translate3d(2px, 0, 0);
    }
    30%,
    50%,
    70% {
      transform: translate3d(-4px, 0, 0);
    }
    40%,
    60% {
      transform: translate3d(4px, 0, 0);
    }
  }
`;



export const OpenLinksButton = styled.button`
  width: 80px;
  background: none;
  border: none;
  color: whitesmoke;
  font-size: 45px;
  cursor: pointer;

  @media (min-width: 1024px) {
    display: none;
  }
`;

export const NavbarExtendedContainer = styled.div`
  /* border: solid red 2px; */
  height: 100vh;
  width: 100vw;
  position: sticky;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  overflow-y: hidden;
  z-index: 9 !important;
`;

export const NavButton = styled.div`
  /* border: yellowgreen solid 2px; */
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: fit-content;
  font-size: 3rem;
  cursor: pointer;

  @media screen and (min-width: 769px) {
   display:none;

  }

  @media screen and (max-width: 768px) {
    position: relative;
    right: 5%;
  }
`;



export const NavbarLinkExtendedOne = styled.div`
  color: whitesmoke;
  font-size: 2rem;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  margin-top: -10rem;
  transition: all ease-in-out 1s;

  &:hover {
       transform: rotate(360deg);
  }
`;

export const NavbarLinkExtendedTwo = styled(NavbarLinkExtendedOne)`
`;

export const NavbarLinkExtendedThree = styled(NavbarLinkExtendedOne)`
`;

