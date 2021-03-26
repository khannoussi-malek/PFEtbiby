import { Box } from "@chakra-ui/layout";
import { Formiz, useForm } from "@formiz/core";
import { MyField } from "../../../components/formInput";
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
import { Select2 } from "../../../components/formInput/select";
import { useState } from "react";
import { Text, Spinner } from "@chakra-ui/react";
import { useCreateReservation } from "../../../services/api/reservation";
import { useRelation } from "../../../services/api/relation";
const BookingForm = (props) => {
  const [NomPrenom, setNomPrenom] = useState("");
  const {
    medecin_id,
    refetchTask,
    currentDateStart,
    ListPatientDashboardAPIRefetch,
    cancelRef,
    isOpen,
    onClose,
    end,
    listPatient,
  } = props;
  const { mutate, isLoading } = useCreateReservation({
    onError: (error) => {
      // setMessage("Vérifier l'information qui vous inseri ou votre liste");
    },
    onSuccess: (res) => {
      refetchTask();
      onClose();
    },
  });
  const [errorMessage, setErrorMessage] = useState("");

  const { mutate: addPatient, isLoading: LodingaAddPatient } = useRelation({
    onError: (error) => {
      setErrorMessage("Vérifier les informations de votre patient.");
    },
    onSuccess: (res) => {
      setErrorMessage("");
      setSearch("old");
    },
  });
  const MyForm = useForm();
  const handleSubmit = (values) => {
    if (search == "new") {
      addPatient({ medecin_id, patient_id: values.user });
      ListPatientDashboardAPIRefetch();
    } else {
      setNomPrenom(values.selectvalue.label);
      restOfConfirmation(currentDateStart, end, values.selectvalue.value);
    }
  };

  const [search, setSearch] = useState("old");
  const restOfConfirmation = (start, end, patient_id) => {
    start = start.replace("T", " ") + ":00";
    mutate({
      medecin_id,
      patient_id,
      etat: "en attente",
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
                display={!isLoading && !LodingaAddPatient ? `none` : ``}
                size="xl"
                m="auto"
                color="red.500"
              />
              <AlertDialogBody
                display={isLoading || LodingaAddPatient ? `none` : ``}
              >
                <Text pb={2} px={5}>
                  Réservation d'un rendez-vous le{" "}
                  {currentDateStart.slice(0, 10) + " "}à
                  {" " + currentDateStart.slice(11, 19)} pour
                  {search == "new" ? (
                    <Button
                      bgColor="#b3e6c8"
                      _hover={{ bgColor: "#caf0d9" }}
                      marginLeft={5}
                      onClick={() => setSearch("old")}
                    >
                      Nouvelle patient
                    </Button>
                  ) : (
                    <Button
                      _hover={{ bgColor: "#caf0d9" }}
                      bgColor="#b3e6c8"
                      marginLeft={5}
                      onClick={() => setSearch("new")}
                    >
                      Notre patient
                    </Button>
                  )}
                </Text>

                {search == "new" ? (
                  <Box>
                    <MyField
                      name="user"
                      label="Email ou CIN ou Telephone"
                      required="email ou ci"
                    />
                    <Text color="tomato">{errorMessage}</Text>
                  </Box>
                ) : (
                  <Select2
                    required={"Sélect un patient."}
                    data={listPatient}
                    // label="Notre patient"
                    name="selectvalue"
                  />
                )}
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
export default BookingForm;
