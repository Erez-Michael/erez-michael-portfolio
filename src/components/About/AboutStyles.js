import styled from "styled-components";


export const Wrapper = styled.div`
  padding: 0 15%;
  height:fit-content;
  
  @media screen and (max-width: 768px) {
    padding: 5% 10%;
  }
  `;

export const TopRow = styled.div`
  background-color: #485461;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  `;

export const GitIcon = styled.div`
  padding-top: 0.25rem;
  padding-right: 1rem;
  display: flex;
  background-color: #485461;
  a {
    background-color: #485461;
  }

  &:hover {
    transform: scale(1.2);
    transition: 0.5s ease-in-out;
  }
  @media screen and (max-width: 768px) {
  }
`;

export const Container = styled.div`
  margin-top: 35%;
  border-radius: 10px;
  background: #485461;
  padding: 10px;

  transform: perspective(1200px) rotateY(25deg) scale(0.9) rotateX(10deg);
  filter: blur(0);
  opacity: 1;
  transition: 0.6s ease all;
  box-shadow: -1rem 1rem 2rem rgba(192, 192, 192, 0.25);

  &:hover {
    transform: perspective(800px) rotateY(-15deg) translateY(-50px)
      rotateX(10deg) scale(1);
    filter: blur(0);
    opacity: 1;
    box-shadow: 1rem 1rem 2rem rgba(192, 192, 192, 0.25);
  }

  @media screen and (max-width: 768px) {
    margin-top: 5%;
  }
`;
export const Title = styled.div`
  background: #485461;
  display: flex;
  justify-content: flex-start;
  font-size: 3rem;
  font-weight: 600;
  margin-bottom: 40px;

  /* Letter Outline */

  text-shadow: rgb(254, 190, 16) 1px 0px 0px,
    rgb(254, 190, 16) 0.540302px 0.841471px 0px,
    rgb(254, 190, 16) -0.416147px 0.909297px 0px,
    rgb(254, 190, 16) -0.989992px 0.14112px 0px,
    rgb(254, 190, 16) -0.653644px -0.756802px 0px,
    rgb(254, 190, 16) 0.283662px -0.958924px 0px,
    rgb(254, 190, 16) 0.96017px -0.279415px 0px;

  

  @media screen and (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 20px;
  }
`;

export const SubTitle = styled.div`
  background: #485461;
  color: #eee;
  margin-bottom: 40px;
  height: 10%;
  display: flex;
  justify-content: flex-start;
  font-weight: 600;
  font-size: 1.5rem;
  div {
    background-color: rgba(254, 190, 16, 0.5);
    width: fit-content;
    border-radius: 5px;
    padding: 5px 10px;

    -webkit-box-shadow: 0px 10px 13px -7px #000000, 0px 0px 50px -30px #a8a8a8;
    box-shadow: 0px 10px 13px -7px #000000, 0px 0px 50px -30px #a8a8a8;
  }


  @media screen and (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 20px;
  }
`;
export const Body = styled.div`
  background: #485461;
  color: #eee;
  height: 80%;
  letter-spacing: 2px;
  line-height: 2rem;
  span {
    background: transparent;
    border-radius: 3px;
    padding: 2px 5px;
    -webkit-box-shadow: 0px 10px 13px -7px #000000, 0px 0px 50px -30px #a8a8a8;
    box-shadow: 0px 10px 13px -7px #000000, 0px 0px 50px -30px #a8a8a8;
  }
  @media screen and (max-width: 768px) {
    letter-spacing: 1.2px;
    line-height: 2rem;
  }
`;

export const Tools = styled.div`
  div {
    display: flex;
    justify-content: flex-start;
    /*border: solid blue 2px;*/
    font-size: 2rem;
    font-weight: 600;
  }
`;

export const ButtonStyle = styled.div`
 
  
`;

