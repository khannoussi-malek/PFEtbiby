import { FormControl } from "@chakra-ui/form-control";
import { useForm, Formiz } from "@formiz/core";
import { TextareaForm } from "./../../../components/formInput/Textarea";
import {
  Accordion,
  Box,
  Button,
  CloseButton,
  Divider,
  SimpleGrid,
  useToast,
  Spinner,
} from "@chakra-ui/react";
import React, { useState, useContext } from "react";
import { Prix } from "./../../../components/formInput/Prix";
import { Certificat } from "../../../components/Certificat";
import { Acte } from "../../../components/Acte";
import { Examen } from "../../../components/Examen";
import { Ordonnance } from "./../../../components/Ordonnance/index";
import { Lettre } from "./../../../components/Lettre/index";
import { AntecedantsForm } from "./../../../components/Antecedants/AntecedantsForm";
import { useCreateConsultation } from "./../../../services/api/consultation/index";
import { TbibyContext } from "./../../../router/context/index";

const Form = (props) => {
  const toast = useToast();
  const { user } = useContext(TbibyContext);
  const { Patient } = props;
  const [id, setId] = useState(0);
  const { mutate, isLoading } = useCreateConsultation({
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
      console.log("res");
    },
  });
  const MyForm = useForm();
  const handleSubmit = (values) => {
    values.patient_id = Patient.id;
    values.medecin_id = user.id;
    mutate(values);
  };
  const [componentsForm, setComponentsForm] = useState([]);
  const addelement = (element) => {
    setId(id + 1);
    console.log(id);
    setComponentsForm([...componentsForm, element]);
  };
  const removeComponentsForm = (id) => {
    setComponentsForm([
      ...componentsForm.filter(function (obj) {
        return obj.id !== id;
      }),
    ]);
  };
  return (
    <Box>
      <Spinner
        display={!isLoading ? `none` : ``}
        size="xl"
        m="auto"
        color="red.500"
      />
      <Box overflowX="auto" display={isLoading ? `none` : ``}>
        <Formiz connect={MyForm} onValidSubmit={handleSubmit}>
          <form noValidate onSubmit={MyForm.submit}>
            <TextareaForm
              name="Diagnostic"
              label="Diagnostic"
              required={"Vous devez écrire une valeur pour Diagnostic"}
            />

            <Divider my={5} />
            <Box display={componentsForm.length > 0 ? `block` : `none`}>
              Détail
              <CloseButton
                onClick={() => setComponentsForm([])}
                colorScheme="red"
                bgColor="red.200"
                float="right"
                boxShadow="dark-lg"
              />
            </Box>
            <Accordion
              defaultIndex={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
              allowMultiple
            >
              {componentsForm
                .sort((a, b) => a - b)
                .map(({ id, type }, index) => {
                  if (type === "certificat") {
                    return (
                      <Certificat
                        id={id}
                        removeComponentsForm={removeComponentsForm}
                        Patient={Patient}
                        name={`certificats[${index}]`}
                      />
                    );
                  } else if (type === "acte") {
                    return (
                      <Acte
                        id={id}
                        removeComponentsForm={removeComponentsForm}
                        Patient={Patient}
                        name={`actes[${index}]`}
                      />
                    );
                  } else if (type === "examen") {
                    return (
                      <Examen
                        id={id}
                        removeComponentsForm={removeComponentsForm}
                        Patient={Patient}
                        name={`examens[${index}]`}
                      />
                    );
                  } else if (type === "antecedants") {
                    return (
                      <AntecedantsForm
                        id={id}
                        removeComponentsForm={removeComponentsForm}
                        Patient={Patient}
                        name={`antecedants[${index}]`}
                      />
                    );
                  } else if (type === "ordonnance") {
                    return (
                      <Ordonnance
                        id={id}
                        removeComponentsForm={removeComponentsForm}
                        Patient={Patient}
                        name={`ordonnances[${index}]`}
                      />
                    );
                  } else if (type === "lettre") {
                    return (
                      <Lettre
                        id={id}
                        removeComponentsForm={removeComponentsForm}
                        Patient={Patient}
                        name={`lettres[${index}]`}
                      />
                    );
                  }
                })}
            </Accordion>
            <Box py={3}>
              <SimpleGrid minChildWidth="100px" spacing="10px">
                <Button onClick={() => addelement({ id, type: "certificat" })}>
                  Certificat
                </Button>
                <Button onClick={() => addelement({ id, type: "acte" })}>
                  Acte
                </Button>
                <Button onClick={() => addelement({ id, type: "examen" })}>
                  Examen
                </Button>
                <Button onClick={() => addelement({ id, type: "antecedants" })}>
                  Antecedants
                </Button>
                <Button onClick={() => addelement({ id, type: "ordonnance" })}>
                  Ordonnance
                </Button>
                <Button onClick={() => addelement({ id, type: "lettre" })}>
                  Lettre
                </Button>
              </SimpleGrid>
            </Box>
            <Divider my={5} />
            <Box right={0}>
              <Prix
                name="prix"
                required={
                  "Vous devez écrire une valeur pour votre consultation"
                }
                label="prix consultation"
                value={0}
              />
            </Box>
            <FormControl mt={5} align="center">
              <Button
                w="40%"
                type="submit"
                borderColor="green.500"
                disabled={!MyForm.isValid}
              >
                Submit
                {!MyForm.isValid ? `` : `👌`}
              </Button>
            </FormControl>
          </form>
        </Formiz>
      </Box>
    </Box>
  );
};
export default Form;
