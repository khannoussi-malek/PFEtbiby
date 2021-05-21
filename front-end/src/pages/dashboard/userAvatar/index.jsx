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
import { link, userImage } from "./../../../services/api";
import { TbibyContext } from "./../../../router/context";

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
            src={image != null ? `${link}${image}` : ``}
            name={user.nom + " " + user.prenom}
          />
          <Box lineHeight="1">
            <Text fontWeight="semibold">{user.nom + " " + user.prenom}</Text>
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
