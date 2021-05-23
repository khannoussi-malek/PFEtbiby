import React, { useState, useContext } from "react";
import {
  Box,
  useToast,
  Spinner,
  Popover,
  PopoverTrigger,
  Portal,
  PopoverContent,
  PopoverArrow,
  PopoverHeader,
  PopoverCloseButton,
  PopoverBody,
  Button,
  Avatar,
  Text,
  PopoverFooter,
  Heading,
  Link as LinkChakra,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { TableContent } from "../../components/table/TableContent";
import { TablePagination } from "../../components/table/TablePagination";
import { TbibyContext } from "../../router/context";
import { useRelationPM } from "./../../services/api/relation";
import { MdCall } from "react-icons/md";
import { EmailIcon } from "@chakra-ui/icons";
import { link, userImage } from "./../../services/api";
import ReserverUnRendezVous from "../../components/reserver un rendez-vous";
import AjoutMedecin from "./_partials/AjoutMedecin";
import MedecinInfo from "./../../components/InformationsSurLeMedecin/FromData";

const MonMedecin = () => {
  const { user } = useContext(TbibyContext);
  const toast = useToast();
  const [total, setTotal] = useState(0);
  const [next, setNext] = useState("");
  const [prev, setPrev] = useState("");
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([[""], [""]]);

  const params = { patient_id: user.id, page: page };
  const { isLoading, refetch } = useRelationPM({
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
    fn: (data) => <MedecinInfo data={data} />,
    fn2: (data) => <ReserverUnRendezVous data={data} />,
  });
  const message = () => {
    return (
      <>
        <Heading as="h2" size="lg" fontWeight="extrabold" letterSpacing="tight">
          Vous n'avez aucun relation avec aucun médecin
        </Heading>
        <Text mt="4" fontSize="lg">
          Il n'y a pas de médecins sur votre liste.
        </Text>
        <Text mt="4" fontSize="lg">
          Vous pouvez les ajouter par e-mail au numéro de téléphone
        </Text>
      </>
    );
  };
  let header = ["Nom Prenom", "domaine"];
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
          <AjoutMedecin refetch={refetch} />

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

export default MonMedecin;
