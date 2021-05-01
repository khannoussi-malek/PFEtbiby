import React, { useContext } from "react";
import {
  Avatar,
  Box,
  HStack,
  Text,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import { BsGear } from "react-icons/bs";
import { link, userImage } from "./../../../services/api/index";
import { TbibyContext } from "./../../../router/context/index";

const UserAvatar = () => {
  const { user } = useContext(TbibyContext);
  let history = useHistory();
  const image = user.photo;
  return (
    <React.Fragment>
      <Box
        as="div"
        p="3"
        display="block"
        transition="background 0.1s"
        rounded="xl"
        _hover={{ bg: "whiteAlpha.200" }}
        whiteSpace="nowrap"
        onClick={() => {
          history.push("/dashboard/gestion de compte");
        }}
      >
        <HStack>
          <Avatar
            size="md"
            src={image != null ? `${link}${image}` : `${link}${userImage}`}
          />
          <Box lineHeight="1">
            <Text fontWeight="semibold">{user.prenom + " " + user.nom}</Text>
          </Box>
          <Box size="lg" mr={8} right="0px">
            <BsGear />
          </Box>
        </HStack>
      </Box>
    </React.Fragment>
  );
};

export default UserAvatar;
