import { extendTheme } from "@chakra-ui/react";
import { globalStyle } from "./globalStyle";

const overwrite = {
  styles: {
    global: () => ({
      ...globalStyle,
    }),
  },
};
export const customTheme = extendTheme(overwrite);
