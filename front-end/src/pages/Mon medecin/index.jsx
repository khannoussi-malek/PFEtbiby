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
import { TbibyContext } from "../../router/context/index";
import { useRelationPM } from "./../../services/api/relation/index";
import { MdCall } from "react-icons/md";
import { EmailIcon } from "@chakra-ui/icons";
import { link, userImage } from "./../../services/api/index";

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
      setContent(res.data.data);
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
                  size="xl"
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
              Ce sont des informations personnelles sur votre médecin
            </PopoverFooter>
          </PopoverContent>
        </Portal>
      </Popover>
    ),
  });
  const message = () => {
    return (
      <>
        <Heading as="h2" size="lg" fontWeight="extrabold" letterSpacing="tight">
          Vous n'avez aucun relation avec aucun médecin
        </Heading>
        <Text mt="4" fontSize="lg">
          si vous voulez réserver une relation avec médecin voir
        </Text>
        <LinkChakra>
          Reserver un rendez-vous <ExternalLinkIcon mx="2px" />
        </LinkChakra>
      </>
    );
  };
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
