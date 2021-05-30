import React, { useState, useContext } from "react";
import { useToast, Button, useDisclosure } from "@chakra-ui/react";
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
import { TbibyContext } from "../../../router/context";
import { TableContent } from "../../table/TableContent";
import { TablePagination } from "../../table/TablePagination";
import { useHistoriqueListExamen } from "../../../services/api/Historique patient";
import ContentExamen from "./content";
const HistoriqueExamen = (props) => {
  const { user, cleanUser } = useContext(TbibyContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { patient } = props;

  const btnRef = React.useRef();

  // let header = ["Note", "Type", "Prix"];
  return (
    <>
      <Button
        ref={btnRef}
        onClick={onOpen}
        colorScheme={mode("green", "green")}
      >
        Examen
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
          <DrawerHeader>Examen</DrawerHeader>

          <DrawerBody>
            <ContentExamen patient={patient} />
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

export default HistoriqueExamen;
