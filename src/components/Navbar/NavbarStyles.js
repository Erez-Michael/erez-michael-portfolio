import styled from "styled-components";


export const Wrapper = styled.div`
  border: solid blue 5px;
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
  border: yellowgreen solid 2px;
  width: 50vw;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 20px;
  font-size: 3rem;
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: flex-start;
    height: fit-content;
padding:2vh;
  }
`;

export const NavButton = styled.div`
  border: yellowgreen solid 2px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 10px;
  width: 50vw;
  font-size: 3rem;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;


