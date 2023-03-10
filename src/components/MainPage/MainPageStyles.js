import styled from "styled-components";

export const Wrapper = styled.div`
  border: solid blueviolet 4px;
  background-color: #485461;

  position: relative;
  display: flex;
  flex-direction: column;
  width: 65%;
  right: 0;
  height: 500vh;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;