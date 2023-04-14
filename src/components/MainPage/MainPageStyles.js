import styled from "styled-components";

export const Wrapper = styled.div`
  /*border: solid pink 6px;*/
  background-color: #485461; // #3b424a
  position: relative;
  display: flex;
  flex-direction: column;
  width: 65%;
  right: 0;
  z-index: 9;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

