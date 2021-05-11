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

const HistoriquePatient = (props) => {
  const isMobile = useBreakpointValue({ base: true, lg: false });

  const { patient } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <>
      <Button ref={btnRef} m={1} onClick={onOpen}>
        {isMobile ? <BiHistory fontSize="30px" /> : `Historique`}
      </Button>
      <Drawer
        size="xl"
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay>
          <DrawerContent>
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
