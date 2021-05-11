import { Box, Center, SimpleGrid } from "@chakra-ui/layout";
import Alert from "./../calendar/taks/alert";
import { CloseIcon } from "@chakra-ui/icons";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { useState, useRef } from "react";

import { useColorModeValue as mode, Heading } from "@chakra-ui/react";

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
      <SimpleGrid columns={{ base: 1, md: 3, lg: 5 }} spacing={2}>
        {patientsWaiting.map((data) => (
          <Box
            _hover={{ cursor: "pointer" }}
            bg={mode("gray.100", "gray.800")}
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
                Header="envoyer à la salle d'attente"
                Body={`Êtes-vous sûr que vous voulez envoyer ${data.nomprenom} à la salle d'attente`}
                icon={<ExternalLinkIcon w={4} h={4} />}
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
          </Box>
        ))}
      </SimpleGrid>
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
