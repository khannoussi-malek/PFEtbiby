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
const ReserverUnRendezVous = (props) => {
  const { data } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  return (
    <>
      <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
        Open
      </Button>
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
            <DrawerHeader>Create your account</DrawerHeader>

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
