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
import TableauDynamique from "./_patials/TableauDynamique";
import { useBreakpointValue } from "@chakra-ui/media-query";
import { BiHistory } from "react-icons/bi";
import { Tooltip } from "@chakra-ui/tooltip";
import { useColorModeValue as mode } from "@chakra-ui/react";

const HistoriquePatient = (props) => {
  const isMobile = useBreakpointValue({ base: true, lg: false });

  const { patient } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <>
      <Button ref={btnRef} m={1} colorScheme="green" onClick={onOpen}>
        <Tooltip
          label={`Tout ce que j'ai fait pour ce patient`}
          aria-label="Tout ce que j'ai fait pour ce patient"
        >
          {isMobile ? <BiHistory fontSize="30px" /> : `Historique`}
        </Tooltip>
      </Button>
      <Drawer
        size="xl"
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay>
          <DrawerContent bg={mode("green.50", "gray.700")}>
            <DrawerCloseButton />
            <DrawerHeader>Historique patient</DrawerHeader>

            <DrawerBody>
              <TableauDynamique patient={patient} />
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
export default HistoriquePatient;
