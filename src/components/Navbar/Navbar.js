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
          <Logo>
            <div>
              <h2>EM.</h2>
              <h2>EM.</h2>
            </div>
          </Logo>
          <NavButton>&#8801;</NavButton>
        </StyledNavbar>
      </Wrapper>
    </>
  );
};

export default Navbar;
