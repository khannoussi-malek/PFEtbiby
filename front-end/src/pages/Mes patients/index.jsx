import React, { useState, useContext } from "react";
import { Box, Spinner, useToast } from "@chakra-ui/react";
import { TableActions } from "./../../components/table/TableActions";
import { TableContent } from "./../../components/table/TableContent";
import { TablePagination } from "./../../components/table/TablePagination";
import AjouPatient from "./_partials/AjoutPatient";
import { useRelationListe } from "./../../services/api/relation";
import { TbibyContext } from "./../../router/context";
import { RiFolderUserLine } from "react-icons/ri";
import { useDisclosure } from "@chakra-ui/hooks";

import HistoriquePatient from "../../components/historique patient";
import PatientInfo from "./../../components/informationSurPatient";
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
    fn: (data) => <PatientInfo data={data} />,
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
              buttonhoverTesxt={`Rechercher 🔎`}
              inputhoverTesxt={`écris quoi que ce soit pour indiquer sur la personne que tu veux trouver`}
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
