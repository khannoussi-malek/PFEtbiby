import { Button } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import { Box, SimpleGrid } from "@chakra-ui/layout";
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
import React, { useContext, useState } from "react";
import { TbibyContext } from "../../router/context";
import { useHistoriqueListCertificat } from "../../services/api/Historique patient";

const HistoriqueConsultation = (props) => {
  const { patient } = props;
  const { user } = useContext(TbibyContext);
  const [page, setPage] = useState(1);

  // const params = {
  //   patient_id: patient.id,
  //   medecin_id: user.id,
  //   page,
  // };
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  // const { isLoading: isLoadingCertificat, reftch: refetchCertificat } =
  //   useHistoriqueListCertificat({
  //     params,
  //   });
  return (
    <>
      <Button ref={btnRef} m={1} onClick={onOpen}>
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
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Historique patient</DrawerHeader>

            <DrawerBody>
              <SimpleGrid minChildWidth="100px" spacing="10px">
                <Button>Certificat</Button>
                <Button>Acte</Button>
                <Button>Antecedant</Button>
                <Button>Examen</Button>
                <Button>Ordonnace</Button>
                <Button>Lettre</Button>
              </SimpleGrid>
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
