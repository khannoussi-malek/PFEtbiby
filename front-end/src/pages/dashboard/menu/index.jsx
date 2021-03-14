import React, { Components } from "react";
import { Stack, useColorModeValue as mode, Box } from "@chakra-ui/react";
import { SidebarLink } from "./../SidebarLink";

import {
  BsBoxArrowLeft,
  BsSearch,
  BsFillCalendarFill,
  BsFillPersonLinesFill,
  BsBookmarks,
  BsAlarm,
  BsFillBrightnessHighFill,
} from "react-icons/bs";
import { useHistory } from "react-router-dom";
// import PatientMenu from "./patient";
// import Medecinmenu from "./medecin";
// import Secretairenmenu from "./secretaire";
import {} from "react-icons/bs";
const Menu = () => {
  let history = useHistory();
  const logout = () => {
    localStorage.clear();
    history.push("/login");
  };
  let pages;
  let Pationmenu = [
    { url: "Mon rendez vous", icon: <BsFillCalendarFill /> },
    { url: "Mon médecin", icon: <BsFillPersonLinesFill /> },
    { url: "Rappel", icon: <BsAlarm /> },
    { url: "Reservi un rendez vous", icon: <BsBookmarks /> },
    { url: "Cherche médecin", icon: <BsSearch /> },
  ];
  console.log(localStorage.getItem("fonctionnalite"));
  if (localStorage.getItem("fonctionnalite") == "patient") {
    pages = Pationmenu;
  } else if (localStorage.getItem("fonctionnalite") == "medecin") {
    pages = [];
  } else if (localStorage.getItem("fonctionnalite") == "secretaire") {
    pages = Pationmenu;
  }

  return (
    <React.Fragment>
      <Box mb={{ base: "70px" }}>
        {pages.map((page) => (
          <SidebarLink key={page.url} linkto={page.url} icon={page.icon}>
            {page.url}
          </SidebarLink>
        ))}
      </Box>
      <Box
        pos="fixed"
        w={{ base: "100%", md: "50%" }}
        bottom="24px"
        left={{ base: "120px", md: "160px" }}
      >
        <Stack bgColor="red.400" rounded={8}>
          <SidebarLink
            onClick={logout}
            icon={<BsBoxArrowLeft />}
            fontSize="xlx"
            p={4}
          >
            log out
          </SidebarLink>
        </Stack>
      </Box>
    </React.Fragment>
  );
};

export default Menu;
