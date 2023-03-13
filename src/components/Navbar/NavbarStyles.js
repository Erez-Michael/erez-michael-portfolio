import styled from "styled-components";

export const Wrapper = styled.div`
  /*border: solid blue 5px;*/
  display: flex;
  width: 35%;
  left: 0;

  @media screen and (max-width: 768px) {
    position: relative;
    height: 10vh;
    width: 100%;
  }
`;

export const StyledNavbar = styled.div`
  width: 100%;
`;

export const Blink = styled.div`
color: black;
z-index: 10;

`;

export const Logo = styled.div`
  /*border: yellowgreen solid 2px;*/
  position: fixed;
  right: 48vw;
  top: 2%;
  width: 50vw;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 20px;
  font-size: 3rem;
  @media screen and (max-width: 768px) {
    position: relative;
    left: 0;
    height: fit-content;
  }

  /* ///////// Double wave animation //////////*/

  div h2:nth-child(1) {
    cursor: pointer;
    color: #364853;
    -webkit-text-stroke: 1px #364853;
  }
  div h2:nth-child(2) {
    cursor: pointer;

    color: #febe10;
    transform: translate(0px, -80px);
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
  height: 180px;
  div {
    /* background: transparent;
    backdrop-filter: blur(25px);*/
    height: 35px;
    width: 35px;
    position: relative;
    top: 380%;
    right: 50%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;

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
  }
  /** ////// SHAKE ANIMATION ////////// */

  div:hover {
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

export const NavButton = styled.div`
  /*border: yellowgreen solid 2px;*/
  position: fixed;

  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 20px;
  width: 50vw;
  font-size: 3rem;
  @media screen and (min-width: 768px) {
    display: none;
  }
  @media screen and (max-width: 768px) {
    position: relative;
    right: 0;
    height: 100%;
  }
`;
