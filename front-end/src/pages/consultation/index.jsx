import { Box, Center, Flex, SimpleGrid } from "@chakra-ui/layout";
import React, { useContext, useState, useRef } from "react";
import { useListOfThePatientInConsultation } from "../../services/api/consultation";
import { TbibyContext } from "./../../router/context/index";
import { useToast, Spinner } from "@chakra-ui/react";
import Alert from "./../../components/calendar/taks/alert";
import { CloseIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import { useDeleteReservation } from "./../../services/api/reservation";
import { useSendPatientToWaitingRoom } from "./../../services/api/manageTheRoom";

const Consultation = () => {
  const toast = useToast();
  const [patientWaiting, setPatientWaiting] = useState([]);
  const [currentPatient, setCurrentPatient] = useState({});
  const { user } = useContext(TbibyContext);

  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);
  const cancelRef = useRef();

  const [isOpenWaiting, setIsOpenWaiting] = useState(false);
  const onCloseWaiting = () => setIsOpenWaiting(false);
  const cancelRefWaiting = useRef();

  const params = { medecin_id: user.id };

  const {
    mutate: SPTWRMutate,
    isLoading: SPTWRIsLoading,
  } = useSendPatientToWaitingRoom({
    onError: (error) => {
      // setMessage("Vérifier l'information qui vous inseri ou votre liste");
    },
    onSuccess: (res) => {
      refetch();
    },
  });
  const { isLoading, refetch } = useListOfThePatientInConsultation({
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
      setPatientWaiting(res.data);
    },
  });
  const {
    mutate: DeleteMutate,
    isLoading: DeleteIsLoading,
  } = useDeleteReservation({
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
      refetch();
    },
  });
  const removePatient = (event, target) => {
    event.stopPropagation();

    DeleteMutate({ id: target });
    if (target == currentPatient.rendez_vous_id) {
      setCurrentPatient({});
    }
    onClose();
  };
  const ToWaiting = (event, target) => {
    event.stopPropagation();

    SPTWRMutate({ id: target });
    if (target == currentPatient.rendez_vous_id) {
      setCurrentPatient({});
    }
    onCloseWaiting();
  };
  return (
    <React.Fragment>
      <Spinner
        display={
          !isLoading && !DeleteIsLoading && !SPTWRIsLoading ? `none` : ``
        }
        size="xl"
        m="auto"
        color="red.500"
      />
      <Box
        w="100%"
        p={5}
        display={isLoading || DeleteIsLoading || SPTWRIsLoading ? `none` : ``}
      >
        clients wating for u:
        <SimpleGrid columns={{ base: 1, md: 3, lg: 5 }} spacing={2}>
          {patientWaiting.map((data) => (
            <Box
              bg="gray.100"
              key={`${data.id}`}
              borderRadius="20px"
              textAlign="center"
              p={2}
              onClick={() => {
                setCurrentPatient(data);
              }}
            >
              {data.nomprenom}
              <Alert
                Header="Supprimer la réservation"
                Body={`Êtes-vous sûr de vouloir supprimer cette réservation avec ${data.nomprenom}`}
                icon={<CloseIcon />}
                colorScheme="teal"
                bg="red.300"
                target={data.rendez_vous_id}
                fnTodo={removePatient}
                btOK="Effacer"
                btNon="Annuler"
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                onClose={onClose}
                cancelRef={cancelRef}
              />
              <Alert
                Header="envoyer à la salle d'attente"
                Body={`Êtes-vous sûr que vous voulez envoyer ${data.nomprenom} à la salle d'attente`}
                icon={<ExternalLinkIcon />}
                colorScheme="teal"
                bg="blue.300"
                target={data.rendez_vous_id}
                fnTodo={ToWaiting}
                btOK="Effacer"
                btNon="Annuler"
                isOpen={isOpenWaiting}
                setIsOpen={setIsOpenWaiting}
                onClose={onCloseWaiting}
                cancelRef={cancelRefWaiting}
              />
            </Box>
          ))}
        </SimpleGrid>
      </Box>
      <Box display={!!currentPatient.nomprenom == "" ? `none` : `block`}>
        <Center
          p={5}
          bg="gray.100"
          mx="auto"
          w={{ base: "100%", md: "95%" }}
          borderRadius="20px"
        >
          this is {currentPatient.nomprenom}
        </Center>

        <Center mx="auto" bg="gray.50" w={{ base: "98%", md: "90%" }}>
          man
        </Center>
      </Box>
    </React.Fragment>
  );
};
export default Consultation;
