import { createGlobalStyle } from "styled-components";
import WallPaper from "./Images/wallpaper-pokeball.png"

export const GlobalStyle = createGlobalStyle`
body {
  background-image: url(${WallPaper});
  background-attachment: fixed;
}

h2 {
  font-family: Inter;
  font-size: 32px;
  font-weight: 700;
  line-height: 38.73px;
  color: white;
}

p{
  color: white;
}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
`