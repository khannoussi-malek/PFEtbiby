import { Button } from "@chakra-ui/button";
import { SimpleGrid } from "@chakra-ui/layout";
import { useToast } from "@chakra-ui/toast";
import React, { useContext, useState } from "react";
import { TbibyContext } from "../../../router/context";
import {
  useHistoriqueListConsultation,
  useHistoriqueListCertificat,
  useHistoriqueListActe,
  useHistoriqueListAntecedants,
  useHistoriqueListExamen,
  useHistoriqueListOrdonnance,
  useHistoriqueListLettre,
} from "../../../services/api/Historique patient";
import HistoriqueActe from "../../Acte/ActeHistorique";
import Antecedants from "../../Antecedants";
import { TableContent } from "../../table/TableContent";
import { TablePagination } from "../../table/TablePagination";

const TableauDynamique = (props) => {
  const { patient, consultation } = props;
  const { user } = useContext(TbibyContext);
  const [total, setTotal] = useState(0);
  const [next, setNext] = useState("");
  const [prev, setPrev] = useState("");
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([""], [""]);
  const [header, setHeader] = useState([]);
  const toast = useToast();
  const params = {
    patient_id: patient.id,
    medecin_id: user.id,
    //consultation_id: consultation.id,
    page,
  };
  const {
    isLoading: isLodingConsultation,
    refetch: refetchConsultation,
  } = useHistoriqueListConsultation({
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
      setContent((!!res.data.data && res.data.data) || []);
      res.data.data !== [] && setHeader(["Diagnostic"]);
    },
  });

  const {
    isLoading: isLodingCertificat,
    refetch: refetchCertifcat,
  } = useHistoriqueListCertificat({
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
      res.data.data !== [] && setContent(res.data.data);
      res.data.data !== [] && setHeader(["structure"]);
    },
  });

  const {
    isLoading: isLodingAntecedants,
    refetch: refetchAntecedants,
  } = useHistoriqueListAntecedants({
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
      res.data.data !== [] && setContent(res.data.data);
      res.data.data !== [] && setHeader(["description"]);
    },
  });

  const {
    isLoading: isLodingExamen,
    refetch: refetchExamen,
  } = useHistoriqueListExamen({
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
      res.data.data !== [] && setContent(res.data.data);
      res.data.data !== [] && setHeader(["nom"]);
    },
  });

  const {
    isLoading: isLodingOrdonnance,
    refetch: refetchOrdonnance,
  } = useHistoriqueListOrdonnance({
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
      res.data.data !== [] && setContent(res.data.data);
      res.data.data !== [] && setHeader(["description"]);
    },
  });

  const {
    isLoading: isLodingLettre,
    refetch: refetchLettre,
  } = useHistoriqueListLettre({
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
      res.data.data !== [] && setContent(res.data.data);
      res.data.data !== [] && setHeader(["description"]);
    },
  });
  return (
    <React.Fragment>
      <SimpleGrid minChildWidth="100px" spacing="10px">
        <Button
          onClick={() => {
            refetchConsultation();
          }}
        >
          Consultation
        </Button>
        <Button
          onClick={() => {
            refetchCertifcat();
          }}
        >
          Certificat
        </Button>
        {/* <Button
          onClick={() => {
            refetchActe();
          }}
        >
          Acte
        </Button> */}
        <HistoriqueActe patient={patient} />
        <Antecedants patient={patient} />

        <Button
          onClick={() => {
            refetch: refetchExamen();
          }}
        >
          Examen
        </Button>
        <Button
          onClick={() => {
            refetch: refetchOrdonnance();
          }}
        >
          Ordonnance
        </Button>
        <Button
          onClick={() => {
            refetch: refetchLettre();
          }}
        >
          Lettre
        </Button>
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
