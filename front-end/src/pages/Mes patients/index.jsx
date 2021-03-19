import React, { useState, useContext } from "react";
import { Box, Spinner, Button, Text, useToast } from "@chakra-ui/react";
import { TableActions } from "./../../components/table/TableActions";
import { TableContent } from "./../../components/table/TableContent";
import { TablePagination } from "./../../components/table/TablePagination";
import AjouPatient from "./_partials/AjoutPatient";
import { useRelationListe } from "./../../services/api/relation/index";
import { TbibyContext } from "./../../router/context/index";
const ListPatents = () => {
  const { user, cleanUser } = useContext(TbibyContext);

  const toast = useToast();
  const medecin_id = user.id;
  const [total, setTotal] = useState(0);
  const [next, setNext] = useState("");
  const [prev, setPrev] = useState("");
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([[""], [""]]);
  const [patientId, setPatientId] = useState("");
  const params = { medecin_id, patient_id: patientId, page };
  const { data, isLoading, refetch } = useRelationListe({
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
      setContent(res.data.data);
    },
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
        <AjouPatient />
        <Box
          maxW={{ base: "xl", md: "7xl" }}
          mx="auto"
          px={{ base: "1", md: "8" }}
        >
          <Box>
            <Box>
              {/* <TableActions /> */}

              <TableContent header={header} content={content} />
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
      </Box>
    </React.Fragment>
  );
};

export default ListPatents;
