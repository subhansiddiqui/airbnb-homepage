import React from "react";
import {
  Wrapper,
  ImageContainer,
  Anchor,
  Grid,
  WrapperSecondary,
  ContentWrapper,
  Btn,
  IntroHeading,
  MainHeading,
  HeroTextBox,
  HeroImgBox,
} from "./Hero.styles";
import heroImage from "../../images/tent_hero.webp";
import cardImage from "../../images/bg_airbnbcard.webp";

const Hero = () => {
  return (
    <>
      <Wrapper>
        <div className="container">
          <ImageContainer image={heroImage}>
            <h1 className="heading-primary">
              {" "}
              Not sure where to go? Perfect.{" "}
            </h1>
            <div>
              <Anchor href="#">
                {" "}
                <span>I'm flexible</span>{" "}
              </Anchor>
            </div>
          </ImageContainer>
        </div>
      </Wrapper>
      <HeroSecondary />
    </>
  );
};

export default Hero;

const HeroSecondary = () => {
  return (
    <WrapperSecondary>
      <div className="container">
          <ContentWrapper>
        <Grid>
          <HeroTextBox>
            <IntroHeading>Introducing</IntroHeading>
            <MainHeading>Airbnb gift cards</MainHeading>
            <Btn href="#" >Shop now</Btn>
          </HeroTextBox>

          <HeroImgBox image={cardImage} role="img" />
        </Grid>
        </ContentWrapper>
      </div>
    </WrapperSecondary>
  );
};
