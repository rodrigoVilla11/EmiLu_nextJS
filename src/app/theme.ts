/* theme.ts */
import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
    fonts: {
      heading: 'var(--font-rubik)',
      body: 'var(--font-rubik)',
    },
    colors:{
      lavender: "#CCC9DC",
      charcoal: "#324A5F",
      oxfordBlue: "#1B2A41",
      richBlack: "#0C1821",
      black: "#000000",
      white: "#FFFFFF"
    }
});