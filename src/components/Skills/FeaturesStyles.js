import styled from "styled-components";
import { motion } from "framer-motion";

export const FeatureWrapper = styled.div`
  margin-top: -1px;
  background-color: #485461;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  
  @media screen and (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 3rem;
  }
  @media screen and (max-width: 568px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const FeatureColumn = styled(motion.div)`
  background-color: #36454f;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  box-shadow: 0 0 20px 1px #d0d0d0;
  border-radius: 2rem;
  border: solid #febe10 0.1rem;
  height: fit-content;
  &:hover {
    transition: 0.5s ease-in-out;
    transform: scale(1.05) !important;
  
  }
`;

export const FeatureImageWrapper = styled.div`
  background: transparent;

  margin-bottom: 1rem;
  border-radius: 50%;
  padding: 30px;
`;
export const FeatureName = styled.h3`
  background: transparent;
  font-weight: 600;
  font-size: 1.3rem;
  letter-spacing: 2px;
  color: #fffbe6;
  @media screen and (max-width: 768px) {
    font-weight: 400;
    font-size: 1rem;
    letter-spacing: 1.3px;
  }
`;
export const FeatureText = styled.p`
  background: transparent;
  margin-top: 1rem;
  text-align: center;
  font-size: 0.9rem;
  line-height: 1.73;
  letter-spacing: 0.5px;
  color: #febe10;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
