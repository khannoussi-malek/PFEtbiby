import { Button } from "@chakra-ui/button";
import { SimpleGrid } from "@chakra-ui/layout";
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
import { useColorModeValue as mode } from "@chakra-ui/react";

const TableauDynamique = (props) => {
  const { patient, consultation } = props;
  const { user } = useContext(TbibyContext);
  const [total, setTotal] = useState(0);
  const [next, setNext] = useState("");
  const [prev, setPrev] = useState("");
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([""], [""]);
  const header = ["date", "Diagnostic"];
  const toast = useToast();
  const params = {
    patient_id: patient.id,
    medecin_id: user.id,
    page,
  };
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
        <Button
          colorScheme={mode("green", "blue")}
          onClick={() => {
            refetchConsultation();
          }}
        >
          Consultation
        </Button>
        <HistoriqueCertificat patient={patient} />
        <HistoriqueActe patient={patient} />
        <Antecedants patient={patient} />
        <HistoriqueExamen patient={patient} />
        <HistoriqueOrdonnance patient={patient} />
        <HistoriqueLettre patient={patient} />
      </SimpleGrid>
      <TableContent header={header} content={content} fntable={fntable} />
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
