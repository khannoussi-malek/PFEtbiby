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
} from "@chakra-ui/react";
import { TableActions } from "./../../components/table/TableActions";
import { TableContent } from "./../../components/table/TableContent";
import { TablePagination } from "./../../components/table/TablePagination";
import AjouPatient from "./_partials/AjoutPatient";
import { useRelationListe } from "./../../services/api/relation/index";
import { TbibyContext } from "./../../router/context/index";
import { RiFolderUserLine } from "react-icons/ri";
import { EmailIcon } from "@chakra-ui/icons";
import { MdCall } from "react-icons/md";
import { link, userImage } from "./../../services/api/index";
import { useDisclosure } from "@chakra-ui/hooks";

import { useColorModeValue as mode } from "@chakra-ui/react";

import HistoriquePatient from "../../components/historique patient";
const ListPatients = () => {
  const { user, cleanUser } = useContext(TbibyContext);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const toast = useToast();
  const medecin_id = user.id;
  const [total, setTotal] = useState(0);
  const [next, setNext] = useState("");
  const [prev, setPrev] = useState("");
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([[""], [""]]);
  const [patientId, setPatientId] = useState("");
  const params = { medecin_id, patient_id: patientId, page };
  const btnRef = React.useRef();
  const { isLoading, refetch } = useRelationListe({
    params,
    onError: (error) => {
      toast({
        title: "🌐 Problème de connexion",
        description: " Il y a un problème de connexion",
        status: "success",
        duration: `4000`,
        isClosable: true,
      });
    },
    onSuccess: (res) => {
      setTotal(res.data.total);
      setNext(res.data.next_page_url);
      setPrev(res.data.prev_page_url);
      setContent((!!res.data.data && res.data.data) || []);
    },
  });
  const [fntable, setFntable] = useState({
    fn: (data) => (
      <Popover>
        <PopoverTrigger>
          <Button mx={1}>Info</Button>
        </PopoverTrigger>
        <Portal>
          <PopoverContent>
            <PopoverArrow />
            <PopoverHeader>{data.nom + " " + data.prenom} </PopoverHeader>
            <PopoverCloseButton />
            <PopoverBody>
              {!!data.photo ? (
                <Avatar
                  name={data.nom + " " + data.prenom}
                  src={
                    data.photo != null
                      ? `${link}${data.photo}`
                      : `${link}${userImage}`
                  }
                />
              ) : (
                ``
              )}

              {!!data.Adresse ? <Text>Adresse : {data.Adresse} </Text> : ``}
              {!!data.Code_APCI ? (
                <Text>Code_APCI : {data.Code_APCI} </Text>
              ) : (
                ``
              )}
              {!!data.email ? (
                <Text as="a" href={"mailto:" + data.email}>
                  <Button
                    my={1}
                    colorScheme="blue"
                    leftIcon={<EmailIcon />}
                    variant="outline"
                  >
                    Email
                  </Button>
                </Text>
              ) : (
                ``
              )}
              {!!data.telephone ? (
                <Text display="block" as="a" href={"tel:" + data.telephone}>
                  <Button
                    my={1}
                    leftIcon={<MdCall />}
                    colorScheme="blue"
                    variant="outline"
                  >
                    Appeller
                  </Button>
                </Text>
              ) : (
                ``
              )}
              {!!data.cin ? <Text>cin : {data.cin} </Text> : ``}
            </PopoverBody>
            <PopoverFooter>
              Ce sont des informations personnelles sur votre patient
            </PopoverFooter>
          </PopoverContent>
        </Portal>
      </Popover>
    ),
    fn2: (data) => <HistoriquePatient patient={data} />,
  });
  let header = ["Nom", "Prenom"];
  return (
    <React.Fragment>
      <Spinner
        display={!isLoading ? `none` : ``}
        size="xl"
        m="auto"
        color="red.500"
      />
      <Box
        display={isLoading ? `none` : ``}
        as="section"
        py={{ base: 0, md: "12" }}
        w="100%"
      >
        <Box
          maxW={{ base: "xl", md: "7xl" }}
          mx="auto"
          px={{ base: "1", md: "8" }}
        >
          <Box>
            <AjouPatient refetch={refetch} />
            <TableActions
              buttonText="Chercher"
              buttonIcon={<RiFolderUserLine fontSize="1.25em" />}
              chercherFn={setPatientId}
            />

            <TableContent header={header} content={content} fntable={fntable} />
            <TablePagination
              total={total}
              next_page_url={next}
              prev_page_url={prev}
              page={page}
              setPage={setPage}
            />
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default ListPatients;
