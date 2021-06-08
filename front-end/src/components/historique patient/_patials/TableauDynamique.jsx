import { Button } from "@chakra-ui/button";
import { Box, SimpleGrid } from "@chakra-ui/layout";
import { useToast } from "@chakra-ui/toast";
import React, { useContext, useState } from "react";
import { TbibyContext } from "../../../router/context";
import { useHistoriqueListConsultation } from "../../../services/api/Historique patient";
import HistoriqueActe from "../../Acte/ActeHistorique";
import Antecedants from "../../Antecedants";
import HistoriqueCertificat from "../../Certificat/CertificatHistorique";
import HistoriqueConsultation from "../../Consultation";
import HistoriqueExamen from "../../Examen/ExamenHistorique";
import HistoriqueLettre from "../../Lettre/LettreHistorique";
import HistoriqueOrdonnance from "../../Ordonnance/OrdonnanceHistorique";
import { TableContent } from "../../table/TableContent";
import { TablePagination } from "../../table/TablePagination";
import { Skeleton, useColorModeValue as mode, Stack } from "@chakra-ui/react";

const TableauDynamique = (props) => {
  let { patient } = props;
  const { user } = useContext(TbibyContext);
  const [total, setTotal] = useState(0);
  const [next, setNext] = useState("");
  const [prev, setPrev] = useState("");
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([""], [""]);
  const header = ["date", "Diagnostic"];
  const toast = useToast();

  let params = {};
  if (!!!patient) {
    params = {
      patient_id: user.id,
      page,
    };
    patient = user;
  } else {
    params = {
      patient_id: patient.id,
      medecin_id: user.id,
      page,
    };
  }

  const { isLoading: isLodingConsultation, refetch: refetchConsultation } =
    useHistoriqueListConsultation({
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
        !!res.data.data &&
          res.data.data.map((value) => {
            if (value.Diagnostic == null) {
              value.Diagnostic = "Aucun diagnostic écrit";
            }
          });
        setContent((!!res.data.data && res.data.data) || []);
      },
    });
  const [fntable, setFntable] = useState({
    fn: (data) => (
      <>
        <HistoriqueConsultation data={data} />
      </>
    ),
  });
  return (
    <React.Fragment>
      <SimpleGrid minChildWidth="100px" spacing="10px">
        <HistoriqueCertificat patient={patient} />
        <HistoriqueActe patient={patient} />
        <Antecedants patient={patient} />
        <HistoriqueExamen patient={patient} />
        <HistoriqueOrdonnance patient={patient} />
        <HistoriqueLettre patient={patient} />
      </SimpleGrid>
      {!isLodingConsultation ? (
        <>
          <TableContent header={header} content={content} fntable={fntable} />
          <TablePagination
            total={total}
            next_page_url={next}
            prev_page_url={prev}
            page={page}
            setPage={setPage}
          />
        </>
      ) : (
        <Stack mt="40px">
          <Skeleton startColor="gray.100" endColor="green.500" height="40px" />
          <Skeleton startColor="gray.100" endColor="green.500" height="40px" />
          <Skeleton startColor="gray.100" endColor="green.500" height="40px" />
          <Skeleton startColor="gray.100" endColor="green.500" height="40px" />
          <Skeleton startColor="gray.100" endColor="green.500" height="40px" />
          <Skeleton startColor="gray.100" endColor="green.500" height="40px" />
          <Skeleton startColor="gray.100" endColor="green.500" height="40px" />
          <Skeleton startColor="gray.100" endColor="green.500" height="40px" />
          <Skeleton startColor="gray.100" endColor="green.500" height="40px" />
          <Skeleton startColor="gray.100" endColor="green.500" height="40px" />
        </Stack>
      )}
    </React.Fragment>
  );
};
export default TableauDynamique;
