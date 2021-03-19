import React, { useState, useContext } from "react";
import { Box, Grid, Button, Text } from "@chakra-ui/react";
import { MyField } from "./../../../components/formInput/index";
import { Formiz, useForm } from "@formiz/core";
import { useRelation } from "./../../../services/api/relation/index";
import { TbibyContext } from "./../../../router/context/index";
const AjouPatient = () => {
  const { user, cleanUser } = useContext(TbibyContext);

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
  };

  return (
    <React.Fragment>
      <Formiz connect={myForm} onValidSubmit={handleSubmit}>
        <form noValidate onSubmit={myForm.submit}>
          <Grid templateColumns="repeat(2, 1fr)" gap={2}>
            <Box mx={10}>
              <MyField name="patient_id" label="Patient" />
              <Text color="tomato">{message}</Text>
            </Box>

            <Box mx="auto" mt="32px">
              <Button type="submit" w="100%">
                Ajoute 🤒
              </Button>
            </Box>
          </Grid>
        </form>
      </Formiz>
    </React.Fragment>
  );
};

export default AjouPatient;
