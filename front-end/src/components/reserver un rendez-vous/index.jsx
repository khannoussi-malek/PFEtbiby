import { Button } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/modal";
import { useRef } from "react";
import CalendarReserve from "./calendar/index";
import { useBreakpointValue } from "@chakra-ui/media-query";
import { BiHomeHeart } from "react-icons/bi";
import { Tooltip } from "@chakra-ui/tooltip";
const ReserverUnRendezVous = (props) => {
  const { data } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const isMobile = useBreakpointValue({ base: true, lg: false });

  return (
    <>
      <Tooltip
        label="Consultez la salle d'attente"
        aria-label="Consultez la salle d'attente"
      >
        <Button ref={btnRef} size="sm" my={3} onClick={onOpen}>
          {isMobile ? <BiHomeHeart fontSize="30px" /> : `Rendez-vous `}
        </Button>
      </Tooltip>
      <Drawer
        size="full"
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>
              Salle d'attente {data.nom} {data.prenom} 🪑{" "}
            </DrawerHeader>

            <DrawerBody>
              <CalendarReserve data={data} />
            </DrawerBody>

            <DrawerFooter>
              <Button variant="outline" mr={3} onClick={onClose}>
                Annuler
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};
export default ReserverUnRendezVous;
