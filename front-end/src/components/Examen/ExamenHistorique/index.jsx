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
import { TbibyContext } from "../../../router/context";
import { TableContent } from "../../table/TableContent";
import { TablePagination } from "../../table/TablePagination";
import { useHistoriqueListExamen } from "../../../services/api/Historique patient";
const HistoriqueExamen = (props) => {
  const { user, cleanUser } = useContext(TbibyContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { patient } = props;

  const toast = useToast();
  const medecin_id = user.id;
  const [total, setTotal] = useState(0);
  const [next, setNext] = useState("");
  const [prev, setPrev] = useState("");
  const [page, setPage] = useState(1);
  const [header, setHeader] = useState([]);

  const [content, setContent] = useState([[""], [""]]);
  const [patientId, setPatientId] = useState("");
  const params = { medecin_id, patient_id: patient.id, page };
  const btnRef = React.useRef();
  const {
    isLoading: isLodingExamen,
    refetch: refetchExamen,
  } = useHistoriqueListExamen({
    params,
    onError: (error) => {
      toast({
        title: "Problème de connexion",
        description: " Il y a un problème de connexion",
        status: "success",
        duration: 4000,
        isClosable: true,
      });
    },
    onSuccess: (res) => {
      setTotal(res.data.total);
      setNext(res.data.next_page_url);
      setPrev(res.data.prev_page_url);
      res.data.data !== [] && setContent(res.data.data);
      res.data.data !== [] && setHeader(["Note", "Type", "Prix"]);
    },
  });

  // let header = ["Note", "Type", "Prix"];
  return (
    <>
      <Button ref={btnRef} onClick={onOpen}>
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
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Examen</DrawerHeader>

          <DrawerBody>
            <TableContent header={header} content={content} />
            <TablePagination
              total={total}
              next_page_url={next}
              prev_page_url={prev}
              page={page}
              setPage={setPage}
            />
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
