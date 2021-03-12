import React from "react";
import { Box, BoxProps, useColorModeValue as mode } from "@chakra-ui/react";
const ScrollArea = (props: BoxProps) => (
  <Box
    overflowY="auto"
    height="80vh"
    minH="px"
    maxH="full"
    {...props}
    sx={{
      "&::-webkit-scrollbar-track": {
        bg: "transparent",
      },
      "&::-webkit-scrollbar": {
        width: "4px",
      },
      "&::-webkit-scrollbar-thumb": {
        bg: mode("blue.600", "gray.700"),
        borderRadius: "20px",
      },
    }}
  />
);

export default ScrollArea;