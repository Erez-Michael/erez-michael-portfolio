import styled from "styled-components";

export const Wrapper = styled.div`
position: relative;
left:50%;
z-index:999;
@media screen and (max-width: 768px) {
    display: none;
  }
`;

export const StyledMenuButton = styled.button`
  border: none;
  height: 50px;
  cursor: pointer;

  &:before {
    content: "";
    background: #485461;
    opacity: 0.7;
    position: absolute;
    bottom: 0px;
    left: 0;
    width: 0;
    height: 4px;
    transition: all 0.25s ease-in-out;
    border-radius: 5px;
  }
  border-bottom: ${(props) => (props.active ? props.borderStyle : "")};
`;

