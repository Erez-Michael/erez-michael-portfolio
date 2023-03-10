import React from "react";
import Menu from "../Menu/Menu";

import {
  Wrapper, Logo, NavButton, StyledNavbar
} from "./NavbarStyles";

const Navbar = () => {

  return (
    <>
      <Wrapper>
        <Menu />
        <StyledNavbar>
        <Logo>EM.</Logo>
        <NavButton>&#8801;</NavButton>
        </StyledNavbar>
      </Wrapper>
    </>
  );
};

export default Navbar;
