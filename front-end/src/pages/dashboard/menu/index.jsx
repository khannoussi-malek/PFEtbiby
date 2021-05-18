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
} from "react-icons/bs";

import {
  BiClipboard,
  BiDonateHeart,
  BiLayer,
  BiCalendarAlt,
  BiPlusMedical,
} from "react-icons/bi";

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
    { url: "dashboard", icon: <BiCalendarAlt fontSize="20px" /> },
    { url: "Mes rendez vous", icon: <BsFillCalendarFill fontSize="20px" /> },
    { url: "Mes médecins", icon: <BsFillPersonLinesFill fontSize="20px" /> },
    { url: "Trouver un médecin", icon: <BsSearch fontSize="20px" /> },
  ];
  if (user.fonctionnalite == "patient") {
    pages = Patientmenu;
  } else if (user.fonctionnalite == "medecin") {
    pages = [
      { url: "dashboard", icon: <BiCalendarAlt fontSize="20px" /> },
      { url: "Mes patients", icon: <BsFillPeopleFill fontSize="20px" /> },
      { url: "Consultation", icon: <BiDonateHeart fontSize="20px" /> },
      { url: "Modèle de certificat", icon: <BiClipboard fontSize="20px" /> },
      { url: "Liste d'actes", icon: <BiLayer fontSize="20px" /> },
      { url: "Liste medicament", icon: <BiPlusMedical fontSize="20px" /> },
    ];
  } else if (user.fonctionnalite == "secretaire") {
    pages = Patientmenu;
  }

  return (
    <React.Fragment>
      <Box mb={{ base: "70px" }}>
        {pages.map((page) => (
          <SidebarLink
            key={page.url}
            linkto={page.url == "dashboard" ? `` : page.url}
            icon={page.icon}
          >
            {page.url}
          </SidebarLink>
        ))}
      </Box>
      <Box
        pos="fixed"
        w={{ base: "62%", md: "50%" }}
        bottom={{ base: "20px", md: "24px" }}
        left={{ base: "72px", md: "95px" }}
      >
        <Stack bgColor="red.300" rounded={8}>
          <SidebarLink
            onClick={logout}
            icon={<BsBoxArrowLeft />}
            fontSize="xlx"
            p={4}
          >
            Se déconnecter
          </SidebarLink>
        </Stack>
      </Box>
    </React.Fragment>
  );
};

export default Menu;
