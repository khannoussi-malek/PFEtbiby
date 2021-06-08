import { Box } from "@chakra-ui/layout";
import { Formiz, useForm } from "@formiz/core";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
} from "@chakra-ui/modal";
import { Button } from "@chakra-ui/button";
import { useState, useContext } from "react";
import { Text, Spinner, useToast } from "@chakra-ui/react";
import { usePatientCreateReservation } from "./../../../../services/api/reservation";
import { TbibyContext } from "./../../../../router/context";
const BookingFormReserve = (props) => {
  const [NomPrenom, setNomPrenom] = useState("");
  const {
    medecin_id,
    refetchTask,
    currentDateStart,
    cancelRef,
    isOpen,
    onClose,
    data,
    end,
  } = props;
  const toast = useToast();

  const { user } = useContext(TbibyContext);

  const { mutate, isLoading } = usePatientCreateReservation({
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
      refetchTask();
      onClose();
    },
  });
  const [errorMessage, setErrorMessage] = useState("");

  const MyForm = useForm();
  const handleSubmit = (values) => {
    restOfConfirmation(currentDateStart, end, user.id);
  };

  const [search, setSearch] = useState("old");
  const restOfConfirmation = (start, end, patient_id) => {
    start = start.replace("T", " ") + ":00";
    mutate({
      medecin_id: data.id,
      patient_id,
      etat: "en ligne",
      date_reservation: start,
    });
  };
  return (
    <Box>
      <AlertDialog
        motionPreset="slideInBottom"
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogOverlay />

        <AlertDialogContent>
          <Formiz connect={MyForm} onValidSubmit={handleSubmit}>
            <form noValidate onSubmit={MyForm.submit}>
              <AlertDialogHeader>Confirmer la réservation</AlertDialogHeader>
              <AlertDialogCloseButton />
              <Spinner
                display={!isLoading ? `none` : ``}
                size="xl"
                m="auto"
                color="red.500"
              />
              <AlertDialogBody display={isLoading ? `none` : ``}>
                <Text pb={2} px={5}>
                  Réservation d'un rendez-vous le{" "}
                  {currentDateStart.slice(0, 10) + " "}à
                  {" " + currentDateStart.slice(11, 19)}?
                </Text>
              </AlertDialogBody>
              <AlertDialogFooter>
                <Button
                  display={isLoading ? `none` : ``}
                  ref={cancelRef}
                  onClick={onClose}
                >
                  Non
                </Button>
                <Button
                  display={isLoading ? `none` : ``}
                  disabled={!MyForm.isValid}
                  type="submit"
                  ml={3}
                >
                  Oui
                </Button>
              </AlertDialogFooter>
            </form>
          </Formiz>
        </AlertDialogContent>
      </AlertDialog>
    </Box>
  );
};
export default BookingFormReserve;
