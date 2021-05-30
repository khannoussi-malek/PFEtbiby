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
import { TableContent } from "../../table/TableContent";
import { TablePagination } from "../../table/TablePagination";
import ContentLetter from "./content";
const HistoriqueLettre = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { patient } = props;

  const btnRef = React.useRef();
  return (
    <>
      <Button ref={btnRef} colorScheme={mode("green", "blue")} onClick={onOpen}>
        Lettre
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
          <DrawerHeader>Lettre</DrawerHeader>

          <DrawerBody>
            <ContentLetter patient={patient} />
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

export default HistoriqueLettre;
