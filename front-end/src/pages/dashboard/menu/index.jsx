import React, { Components, useContext } from "react";
import { Stack, Box } from "@chakra-ui/react";
import { SidebarLink } from "./../SidebarLink";
import {
  BsBoxArrowLeft,
  BsSearch,
  BsFillCalendarFill,
  BsFillPersonLinesFill,
  BsBookmarks,
  BsAlarm,
  BsFillPeopleFill,
  BsHeartFill,
} from "react-icons/bs";

import { BiClipboard } from "react-icons/bi";
import { useHistory } from "react-router-dom";
import { TbibyContext } from "./../../../router/context";
const Menu = () => {
  const { user, cleanUser } = useContext(TbibyContext);
  let history = useHistory();
  let logout = () => {
    cleanUser();
    history.push("/login");
  };

  let pages = [];
  let Patientmenu = [
    { url: "Mon rendez vous", icon: <BsFillCalendarFill /> },
    { url: "Mes médecins", icon: <BsFillPersonLinesFill /> },
    { url: "Mes Rappels", icon: <BsAlarm /> },
    { url: "Reserver rendez-vous", icon: <BsBookmarks /> },
    { url: "Chercher médecin", icon: <BsSearch /> },
  ];
  if (user.fonctionnalite == "patient") {
    pages = Patientmenu;
  } else if (user.fonctionnalite == "medecin") {
    pages = [
      { url: "Mes patients", icon: <BsFillPeopleFill /> },
      { url: "Consultation", icon: <BsHeartFill /> },
      { url: "Modèle de certificat", icon: <BiClipboard /> },
    ];
  } else if (user.fonctionnalite == "secretaire") {
    pages = Patientmenu;
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
        left={{ base: "120px", md: "140px" }}
      >
        <Stack bgColor="red.300" rounded={8}>
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
