import { useState } from "react";
import styled from "styled-components";
import { FaArrowCircleUp } from "react-icons/fa";

const ScrollTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: "0",
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <Button>
      <FaArrowCircleUp
        onClick={scrollToTop}
        style={{ display: visible ? "inline" : "none", background:"transparent" }}
      />
    </Button>
  );
};

const Button = styled.div`
  position: fixed;
  width: fit-content;
  height: max-content;
  border-radius: 30px;
  right: 3%;
  bottom: 30px;
  font-size: 3rem;
  z-index: 99;
  cursor: pointer;
  background-image: linear-gradient(45deg, #febe10, #f3ec78);

  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
  @media screen and (max-width: 767px) {
    font-size: 2rem;
    right: 3%;
  }
`;

export default ScrollTop;
