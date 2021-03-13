import React from "react";
import { Stack, Text, useColorModeValue as mode, Box } from "@chakra-ui/react";
import { SidebarLink } from "./../SidebarLink";
import {
  BsFillBookmarksFill,
  BsFillInboxFill,
  BsBoxArrowLeft,
  BsPencilSquare,
  BsSearch,
} from "react-icons/bs";
import { useHistory } from "react-router-dom";
const Menu = () => {
  let history = useHistory();
  const logout = () => {
    localStorage.clear();
    history.push("/login");
  };
  const NavSectionTitle = (props: TextProps) => (
    <Text
      casing="uppercase"
      fontSize="xs"
      fontWeight="semibold"
      letterSpacing="wide"
      paddingStart="3"
      color="gray.400"
      {...props}
    ></Text>
  );
  return (
    <React.Fragment>
      <Box mb={{ base: 8 }}>
        <SidebarLink
          display={{ base: "block", lg: "none" }}
          mb="2"
          icon={<BsSearch />}
        >
          Searchhh
        </SidebarLink>
        <Stack pb="6">
          <SidebarLink icon={<BsFillInboxFill />}>Inbox</SidebarLink>
          <SidebarLink icon={<BsFillBookmarksFill />}>Bookmarks</SidebarLink>
          <SidebarLink icon={<BsPencilSquare />}>Drafts</SidebarLink>
        </Stack>
        <Stack pb="6">
          <NavSectionTitle>Chats</NavSectionTitle>
          <SidebarLink>🎉 Inbox</SidebarLink>
          <SidebarLink>👍 Personal</SidebarLink>
          <SidebarLink>🦋 Work</SidebarLink>
        </Stack>
      </Box>
      <Box pos="fixed" bottom="3%" left={3}>
        <Stack
          bgColor="red.400"
          pos="fixed"
          bottom="24px"
          rounded={{ base: 5 }}
          w={{ base: "100%", md: "50%" }}
          left={{ base: "150px" }}
        >
          <SidebarLink
            onClick={logout}
            icon={<BsBoxArrowLeft />}
            fontSize="md"
            pb="6"
          >
            log out
          </SidebarLink>
        </Stack>
      </Box>
    </React.Fragment>
  );
};

export default Menu;
