import React, { useState} from "react";
import Menu from "../Menu/Menu";
import { BsLinkedin, BsFillEnvelopeFill,  } from "react-icons/bs";


import {
  Wrapper,
  Logo,
  Links,
  NavButton,
  StyledNavbar,
} from "./NavbarStyles";



const Navbar = () => {
  const [isHovering, setIsHovering] = useState(false);


  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };


  

  const IconStyle = {
    fill: "#eee",
    background: "#364853",
    borderRadius: "3px",
    padding: "5px",
    cursor: "pointer",
  };
  const CvStyle = {
    fontSize: "18px",
    color: "#eee",
    background: "#364853",
    borderRadius: "3px",
    cursor: "pointer",
  };

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
        </StyledNavbar>
        <Links>
          <div style={CvStyle}>CV</div>
          <div>
            <BsLinkedin
              size={16}
              style={{
                fill: isHovering ? "364853" : "#364853",
                transition: isHovering ? "all 0.2s ease-in-out" : "",
                transform: isHovering ? "scale(2)" : "scale(2)",
                background: isHovering ? "" : "#eee",
                borderRadius: isHovering ? "" : "",
                cursor: isHovering ? "pointer" : "",
              }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
          </div>
          <div>
            <BsFillEnvelopeFill size={32} style={IconStyle} />
          </div>
        </Links>
        <NavButton>&#8801;</NavButton>
      </Wrapper>
    </>
  );
};

export default Navbar;
