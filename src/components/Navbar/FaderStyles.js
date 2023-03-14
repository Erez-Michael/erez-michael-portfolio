import styled from "styled-components";

export const Wrapper = styled.div`
  position: sticky;
  z-index: 999;
  height: fit-content;
  width: 400px;
  transform: rotate(314deg);
  display: flex;
  flex-direction: row;
  background: transparent;
  animation: fadeInAnimation ease 5s;
  animation-iteration-count: 1;
  animation-fill-mode: backwards;

  
  @media screen and (min-width: 1400px) {
    top: 32%;
    left: 3%;
  }
  @media screen and (min-width: 1280px) {
    top: 28%;
    left: 3%;
  }
  @media screen and (min-width: 1024px) {
    top: 33%;
    left: 2%;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Text = styled.div`
  color: gray;
  background: transparent;
  margin-left: 10px;
  margin-bottom: 20px;
  `;

export const Arrow = styled.div`
transform: scale(1.5);
  background: transparent;
  color: gray;
  margin-top:13px;
  margin-left: 15px;
`;
