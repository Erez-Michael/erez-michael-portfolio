import React, { useState } from "react";
import Menu from "../Menu/Menu";
import AnchorLink from "react-anchor-link-smooth-scroll-v2";
import { BsLinkedin, BsFillEnvelopeFill } from "react-icons/bs";

import {
  Wrapper,
  Logo,
  Links,
  NavButton,
  NavbarContainer,
  NavbarExtendedContainer,
  NavbarLinkExtendedOne,
  NavbarLinkExtendedTwo,
  NavbarLinkExtendedThree,
} from "./NavbarStyles";

const Navbar = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [extendNavbar, setExtendNavbar] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const closeNavbar = () => {
    setExtendNavbar(!extendNavbar);
  };

  const IconStyle = {
    fill: "#eee",
    background: "#364853",
    borderRadius: "3px",
    padding: "5px",
    cursor: "pointer",
  };
  const CvStyle = {
    fontSize: "20px",
    fontFamily: "Faster One",
    fontStyle: "oblique",
    letterSpacing: "2px",
    color: "whitesmoke",
    background: "#364853",
    borderRadius: "3px",
    cursor: "pointer",
    paddingRight: "5px",
    paddingTop: "6px",
    paddingBottom: "6px",
  };

  const anchorStyle = {
    textDecoration: "none",
    color: "#364853",
  };

  return (
    <>
      <Wrapper>
        <Menu />
        <Logo>
          <div>
            <h2>EM.</h2>
            <h2>EM.</h2>
          </div>
        </Logo>
        <Links>
          <a
            href="https://drive.google.com/file/d/1p9rpGfpQyOcMBg3hZ7pAyP01NFLcUZtZ/view?usp=sharing"
            style={CvStyle}
          >
            CV
          </a>
          <a href="https://www.linkedin.com/in/erezmichael/">
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
          </a>
          <a href="mailto: erezmichael01@gmail.com">
            <BsFillEnvelopeFill size={32} style={IconStyle} />
          </a>
        </Links>

        <NavButton
          onClick={() => {
            setExtendNavbar((current) => !current);
          }}
        >
          {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
        </NavButton>
      </Wrapper>
      {extendNavbar && (
        <NavbarExtendedContainer>
          <NavbarLinkExtendedOne
            onClick={() => {
              closeNavbar();
            }}
          >
            <AnchorLink href="#about" style={anchorStyle}>
              About
            </AnchorLink>
          </NavbarLinkExtendedOne>

          <NavbarLinkExtendedTwo
            onClick={() => {
              closeNavbar();
            }}
          >
            <AnchorLink href="#projects" style={anchorStyle}>
              Projects
            </AnchorLink>
          </NavbarLinkExtendedTwo>
          <NavbarLinkExtendedThree
            onClick={() => {
              closeNavbar();
            }}
          >
            <AnchorLink href="#skills" style={anchorStyle}>
              Skills
            </AnchorLink>
          </NavbarLinkExtendedThree>
        </NavbarExtendedContainer>
      )}
    </>
  );
};

export default Navbar;
