import React, { Components, useContext } from "react";
import { Stack, Box } from "@chakra-ui/react";
import { SidebarLink } from "./../SidebarLink";
import {
  BsBoxArrowLeft,
  BsSearch,
  BsFillCalendarFill,
  BsFillPersonLinesFill,
  BsFillPeopleFill,
} from "react-icons/bs";
import { useLocation, useHistory } from "react-router-dom";

import {
  BiClipboard,
  BiDonateHeart,
  BiLayer,
  BiCalendarAlt,
  BiPlusMedical,
  BiDetail,
} from "react-icons/bi";

import { TbibyContext } from "./../../../router/context";
const Menu = () => {
  const { user, cleanUser } = useContext(TbibyContext);
  let history = useHistory();
  const { pathname } = useLocation();
  let logout = () => {
    cleanUser();
    history.push("/login");
  };

  let pages = [];
  let Patientmenu = [
    { url: "Dashboard", icon: <BiCalendarAlt fontSize="20px" /> },
    { url: "Historiques", icon: <BiDetail fontSize="20px" /> },
    { url: "Trouver un médecin", icon: <BsSearch fontSize="20px" /> },
    { url: "Mes rendez vous", icon: <BsFillCalendarFill fontSize="20px" /> },
    { url: "Mes médecins", icon: <BsFillPersonLinesFill fontSize="20px" /> },
  ];
  if (user.fonctionnalite == "patient") {
    pages = Patientmenu;
  } else if (user.fonctionnalite == "medecin") {
    pages = [
      { url: "Dashboard", icon: <BiCalendarAlt fontSize="20px" /> },

      { url: "Mes patients", icon: <BsFillPeopleFill fontSize="20px" /> },
      { url: "Consultation", icon: <BiDonateHeart fontSize="20px" /> },
      { url: "Modèle de certificat", icon: <BiClipboard fontSize="20px" /> },
      { url: "Liste d'actes", icon: <BiLayer fontSize="20px" /> },
      { url: "Liste medicament", icon: <BiPlusMedical fontSize="20px" /> },
    ];
  } else if (user.fonctionnalite == "secretaire") {
    pages = [
      {
        url: "Dashboard",
        icon: <BiCalendarAlt fontSize="20px" />,
      },
      { url: "Modèle de certificat", icon: <BiClipboard fontSize="20px" /> },
      { url: "Liste d'actes", icon: <BiLayer fontSize="20px" /> },
      { url: "Liste medicament", icon: <BiPlusMedical fontSize="20px" /> },
      { url: "Mon historiques", icon: <BiDetail fontSize="20px" /> },
      { url: "Mes rendez vous", icon: <BsFillCalendarFill fontSize="20px" /> },
      { url: "Mes médecins", icon: <BsFillPersonLinesFill fontSize="20px" /> },
      { url: "Trouver un médecin", icon: <BsSearch fontSize="20px" /> },
    ];
  }
  const customPathName =
    pathname == "/dashboard/" ? pathname : pathname.split("/dashboard/")[1];
  return (
    <React.Fragment>
      <Box mb={{ base: "70px" }}>
        {pages.map((page) => (
          <SidebarLink
            key={page.url}
            linkto={page.url == "Dashboard" ? `` : page.url}
            icon={page.icon}
            isActive={
              customPathName.toLowerCase().indexOf(page.url.toLowerCase()) !==
              -1
            }
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
        <Stack rounded={8}>
          <SidebarLink
            bgColor="gray.600"
            _hover={{
              bgColor: "gray.300",
              color: "black",
            }}
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
