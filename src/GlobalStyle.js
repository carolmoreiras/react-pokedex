import { createGlobalStyle } from "styled-components";
import WallPaper from "./Images/wallpaper-pokeball.png"
import AshCursor from "./Icons/ash_cursor.png"

export const GlobalStyle = createGlobalStyle`
body {
  background-image: url(${WallPaper});
  background-attachment: fixed;
  cursor: url(${AshCursor}), auto;
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