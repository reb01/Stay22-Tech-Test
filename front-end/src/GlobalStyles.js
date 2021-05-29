/** @format */

import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`


html,
body,
div,
span,
p,
ul {
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
}
html {font-family: 'Source Sans Pro', sans-serif;}

/* GLOBAL STYLES */
*,
*:before,
*:after {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  
}
`;

export default GlobalStyles;
