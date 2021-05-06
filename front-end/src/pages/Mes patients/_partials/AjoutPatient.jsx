import React, { useState, useContext } from "react";
import {
  Box,
  Stack,
  FormControl,
  Button,
  Text,
  HStack,
  ButtonGroup,
} from "@chakra-ui/react";
import { MyField } from "./../../../components/formInput/index";
import { Formiz, useForm } from "@formiz/core";
import { useRelation } from "./../../../services/api/relation/index";
import { TbibyContext } from "./../../../router/context/index";
const AjouPatient = (props) => {
  const { user, cleanUser } = useContext(TbibyContext);
  const { refetch } = props;

  const [message, setMessage] = useState("");
  const { mutate, isLoading } = useRelation({
    onError: (error) => {
      setMessage(
        "Vérifiez les données saisie. Vous devez saisir le numéro de la carte d'identité, le numéro de téléphone, ou l'adresse mail."
      );
    },
    onSuccess: (res) => {
      setMessage("");
      refetch();
    },
  });
  const myForm = useForm();
  const handleSubmit = (values) => {
    values.medecin_id = user.id;
    mutate(values);
  };

  return (
    <React.Fragment>
      <Formiz connect={myForm} onValidSubmit={handleSubmit}>
        <form noValidate onSubmit={myForm.submit}>
          <Stack
            spacing="2"
            direction={{ base: "column", md: "row" }}
            justify="space-between"
          >
            <HStack>
              <FormControl minW={{ md: "320px" }} id="search">
                <MyField
                  name="patient_id"
                  Placeholder="Entrez le cin, l'email ou le téléphone du patient"
                />
                <Text color="tomato">{message}</Text>
              </FormControl>
              <Box></Box>
            </HStack>
            <ButtonGroup size="sm" variant="outline">
              <Button
                position="relative"
                bottom="0"
                type="submit"
                fontSize="20px"
                p={5}
              >
                Ajouter 🤒
              </Button>
            </ButtonGroup>
          </Stack>
        </form>
      </Formiz>
    </React.Fragment>
  );
};

export default AjouPatient;
