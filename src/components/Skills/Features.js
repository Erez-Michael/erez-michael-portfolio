import React from "react";
import { Container, Section } from "../../GlobalStyles";
import {
  FeatureText,
  FeatureWrapper,
  FeatureColumn,
  FeatureImageWrapper,
  FeatureName,
} from "./FeaturesStyles";
import { featuresData } from "../../data/FeaturesData";

const Features = () => {
  const initial = {
    y: 40,
    opacity: 0,
  };
  const animate = {
    y: 0,
    opacity: 1,
  };
  const style = {
    height: "80px",
    width: "80px",
    background: "transparent",
  };

  return (
    <Section smPadding="50px 10px" position="relative">
      <Container>
        <FeatureWrapper>
          {featuresData.map((el, index) => (
            <FeatureColumn
              initial={initial}
              animate={animate}
              transition={{ duration: 0.5 + index * 0.1 }}
              key={index}
            >
              <FeatureImageWrapper className={el.imgClass}>
                <img style={style} src={el.img}>
                </img>
              </FeatureImageWrapper>
              <FeatureName>{el.name}</FeatureName>
              <FeatureText>{el.description}</FeatureText>
            </FeatureColumn>
          ))}
        </FeatureWrapper>
      </Container>
    </Section>
  );
};

export default Features;
