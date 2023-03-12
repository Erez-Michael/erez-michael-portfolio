import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll-v2";
import "./Menu.css";

import { Wrapper } from "../Menu/MenuStyles";

const Menu = () => {

  window.addEventListener(
    "scroll",
    () => {
      document.body.style.setProperty(
        "--scroll",
        window.pageYOffset /
          ((document.body.offsetHeight - window.innerHeight) / 4)
      );
    },
    false
  );

  return (
    <Wrapper>
      <div class="cube-wrap">
        <div class="cube">
          <div class="side front">
            <p class="about">
              <AnchorLink href="#about">
                <button class="about-button">About</button>
              </AnchorLink>
            </p>
          </div>
          <div class="side middle">
            <p class="projects">
              <AnchorLink href="#projects">
                <button class="projects-button">Projects</button>
              </AnchorLink>
            </p>
          </div>
          <div class="side back">
            <p class="skills">
              <AnchorLink href="#skills">
                <button class="skills-button">My Skills</button>
              </AnchorLink>
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Menu;
