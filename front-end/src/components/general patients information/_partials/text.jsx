import { Box, Text } from "@chakra-ui/react";
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
        borderColor="gray.500"
        px={2}
        display="inline"
        color="gray.700"
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
