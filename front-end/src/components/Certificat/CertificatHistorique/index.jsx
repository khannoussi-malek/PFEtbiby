import React from "react";
import { Button, useDisclosure } from "@chakra-ui/react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { useColorModeValue as mode } from "@chakra-ui/react";
import ContentCertificat from "./content";
const HistoriqueCetificat = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { patient } = props;

  const btnRef = React.useRef();

  return (
    <>
      <Button ref={btnRef} colorScheme={mode("green", "blue")} onClick={onOpen}>
        Certificat
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
          <DrawerHeader>Certificat</DrawerHeader>

          <DrawerBody>
            <ContentCertificat patient={patient} />
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

export default HistoriqueCetificat;
