import {
  Avatar,
  Box,
  BoxProps,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbProps,
  Flex,
  Heading,
  HStack,
  Input,
  InputGroup,
  InputGroupProps,
  InputLeftElement,
  InputProps,
  Stack,
  Text,
  TextProps,
  useBoolean,
  useBreakpointValue,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import * as React from "react";
import {
  BsFillBookmarksFill,
  BsFillInboxFill,
  BsBoxArrowLeft,
  BsPencilSquare,
  BsSearch,
} from "react-icons/bs";
import { HiMenu, HiChevronRight, HiX } from "react-icons/hi";
import { data } from "./data";
import { SidebarLink } from "./SidebarLink";
import ScrollArea from "./ScrollArea/index";
import Menu from "./menu";
import UserAvatar from "./userAvatar/index";
import ActivityArea from "./activityArea/index";

const Dashbord = () => {
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
                <NavBreadcrumb />
              </Flex>
              <SearchInput />
            </Flex>
            <Flex direction="column" flex="1" overflow="auto" px="10" pt="8">
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

const NavBreadcrumb = (props: BreadcrumbProps) => (
  <Breadcrumb
    fontSize="lg"
    {...props}
    separator={
      <Box
        as={HiChevronRight}
        color="gray.400"
        fontSize="md"
        top="2px"
        pos="relative"
      />
    }
  >
    <BreadcrumbItem color="inherit">
      <BreadcrumbLink>Welcome</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbItem color="inherit" isCurrentPage>
      <BreadcrumbLink>Product Vision</BreadcrumbLink>
    </BreadcrumbItem>
  </Breadcrumb>
);

const SearchInput = (props: InputProps & { rootProps?: InputGroupProps }) => {
  const { rootProps, ...rest } = props;
  return (
    <InputGroup
      maxW="2xs"
      size="sm"
      variant="filled"
      display={{ base: "none", lg: "block" }}
      {...rootProps}
    >
      <InputLeftElement color="gray.400" pointerEvents="none">
        <BsSearch />
      </InputLeftElement>
      <Input
        {...rest}
        placeholder="Search"
        rounded="md"
        _placeholder={{ color: "gray.400" }}
      />
    </InputGroup>
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

export default Dashbord;
