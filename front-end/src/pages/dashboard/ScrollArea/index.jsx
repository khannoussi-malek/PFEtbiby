import React from "react";
import { Box, BoxProps, useColorModeValue as mode } from "@chakra-ui/react";
const ScrollArea = (props: BoxProps) => (
  <Box
    overflowY="auto"
    height="85vh"
    minH="px"
    maxH="full"
    {...props}
    sx={{
      "&::-webkit-scrollbar-track": {
        bg: "transparent",
      },
      "&::-webkit-scrollbar": {
        width: "8px",
      },
      "&::-webkit-scrollbar-thumb": {
        bg: mode("green.500", "gray.700"),
        borderRadius: "20px",
      },
    }}
  />
);

export default ScrollArea;
