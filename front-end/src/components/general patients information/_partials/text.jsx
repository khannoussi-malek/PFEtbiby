import { Box, Text } from "@chakra-ui/react";
const TextInfo = (props) => {
  const { data, type } = props;
  return (
    <Box>
      <Text
        fontSize="xl"
        borderBottom="1px"
        borderColor="gray.400"
        px={2}
        display="inline"
        color="gray.600"
      >
        {type}: {data}
      </Text>
    </Box>
  );
};
export default TextInfo;
