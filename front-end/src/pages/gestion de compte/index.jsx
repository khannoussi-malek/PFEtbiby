import React,{useState} from "react";
import { isNumber, 
        isLength, 
        isEmail, 
        isPattern, 
        isMinLength,
      } from "@formiz/validations";
import {
  useToast,
  Box,
  Radio,
  Stack,
  RadioGroup,
  FormControl,
  Button,
  Spinner,
  Center,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import {InputDate} from "./../../components/formInput/date"

import { MyField } from "./../../components/formInput";
import { MyFieldPassword } from "./../../components/formInput/password";
import { Formiz, useForm } from "@formiz/core";
import GestiondeCopmtePatient from "./gestion compte patient";
import GestiondeCopmteMedecin from "./gestion compte medecin";

const Accountmanagement = () => {
  const fonctionnalite = localStorage.getItem("fonctionnalite");
  const [sexes, setSexes] = React.useState("homme");
  const isLoading = false;
  const MyForm = useForm();
  const handleSubmit = (values) => {
    console.log(values)
  };
  return (
    <React.Fragment>
      <Spinner
        display={!isLoading ? `none` : ``}
        size="xl"
        m="auto"
        color="red.500"
      />
      <Box display={isLoading ? `none` : ``}>
        <Formiz connect={MyForm} onValidSubmit={handleSubmit}>
          <form noValidate onSubmit={MyForm.submit}>
            <MyField name="nom" 
              label="Nom"
               required="Il est requis de compléter le champ correspondant au nom"
               validations={[
                {
                  rule: isPattern("^[a-z]*$"),
                  message: "Le nom ne contient que des lettres",
                },
              ]}
            />
            <MyField
              name="prenom"
              label="Prenom"
              required="Il est requis de compléter le champ correspondant au prenom"
              validations={[
                {
                  rule: isPattern("^[a-z]*$"),
                  message: "Le prenom ne contient que des lettres",
                },
              ]}
            />
            <FormControl>
              <Center>
                <RadioGroup onChange={setSexes} value={sexes} name="sexes">
                  <Stack direction="row" size="lg">
                    <Radio value="homme" py={3} px={10}>
                      Homme 👨‍🦰
                    </Radio>
                    <Radio value="femme" py={3} px={10}>
                      Femme 👩‍🦰
                    </Radio>
                  </Stack>
                </RadioGroup>
              </Center>
            </FormControl>
            <InputDate 
            name="date_naissance" 
            label="Date de naissance" 
            //required="Il est requis de compléter le champ correspondant au date_naissance"
            />
            <MyField
              name="telephone"
              label="Telephone"
              required="Il est requis de compléter le champ correspondant au telephone"
              validations={[
                {
                  rule: isNumber(),
                  message: "La numéro de téléphone  ne contient que des chiffres",
                },
                {
                  rule: isLength(8),
                  message: "La numéro de téléphone doit être constituée  de 8 chiffres",
                },
              ]}
            />
            <MyField
             name="email"
             label="Email" 
             required="Il est requis de compléter le champ correspondant au mail"
             validations={[
              {
                rule: isEmail(),
                message: "Veuillez vérifier le format de l'e-mail(doit contenir @ et .)",
              },
            ]} />

            <MyFieldPassword
              name="password"
              label="password"
              required="Il est requis de compléter le champ correspondant au mot-de-passe"
              type="password"
              validations={[
                {
                  rule: isMinLength(6),
                  message:
                  "Le mot de passe doit contenir au moins 6 caractères",
                },
              ]}
            />
            {fonctionnalite == "patient" ? (
              <GestiondeCopmtePatient />
              ) : `` }
              {fonctionnalite == "medecin" ? (
              <GestiondeCopmteMedecin />
              ) : `` }
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
    </React.Fragment>
  );
};
export default Accountmanagement;
