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
import { useColorModeValue as mode, useToast } from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { TbibyContext } from "../../router/context";

import DetailConsultation from "./_partial/DetailConsultation";

const HistoriqueConsultation = (props) => {
  const { data } = props;
  const { user } = useContext(TbibyContext);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <>
      <Button
        ref={btnRef}
        m={1}
        colorScheme={mode("green", "green")}
        onClick={onOpen}
      >
        Historique Consultation
      </Button>
      <Drawer
        size="xl"
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay>
          <DrawerContent bg={mode("green.50", "gray.700")}>
            <DrawerCloseButton />
            <DrawerHeader>Historique consultation</DrawerHeader>

            <DrawerBody>
              <DetailConsultation data={data} />
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

export default HistoriqueConsultation;
