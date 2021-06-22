import { Box, Center, SimpleGrid } from "@chakra-ui/layout";
import Alert from "./../calendar/taks/alert";
import { CloseIcon } from "@chakra-ui/icons";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { useState, useRef } from "react";

import { useColorModeValue as mode, Heading,Code } from "@chakra-ui/react";

const PatientsAtTheDoctor = (props) => {
  const {
    patientsWaiting,
    setCurrentPatient,
    DeleteMutate,
    currentPatient,
    SPTWRMutate,
  } = props;

  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);
  const cancelRef = useRef();

  const [isOpenWaiting, setIsOpenWaiting] = useState(false);
  const onCloseWaiting = () => setIsOpenWaiting(false);
  const cancelRefWaiting = useRef();

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
  if (patientsWaiting.length != 0) {
    return (
      <>
        <Center m={0} p={0}> <Code colorScheme="green" my={5} fontSize="15px" borderRadius={10}>
              Pour commencer une consultation avec un patient. Vous devez le choisir on cliquant sur son nom. 
            </Code></Center>
      <SimpleGrid columns={{ base: 1, md: 3, lg: 5 }} spacing={2}>
        {patientsWaiting.map((data) => (
          <Box
            _hover={{ cursor: "pointer" }}
            bg={mode("green.100", "gray.800")}
            key={`${data.id}`}
            borderRadius="20px"
            textAlign="center"
            p={2}
            onClick={(event) => {
              event.stopPropagation();
              setCurrentPatient(data);
            }}
          >
            {data.nomprenom}
            <Box>
              <Alert
                hoverMassage="Supprimer la réservation"
                Header="Supprimer la réservation"
                Body={`Voulez-vous vraiment supprimer cette réservation avec ${data.nomprenom}`}
                icon={<CloseIcon w={4} h={4} />}
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
                hoverMassage="Envoyer cette patient à la salle d'attente"
                Header="envoyer à la salle d'attente"
                Body={`Êtes-vous sûr que vous voulez envoyer ${data.nomprenom} à la salle d'attente`}
                icon={<ExternalLinkIcon w={4} h={4} />}
                colorScheme="teal"
                bg="green.300"
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
          </Box>
        ))}
      </SimpleGrid>
      </>
    );
  } else {
    return (
      <Center>
        <Heading as="h2" size="lg" fontWeight="extrabold" letterSpacing="tight">
          Aucun patient pour le moment
        </Heading>
      </Center>
    );
  }
};
export default PatientsAtTheDoctor;
