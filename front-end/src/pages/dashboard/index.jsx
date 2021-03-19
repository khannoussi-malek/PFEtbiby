import {
  Box,
  Flex,
  useBoolean,
  useBreakpointValue,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import { NavBreadcrumb } from "./_partials";
import * as React from "react";
import { HiMenu, HiX } from "react-icons/hi";
import ScrollArea from "./ScrollArea/index";
import Menu from "./menu";
import UserAvatar from "./userAvatar/index";
import ActivityArea from "./activityArea/index";
import { useLocation } from "react-router-dom";

const Dashboard = () => {
  const { pathname } = useLocation();
  const { isOpen, toggle } = useMobileMenuState();
  return (
    <Flex
      height="100vh"
      bg={mode("gray.600", "inherit")}
      overflow="hidden"
      sx={{ "--sidebar-width": "256px" }}
    >
      <Box
        as="nav"
        display="block"
        flex="1"
        width="var(--sidebar-width)"
        left="0"
        py="5"
        px="3"
        color="gray.200"
        position="fixed"
      >
        <Box fontSize="sm" lineHeight="tall">
          <UserAvatar />
          <ScrollArea pt="5" pb="6">
            <Menu />
          </ScrollArea>
        </Box>
      </Box>
      <Box
        flex="1"
        p={{ base: "0", md: "6" }}
        marginStart={{ md: "var(--sidebar-width)" }}
        position="relative"
        left={isOpen ? "var(--sidebar-width)" : "0"}
        transition="left 0.2s"
      >
        <Box
          maxW="2560px"
          bg={mode("white", "gray.700")}
          height="100%"
          pb="6"
          rounded={{ md: "lg" }}
        >
          <Flex direction="column" height="full">
            <Flex
              w="full"
              py="4"
              justify="space-between"
              align="center"
              px="10"
            >
              <Flex align="center" minH="8">
                <MobileMenuButton onClick={toggle} isOpen={isOpen} />
                <NavBreadcrumb path={pathname} />
              </Flex>
            </Flex>
            <Flex
              direction="column"
              flex="1"
              overflow="auto"
              px={{ base: 2, md: 6, lg: 8 }}
            >
              <ActivityArea />
            </Flex>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
};

const MobileMenuButton = (props: { onClick: () => void, isOpen: boolean }) => {
  const { onClick, isOpen } = props;
  return (
    <Box
      display={{ base: "block", md: "none" }}
      ml="-8"
      mr="2"
      as="button"
      type="button"
      rounded="md"
      p="1"
      fontSize="xl"
      color="gray.500"
      _hover={{ bg: "gray.100" }}
      onClick={onClick}
    >
      <Box srOnly>{isOpen ? "Close Menu" : "Open Menu"}</Box>
      {isOpen ? <HiX /> : <HiMenu />}
    </Box>
  );
};

const useMobileMenuState = () => {
  const [isOpen, actions] = useBoolean();
  const isMobile = useBreakpointValue({ base: true, lg: false });
  React.useEffect(() => {
    if (isMobile == false) {
      actions.off();
    }
  }, [isMobile, actions]);
  return { isOpen, ...actions };
};

export default Dashboard;
