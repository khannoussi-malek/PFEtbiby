import React, { useState, useContext } from "react";
import {
  Box,
  useToast,
  Spinner,
  Heading,
  Text,
  Link as Linkurl,
  Button,
  Popover,
  PopoverTrigger,
  Portal,
  PopoverContent,
  PopoverArrow,
  PopoverHeader,
  PopoverCloseButton,
  PopoverBody,
  Avatar,
  PopoverFooter,
} from "@chakra-ui/react";
import { useConsultationPatient } from "./../../services/api/consultation/index";
import { TableContent } from "./../../components/table/TableContent";
import { TablePagination } from "./../../components/table/TablePagination";
import { TbibyContext } from "./../../router/context/index";
import { useDeleteReservation } from "./../../services/api/reservation/index";
import G_Alert from "../../components/general alert";
import { CloseIcon } from "@chakra-ui/icons";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { link } from "./../../services/api/index";
import { EmailIcon } from "@chakra-ui/icons";
import { MdCall } from "react-icons/md";
import { useBreakpointValue } from "@chakra-ui/media-query";
import { BiInfoCircle } from "react-icons/bi";

const MonRendezvous = () => {
  const isMobile = useBreakpointValue({ base: true, lg: false });

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
        <Linkurl>
          Reserver un rendez-vous <ExternalLinkIcon mx="2px" />
        </Linkurl>
      </>
    );
  };
  const [fntable, setFntable] = useState({
    fn2: (data) => (
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
    fn: (data) => (
      <Popover>
        <PopoverTrigger>
          <Button mx={1} my={3}>
            {isMobile ? <BiInfoCircle fontSize="20px" /> : `Info`}
          </Button>
        </PopoverTrigger>
        <Portal>
          <PopoverContent>
            <PopoverArrow />
            <PopoverHeader>{data.nomprenom}</PopoverHeader>
            <PopoverCloseButton />
            <PopoverBody>
              {data.photo && (
                <Avatar
                  name={data.nomprenom}
                  size="xl"
                  src={`${link}${data.photo}`}
                />
              )}
              {data.domaineName && <Text>Domain : {data.domaineName} </Text>}

              {data.adresse_physique && (
                <Text>Adresse : {data.adresse_physique} </Text>
              )}

              {data.email && (
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
              )}
              {data.telephone && (
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
              )}
            </PopoverBody>
            <PopoverFooter>
              Ce sont des informations personnelles sur votre médecin
            </PopoverFooter>
          </PopoverContent>
        </Portal>
      </Popover>
    ),
  });
  let header = ["Nom Prenom", "Date de reservation"];
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
          <Box overflowX="auto">
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
