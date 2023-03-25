import React, { useEffect } from "react";
import { Container, Section } from "../../../GlobalStyles";
import { BsGithub } from "react-icons/bs";

import {
  ContentRow,
  TextWrapper,
  TopLine,
  Heading,
  Buttons,
  GitIcon,
  ContentButton,
  Subtitle,
  ImgWrapper,
  Img,
  ContentColumn,
} from "../ProjectStyles";

import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

export const ProjectThree = ({
  primary,
  topLine,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  inverse,
  reverse,
}) => {
  const initial = { opacity: 0, y: 30 };
  const animation = useAnimation();

  const { ref, inView } = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        y: 0,
      });
    }
  }, [inView, animation]);

  const styles = {
    backgroundColor: "#485461",
    color: "#febe10",
    fontSize: "2rem",
  };

  return (
    <Section id="projects" inverse={inverse} ref={ref}>
      <Container>
        <ContentRow reverse={reverse}>
          <ContentColumn>
            <TextWrapper>
              <TopLine
                initial={initial}
                transition={{ delay: 0.3, duration: 0.6 }}
                animate={animation}
              >
                {topLine.text}
              </TopLine>
              <Heading
                initial={initial}
                transition={{ delay: 0.5, duration: 0.6 }}
                animate={animation}
                inverse={inverse}
              >
                {headline}
              </Heading>
              <Subtitle
                initial={initial}
                transition={{ delay: 0.7, duration: 0.6 }}
                animate={animation}
                inverse={inverse}
              >
                {description}
              </Subtitle>
              <Buttons>

              <ContentButton
                className="glow-on-hover"
                initial={initial}
                transition={{ delay: 1, duration: 0.6 }}
                animate={animation}
                inverse={inverse}
                primary={primary}
              >
                <a href="">{buttonLabel}</a>
              </ContentButton>
              <GitIcon>
                <BsGithub style={styles} />
              </GitIcon>
                </Buttons>
            </TextWrapper>
          </ContentColumn>
          <ContentColumn
            initial={initial}
            transition={{ delay: 0.5, duration: 0.6 }}
            animate={animation}
          >
            <ImgWrapper>
              <Img
                src={img}
                alt={alt}
                whileHover={{ rotate: 0, scale: 1 }}
                transition={{ duration: 0.5 }}
              />
            </ImgWrapper>
          </ContentColumn>
        </ContentRow>
      </Container>
    </Section>
  );
};
