import { Button } from "@chakra-ui/button";
import { SimpleGrid } from "@chakra-ui/layout";
import { useToast } from "@chakra-ui/toast";
import React, { useContext, useState } from "react";
import { TbibyContext } from "../../../router/context";
import { useHistoriqueListConsultation } from "../../../services/api/Historique patient";
import { TableContent } from "../../table/TableContent";
import { TablePagination } from "../../table/TablePagination";

const TableauDynamique = (props) => {
  const { patient } = props;
  const { user } = useContext(TbibyContext);
  const [total, setTotal] = useState(0);
  const [next, setNext] = useState("");
  const [prev, setPrev] = useState("");
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [header, setHeader] = useState([]);
  const toast = useToast();
  const params = { patient_id: patient.id, medecin_id: user.id, page };
  const {
    isLoading: isLodingConsultation,
    refetch: refetchConsultation,
  } = useHistoriqueListConsultation({
    params,
    onError: (error) => {
      toast({
        title: ":globe_with_meridians: Problème de connexion",
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
      setContent(res.data.data);
    },
  });
  return (
    <React.Fragment>
      <SimpleGrid minChildWidth="100px" spacing="10px">
        <Button
          onClick={() => {
            refetchConsultation({
              patient_id: patient.id,
              medecin_id: user.id,
            });
          }}
        >
          Consultation
        </Button>
        <Button>Certificat</Button>
        <Button>Acte</Button>
        <Button>Examen</Button>
        <Button>Ordonnance</Button>
        <Button>Lettre</Button>
      </SimpleGrid>
      <TableContent header={header} content={content} />
      <TablePagination
        total={total}
        next_page_url={next}
        prev_page_url={prev}
        page={page}
        setPage={setPage}
      />
    </React.Fragment>
  );
};
export default TableauDynamique;
