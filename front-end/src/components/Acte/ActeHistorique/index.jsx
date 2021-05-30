import React, { useState, useContext } from "react";
import {
  Box,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Spinner,
  useToast,
  Button,
  Portal,
  PopoverFooter,
  Text,
  Avatar,
  useDisclosure,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { TbibyContext } from "../../../router/context";
import ContentActe from "./content";
const HistoriqueActe = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { patient } = props;
  const btnRef = React.useRef();

  // let header = ["Code", "Designation", "note"];
  return (
    <>
      <Button ref={btnRef} colorScheme={mode("green", "blue")} onClick={onOpen}>
        Acte
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        size="xl"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bg={mode("green.50")}>
          <DrawerCloseButton />
          <DrawerHeader>Acte</DrawerHeader>

          <DrawerBody>
            <ContentActe patient={patient} />
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

export default HistoriqueActe;
