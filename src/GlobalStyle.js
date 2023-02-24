import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body {
  background-color: #DDDDDD;
}

h1 {
  font-family: Inter;
  font-size: 32px;
  font-weight: 700;
  line-height: 38.73px;
  color: white;
}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
`