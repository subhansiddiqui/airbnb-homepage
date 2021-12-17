import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
:root{
    --max-width : calc(min(1760px, 100%) - 160px) ;
    /* colors */
    --white: #fff;
    --darkGrey : #222222;
    --black : #000000;
    --white-darken : #ebebeb;
    --light-grey : #717171;
    /* fs = font size */
    --primary-heading-fs : 4.8rem;
    --section-intro-fs : 2.6rem;
    --card-intro-fs : 4.2rem;
    --btn-fs : 1.6rem;
    --hero-btn-fs : 1.8rem;
    --info-sec-fs : 2.2rem;
    --font-size-small : 14px;






}
*,
*::after,
*::before {
    margin: 0;
    padding: 0;
    font-family: 'DM Sans', sans-serif;
    box-sizing: inherit;
}
html {
  font-size: 62.5%;


}
body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    line-height: 1;
    overflow-x: hidden;

    .container {
  max-width: 144rem;
  margin: 0 auto;
  padding: 0 3.2rem;
  


}

.heading-primary{
    font-size: var(--primary-heading-fs);
    color: var(--white);
  line-height: 1.05;
    text-align: center;

}







        
    
}

`;
