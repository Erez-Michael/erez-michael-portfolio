import React, {useEffect, useState} from "react";
import AnchorLink from "react-anchor-link-smooth-scroll-v2";
import "./Menu.css";

import { Wrapper, StyledMenuButton } from "../Menu/MenuStyles";
import Fader from "../Navbar/Fader";

const Menu = () => {
  const [currentPage, setCurrentPage] = useState("about");

  window.addEventListener(
    "scroll",
    () => {
    const hash = window.location.hash.substr(1);
    setCurrentPage(hash);

      document.body.style.setProperty(
        "--scroll",
        window.pageYOffset /
          ((document.body.offsetHeight - window.innerHeight) / 4)
      );
    },
    false
  );

  const MenuButton = ({ className, linkTo, children, borderStyle }) => {
    const [active, setActive] = useState(false);

    useEffect(() => {
      setActive(linkTo === currentPage);
    }, [currentPage]);

    const handleClick = () => {
      setCurrentPage(linkTo);
    };


    return (
      <StyledMenuButton
        onClick={handleClick}
        active={active}
        borderStyle={borderStyle}
        className={className}
      >
        {children}
      </StyledMenuButton>
    );
  };


  return (
    <Wrapper>
      <div className="cube-wrap">
        <div className="cube">
          <div className="side front">
            <h4>
              <Fader />
            </h4>
            <p className="about">
              <AnchorLink href="#about">
                <MenuButton
                  borderStyle="solid #eee 4px"
                  linkTo="about"
                  className="about-button"
                >
                  About
                </MenuButton>
              </AnchorLink>
            </p>
          </div>
          <div className="side middle">
            <p className="projects">
              <AnchorLink offset={() => 50} href="#projects">
                <MenuButton
                  borderStyle="solid #FEBE10 4px"
                  linkTo="projects"
                  className="projects-button"
                >
                  Projects
                </MenuButton>
              </AnchorLink>
            </p>
          </div>
          <div className="side back">
            <p className="skills">
              <AnchorLink href="#skills">
                <MenuButton
                  borderStyle="solid #eee 4px"
                  linkTo="skills"
                  className="skills-button"
                >
                  My Skills
                </MenuButton>
              </AnchorLink>
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Menu;
