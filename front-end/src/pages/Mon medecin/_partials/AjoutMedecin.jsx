import React, { useState, useContext } from "react";
import {
  Stack,
  FormControl,
  Button,
  Text,
  ButtonGroup,
  SimpleGrid,
  Spinner,
} from "@chakra-ui/react";
import { MyField } from "../../../components/formInput";
import { Formiz, useForm } from "@formiz/core";
import { useRelation } from "../../../services/api/relation";
import { TbibyContext } from "../../../router/context";
const AjoutMedecin = (props) => {
  const { user, cleanUser } = useContext(TbibyContext);
  const { refetch } = props;

  const [message, setMessage] = useState("");
  const { mutate, isLoading } = useRelation({
    onError: (error) => {
      setMessage(
        "Vérifiez les informations de contact ou la liste que vous avez insérées"
      );
    },
    onSuccess: (res) => {
      setMessage("");
      refetch();
    },
  });
  const myForm = useForm();
  const handleSubmit = (values) => {
    values.patient_id = user.id;
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
            <SimpleGrid columns={2} spacing={10} w="100%">
              <FormControl minW={{ md: "320px" }} id="search">
                <MyField
                  name="medecin_id"
                  Placeholder="Entrez le cin, l'email ou le téléphone du médecin"
                />
                <Text color="tomato">{message}</Text>
              </FormControl>
              <ButtonGroup size="sm" variant="outline">
                <Button
                  position="relative"
                  top="8px"
                  type="submit"
                  fontSize="20px"
                  p={5}
                  w="100%"
                >
                  <Spinner display={!isLoading ? `none` : ``} color="red.500" />
                  Ajouter 🩺
                </Button>
              </ButtonGroup>
            </SimpleGrid>
          </Stack>
        </form>
      </Formiz>
    </React.Fragment>
  );
};

export default AjoutMedecin;
