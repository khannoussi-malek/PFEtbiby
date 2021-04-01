import { Box, Center, Text } from "@chakra-ui/layout";
import React, { useContext, useState, useRef } from "react";
import { useListOfThePatientInConsultation } from "../../services/api/consultation";
import { TbibyContext } from "./../../router/context/index";
import { useToast, Spinner } from "@chakra-ui/react";
import { useDeleteReservation } from "./../../services/api/reservation";
import { useSendPatientToWaitingRoom } from "./../../services/api/manageTheRoom";
import PatientsAtTheDoctor from "../../components/patients at the doctor";
import GeneralPatientsInformation from "../../components/general patients information";
import Antecedants from "./../../components/Antecedants/index";

const Consultation = () => {
  const toast = useToast();
  const [patientsWaiting, setpatientsWaiting] = useState([]);
  const [currentPatient, setCurrentPatient] = useState({});
  const { user } = useContext(TbibyContext);

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
      setpatientsWaiting(res.data);
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
        <PatientsAtTheDoctor
          SPTWRMutate={SPTWRMutate}
          currentPatient={currentPatient}
          DeleteMutate={DeleteMutate}
          setCurrentPatient={setCurrentPatient}
          patientsWaiting={patientsWaiting}
        />
      </Box>
      <Box pb={5} display={!!currentPatient.nomprenom == "" ? `none` : `block`}>
        <Center
          p={5}
          bg="gray.100"
          mx="auto"
          w={{ base: "100%", md: "95%" }}
          borderRadius="20px"
        >
          <Text fontSize="xl"> {currentPatient.nomprenom}</Text>
        </Center>

        <Box
          mx="auto"
          boxShadow="lg"
          bg="gray.50"
          w={{ base: "90%", md: "92%" }}
        >
          <GeneralPatientsInformation patient={currentPatient} />
          <Antecedants patient={currentPatient} />
        </Box>
      </Box>
    </React.Fragment>
  );
};
export default Consultation;
