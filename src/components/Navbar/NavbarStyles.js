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
  display: flex;
  width: 100%;  
  `;

export const Logo = styled.div`
  /*border: yellowgreen solid 2px;*/
  position: fixed;
  right: 48vw;
  top:2%;
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
    color: #364853;
    -webkit-text-stroke: 1px #364853;
  }
  div h2:nth-child(2) {
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

export const NavButton = styled.div`
  /*border: yellowgreen solid 2px;*/
  position: fixed;

  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 10px;
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


