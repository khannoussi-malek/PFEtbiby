import { Box, Heading, Stack, StackProps } from "@chakra-ui/react";
import * as React from "react";

interface FieldGroupProps extends StackProps {
  title?: string;
}

export const FieldGroup = (props) => {
  const { title, children, ...flexProps } = props;
  return (
    <Stack
      direction={{ base: "column", md: "row" }}
      spacing="6"
      py="4"
      {...flexProps}
    >
      <Box
      // w={{ base: "100%", md: "200px", lg: "200px" }}
      // minW={{ base: "3xs", md: "10px", lg: "xs" }}
      >
        {title && (
          <Heading as="h2" fontWeight="semibold" fontSize="lg" flexShrink={0}>
            {title}
          </Heading>
        )}
      </Box>
      {children}
    </Stack>
  );
};
