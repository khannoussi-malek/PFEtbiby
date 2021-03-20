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
      setMessage("Vérifier l'information qui vous inseri ou votre liste");
    },
    onSuccess: (res) => {
      setMessage("");
    },
  });
  const myForm = useForm();
  const handleSubmit = (values) => {
    values.medecin_id = user.id;
    mutate(values);
    setTimeout(function () {
      refetch();
    }, 1500);
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
                  Placeholder="Ajouter patient CIN , Email , Telephone "
                />
                <Text color="tomato">{message}</Text>
              </FormControl>
              <Box></Box>
            </HStack>
            <ButtonGroup size="sm" variant="outline">
              <Button position="relative" bottom="0" type="submit" p={5}>
                Ajoute 🤒
              </Button>
            </ButtonGroup>
          </Stack>
        </form>
      </Formiz>
    </React.Fragment>
  );
};

export default AjouPatient;
