import {
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
} from "@chakra-ui/popover";
import { useColorModeValue as mode } from "@chakra-ui/react";
import { useBreakpointValue } from "@chakra-ui/media-query";
import { Text } from "@chakra-ui/react";
const DescriptionMobile = (props) => {
  const { data } = props;
  const isMobile = useBreakpointValue({ base: true, lg: false });

  return isMobile ? (
    <Text fontSize="20px" color={mode("green.700", "gray.50")} m={1}>
      <Popover>
        <PopoverTrigger>
          <Text
            textAlign="center"
            bgColor={mode("green.100", "gray.500")}
            _hover={{
              background: mode("blue.100", "gray.600"),
            }}
            style={{ cursor: "pointer" }}
            borderRadius="20px"
            p={2}
            colorScheme="green"
          >
            Description
          </Text>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader>Plus d'information</PopoverHeader>
          <PopoverBody>{data.description}</PopoverBody>
        </PopoverContent>
      </Popover>
    </Text>
  ) : null;
};
export default DescriptionMobile;
