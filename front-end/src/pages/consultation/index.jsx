import { Box, Center, Text, SimpleGrid } from "@chakra-ui/layout";
import React, { useContext, useState, useRef } from "react";
import { useListOfThePatientInConsultation } from "../../services/api/consultation";
import { TbibyContext } from "./../../router/context";
import {
  useToast,
  Spinner,
  useColorModeValue as mode,
  Button
} from "@chakra-ui/react";
import { useDeleteReservation } from "./../../services/api/reservation";
import { useSendPatientToWaitingRoom } from "./../../services/api/manageTheRoom";
import PatientsAtTheDoctor from "../../components/patients at the doctor";
import GeneralPatientsInformation from "../../components/general patients information";
import Antecedants from "./../../components/Antecedants";
import Form from "./_partials/form";
import { CloseIcon } from "@chakra-ui/icons";
import HistoriquePatient from "./../../components/historique patient/index";

const Consultation = () => {
  const toast = useToast();
  const [patientsWaiting, setpatientsWaiting] = useState([]);
  const [currentPatient, setCurrentPatient] = useState({});
  const { user } = useContext(TbibyContext);

  const params = { medecin_id: user.id };
  const { mutate: SPTWRMutate, isLoading: SPTWRIsLoading } =
    useSendPatientToWaitingRoom({
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
  const { mutate: DeleteMutate, isLoading: DeleteIsLoading } =
    useDeleteReservation({
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
        display={isLoading || DeleteIsLoading || SPTWRIsLoading ? `` : `none`}
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
          bg={mode("green.100", "gray.800")}
          mx="auto"
          boxShadow="xl"
          w={{ base: "100%", md: "95%" }}
          borderRadius="20px"
        >
          <Text fontSize="xl"> {currentPatient.nomprenom}</Text>
          <Button
            position="relative"
            p={0}
            m={0}
            left={["5vw", "20vw", "10vw", "20vw"]}
            colorScheme="green"
            onClick={() => setCurrentPatient({})}
          >
            <CloseIcon w={4} h={4} />
          </Button>
        </Center>

        <Box
          mx="auto"
          boxShadow="lg"
          bg={mode("green.50", "gray.800")}
          w={{ base: "90%", md: "92%" }}
        >
          <SimpleGrid minChildWidth="100px" spacing="10px">
            <Box m={5} textAlign="center">
              <GeneralPatientsInformation patient={currentPatient} />
            </Box>
            <Box m={5} textAlign="center">
              <Antecedants patient={currentPatient} />
            </Box>
            <Box m={5} textAlign="center">
              <HistoriquePatient patient={currentPatient} />
            </Box>
          </SimpleGrid>

          <Box p={5}>
            <Form
              setCurrentPatient={setCurrentPatient}
              Patient={currentPatient}
              refetchPatientListe={refetch}
              patientsWaiting={patientsWaiting}
              setpatientsWaiting={setpatientsWaiting}
            />
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
};
export default Consultation;
