import { extendTheme } from "@chakra-ui/react";
import WallPaper from "../Images/wallpaper-pokeball.png"
import AshCursor from "../Icons/ash_cursor.png"


export const theme = extendTheme({
  styles: {
    global: {
      body: {
        bgImage: `url(${WallPaper})`,
        bgAttachment: 'fixed',
        cursor: `url(${AshCursor}), auto`,
      },
        h2: {
          fontFamily: 'Inter',
          fontSize: '32px',
          fontWeight: 700,
          lineHeight: '38px',
          color: 'white',
        },
      p: {
        color: 'white',
      }
    }
  }
})