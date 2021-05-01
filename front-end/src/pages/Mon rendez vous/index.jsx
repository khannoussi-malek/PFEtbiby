import React, { useState, useContext } from "react";
import { Box, useToast, Spinner, Heading, Text, Link } from "@chakra-ui/react";
import { useConsultationPatient } from "./../../services/api/consultation/index";
import { TableContent } from "./../../components/table/TableContent";
import { TablePagination } from "./../../components/table/TablePagination";
import { TbibyContext } from "./../../router/context/index";
import { useDeleteReservation } from "./../../services/api/reservation/index";
import G_Alert from "../../components/general alert";
import { CloseIcon } from "@chakra-ui/icons";
import { ExternalLinkIcon } from "@chakra-ui/icons";
const MonRendezvous = () => {
  const { user, cleanUser } = useContext(TbibyContext);

  const toast = useToast();
  const [total, setTotal] = useState(0);
  const [next, setNext] = useState("");
  const [prev, setPrev] = useState("");
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([[""], [""], [""]]);
  const params = { patient_id: user.id, page };

  const { isLoading, refetch } = useConsultationPatient({
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
  const {
    mutate: DeleteMutate,
    isLoading: DeleteIsLoading,
  } = useDeleteReservation({
    onSuccess: (res) => {
      refetch();
    },
  });
  const message = () => {
    return (
      <>
        <Heading as="h2" size="lg" fontWeight="extrabold" letterSpacing="tight">
          Vous n'avez aucun rendez vous
        </Heading>
        <Text mt="4" fontSize="lg">
          si vous voulez réserver un rendez-vous , consulter le lien suivant :
        </Text>
        <Link>
          Reserver un rendez-vous <ExternalLinkIcon mx="2px" />
        </Link>
      </>
    );
  };
  const [fntable, setFntable] = useState({
    fn: (data) => (
      <G_Alert
        Header="Supprimer la réservation"
        Body={`Voulez-vous vraiment supprimer cette réservation avec ${data.nom} ${data.prenom}`}
        icon={<CloseIcon />}
        colorScheme="teal"
        bg="red.300"
        target={{ id: data.id }}
        fnTodo={DeleteMutate}
        btOK="Effacer"
        btNon="Annuler"
      />
    ),
  });
  let header = ["Nom", "Prenom", "Date reservation"];
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
            <TableContent
              header={header}
              content={content}
              fntable={fntable}
              message={message}
            />
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

export default MonRendezvous;
