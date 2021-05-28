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
import { TableContent } from "../../table/TableContent";
import { TablePagination } from "../../table/TablePagination";
import { useHistoriqueListActe } from "../../../services/api/Historique patient";
const HistoriqueActe = (props) => {
  const { user, cleanUser } = useContext(TbibyContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { patient } = props;

  const toast = useToast();
  const medecin_id = user.id;
  const [total, setTotal] = useState(0);
  const [next, setNext] = useState("");
  const [prev, setPrev] = useState("");
  const [page, setPage] = useState(1);
  const [header, setHeader] = useState(["Code", "Designation", "note", "Date"]);
  const [content, setContent] = useState([[""], [""]]);
  const [patientId, setPatientId] = useState("");
  const params = { medecin_id, patient_id: patient.id, page };
  const btnRef = React.useRef();
  const { isLoading: isLodingActe, refetch: refetchActe } =
    useHistoriqueListActe({
      params,
      onError: (error) => {
        toast({
          title: ":Problème de connexion",
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
        setContent((res.data.data && res.data.data) || []);
      },
    });

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

export default HistoriqueActe;
