import React, { useContext } from "react";
import { Button, useDisclosure } from "@chakra-ui/react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import { TbibyContext } from "../../../router/context";
import ContentOrdonnance from "./content";
const HistoriqueOrdonnance = (props) => {
  const { user, cleanUser } = useContext(TbibyContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { patient } = props;

  const btnRef = React.useRef();

  //   let header = ["Description"];
  return (
    <>
      <Button ref={btnRef} onClick={onOpen} colorScheme={mode("green", "blue")}>
        Ordonnance
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        size="xl"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bg={mode("green.50", "gray.700")}>
          <DrawerCloseButton />
          <DrawerHeader>Ordonnance</DrawerHeader>

          <DrawerBody>
            <ContentOrdonnance patient={patient} />
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Annuler
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default HistoriqueOrdonnance;
