import Marquee from "react-fast-marquee";
import styled from "styled-components";
import { tools } from "../../Data/Tools";

const MarqueeTools = () => {
  

  return (
    <>
      <Wrapper>
        <Marquee
          direction="left"
          speed={60}
          loop={0}
          play={true}
          pauseOnHover={true}
          gradient={true}
          gradientColor={[245, 245, 245]}
          gradientWidth={50}
          style={{
            overflow: "hidden",
          }}
        >
          {tools.map((e, index) => (
            <div>
            <img src={e.img} key={index} />
              <p key={index}>{e.text}</p>
            </div>
          ))}
        </Marquee>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  background-color: #f5f5f5;
  text-align: center;
  margin-top: 500px;
  h3 {
    color: #333;
  }
  img {
    display: flex;
    justify-content: space-evenly;
    height: 80px;
    padding: 10px 15px;
  }

  img:hover {
    transition: all 0.5s ease-in-out;
    transform: scale(1.35);
  }
`;

export default MarqueeTools;
