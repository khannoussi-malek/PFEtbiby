import { Box, Text, useColorModeValue as mode } from "@chakra-ui/react";
const TextInfo = (props) => {
  const { data, type } = props;
  if (data == null) {
    return null;
  }
  return (
    <Box>
      <Text
        fontSize="xl"
        borderBottom="1px"
        borderColor={mode("green.300", "gray.500")}
        px={2}
        display="inline"
        color={mode("green.700", "gray.50")}
      >
        {type}:
      </Text>
      <Text fontSize="xl" px={2} display="inline" color="gray.500">
        {data}
      </Text>
    </Box>
  );
};
export default TextInfo;
