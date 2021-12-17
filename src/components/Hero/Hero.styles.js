import styled from "styled-components";
/*
--- 01 TYPOGRAPHY SYSTEM

- Font sizes (px)
10 / 12 / 14 / 16 / 18 / 20 / 24 / 30 / 36 / 44 / 52 / 62 / 74 / 86 / 98

- Font weights
Default: 400
Medium: 500
Semi-bold: 600
Bold: 700

- Line heights
Default: 1
Small: 1.05
Medium: 1.2
Paragraph default: 1.6

- Letter spacing
-0.5px
0.75px
*/
//
export const Wrapper = styled.section`
  background-color: var(--black);
  padding: 9.6rem;
`;

export const ImageContainer = styled.div`
  background: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  width: 100%;
  aspect-ratio: 2/1;

  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  justify-content: end;
  align-items: center;
  padding-bottom: 6.4rem;
  border-radius: 12px;
`;
export const Anchor = styled.a`
  :link,
  :visited {
    font-size: 18px;
    line-height: 24px;
    padding: 1.6rem 3.2rem;
    text-decoration: none;
    font-weight: 800;
    display: inline-block;
    background-color: var(--white);
    border-radius: 1000px;
  }
  span {
    background: -webkit-linear-gradient(90deg, #6f019c 0%, #c6017e 135.12%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
//
export const WrapperSecondary = styled.section`
  /* background-color: var(--black); */
`;
export const ContentWrapper = styled.div`
background-color: rgb(239,239,239);
border-radius: 12px;
overflow: hidden;
margin-top: 0.2rem;



`


export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  aspect-ratio: 2/1;


`;

export const HeroTextBox = styled.div`
display: flex;
flex-direction: column;
gap: 2.4rem;
align-items: center;
justify-content: center;
max-width: 45rem;
align-self: center;
justify-self: center;


`;
export const IntroHeading = styled.span`
  font-size: 2.4rem;
  color: var(--darkGrey);
  font-weight: 600;
  text-align: center;


`;

export const MainHeading = styled.h2`
  font-size: 9.4rem;
  line-height: -1;
  color: var(--darkgrey);
  font-weight: 600;
  text-align: center;

`;
export const Btn = styled.a`
  :link,
  :visited {
    padding: 1.4rem 2.4rem;
    font-size: var(--btn-fs);
    background-color: var(--darkGrey);
    color: var(--white);
    text-decoration: none;
    border-radius: 5px;
  text-align: center;

  }
`;

export const HeroImgBox = styled.div`
  background: url(${(props) => props.image});
  background-size: cover;
  background-position: right;

`;
