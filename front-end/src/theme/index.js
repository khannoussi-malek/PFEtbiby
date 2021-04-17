import { extendTheme } from "@chakra-ui/react";
import { globalStyle } from "./globalStyle";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};
const theme = extendTheme({ config });
export default theme;
const overwrite = {
  styles: {
    global: () => ({
      ...globalStyle,
    }),
  },
};
export const customTheme = extendTheme(overwrite);
