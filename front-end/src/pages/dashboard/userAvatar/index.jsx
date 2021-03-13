import React from "react";
import {
  Avatar,
  Box,
  HStack,
  Text,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import { link, userImage } from "./../../../services/api/index";
const UserAvatar = () => {
  const image = localStorage.getItem("photo");
  console.log(image);
  return (
    <React.Fragment>
      <Box
        as="a"
        href="#"
        p="3"
        display="block"
        transition="background 0.1s"
        rounded="xl"
        _hover={{ bg: "whiteAlpha.200" }}
        whiteSpace="nowrap"
      >
        <HStack display="inline-flex">
          <Avatar
            size="sm"
            src={image != null ? `${link}${image}` : `${link}${userImage}`}
            name="Esther Collins"
          />
          <Box lineHeight="1">
            <Text fontWeight="semibold">
              {localStorage.getItem("nomPrenom")}
            </Text>
            <Text
              fontSize="xs"
              mt="1"
              color={mode("whiteAlpha.700", "gray.400")}
            >
              {localStorage.getItem("email")}
            </Text>
          </Box>
        </HStack>
      </Box>
    </React.Fragment>
  );
};

export default UserAvatar;
