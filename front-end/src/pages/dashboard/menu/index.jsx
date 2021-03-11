import React from "react";
import { Stack, Text, useColorModeValue as mode } from "@chakra-ui/react";
import { SidebarLink } from "./../SidebarLink";
import {
  BsFillBookmarksFill,
  BsFillInboxFill,
  BsBoxArrowLeft,
  BsPencilSquare,
  BsSearch,
} from "react-icons/bs";

const Menu = () => {
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
      <SidebarLink
        display={{ base: "block", lg: "none" }}
        mb="2"
        icon={<BsSearch />}
      >
        Search
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
      <Stack>
        <SidebarLink
          icon={<BsBoxArrowLeft />}
          fontSize="md"
          pb="6"
          pos="fixed"
          bottom="3%"
          left={3}
        >
          log out
        </SidebarLink>
      </Stack>
    </React.Fragment>
  );
};

export default Menu;
