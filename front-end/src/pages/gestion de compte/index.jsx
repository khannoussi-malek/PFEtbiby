import React, { useContext, useState } from "react";
import {
  isNumber,
  isLength,
  isEmail,
  isPattern,
  isMinLength,
} from "@formiz/validations";
import {
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
import { InputDate } from "./../../components/formInput/date";

import { MyField } from "./../../components/formInput";
import { MyFieldPassword } from "./../../components/formInput/password";
import { Formiz, useForm } from "@formiz/core";
import GestiondeCopmtePatient from "./gestion compte patient";
import GestiondeCopmteMedecin from "./gestion compte medecin";
import { TbibyContext } from "./../../router/context/index";
import { useUpdateComptePatient } from "./../../services/api/Update Compte/index";
//import { useUpdateCompteMedecin } from "./../../services/api/Update Compte/update_compte_medecin";


const Accountmanagement = () => {
  const { user } = useContext(TbibyContext);
  const { mutate, isLoading } = useUpdateComptePatient({
    onError: (error) => {
      // setMessage("Vérifier l'information qui vous inseri ou votre liste");
    },
    onSuccess: (res) => {
      console.log(res);
    },
  });
  // //t
  // const { } = useUpdateCompteMedecin({
  //   onError: (error) => {
  //     // setMessage("Vérifier l'information qui vous inseri ou votre liste");
  //   },
  //   onSuccess: (res) => {
  //     console.log(res);
  //   },
  // });
  const [fonctionnalite, setFonctionnalite] = useState("patient");
  const [sexes, setSexes] = React.useState("homme");

  const myForm = useForm();
  const { values } = myForm;
  const handleSubmit = (values) => {
    values.id = user.id;
    values.sexes = sexes;
    values.id_cms_privileges = fonctionnalite;
    mutate(values);
  };
  // const handleSubmit = (values) => {
  //   values.id = user.id;
  //   mutate(values);
  // };

  return (
    <React.Fragment>
      <Spinner
        display={!isLoading ? `none` : ``}
        size="xl"
        m="auto"
        color="red.500"
      />
      <Box px={5} display={isLoading ? `none` : ``}>
        <Formiz connect={myForm} onValidSubmit={handleSubmit}>
          <form noValidate onSubmit={myForm.submit}>
            <MyField
              name="nom"
              label="Nom"
              // required="Il est requis de compléter le champ correspondant au nom"
              validations={[
                {
                  rule: isPattern("^[a-zA-Z ]*$"),
                  message: "Le nom ne contient que des lettres",
                },
              ]}
            />
            <MyField
              name="prenom"
              label="Prenom"
              // required="Il est requis de compléter le champ correspondant au prenom"
              validations={[
                {
                  rule: isPattern("^[a-zA-Z ]*$"),
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
              // required="Il est requis de compléter le champ correspondant au telephone"
              validations={[
                {
                  rule: isNumber(),
                  message:
                    "La numéro de téléphone  ne contient que des chiffres",
                },
                {
                  rule: isLength(8),
                  message:
                    "La numéro de téléphone doit être constituée  de 8 chiffres",
                },
                {
                  rule: (val) => !!val || !!values.cin || !!values.email,
                  message:
                    "La numéro de téléphone doit être constituée  de 8 chiffres",
                  deps: [values.cin, values.email],
                },
              ]}
            />
            <MyField
              name="cin"
              label="cin"
              validations={[
                {
                  rule: isNumber(),
                  message: "La carte d'identité ne contient que des chiffres",
                },
                {
                  rule: isLength(8),
                  message:
                    "La carte d'identité doit être constituée  de 8 chiffres",
                },
                {
                  rule: (val) => !!val || !!values.email || !!values.telephone,
                  message:
                    "La carte d'identité doit être constituée  de 8 chiffres",
                  deps: [values.email, values.telephone],
                },
              ]}
            />
            <MyField
              name="email"
              label="Email"
              // required="Il est requis de compléter le champ correspondant au mail"
              validations={[
                {
                  rule: isEmail(),
                  message:
                    "Veuillez vérifier le format de l'e-mail(doit contenir @ et .)",
                },
                {
                  rule: (val) => !!val || !!values.cin || !!values.telephone,
                  message: "Le champ email doit contenir @ et .",
                  deps: [values.cin, values.telephone],
                },
              ]}
            />

            <MyFieldPassword
              name="password"
              label="password"
              // required="Il est requis de compléter le champ correspondant au mot-de-passe"
              type="password"
              validations={[
                {
                  rule: isMinLength(6),
                  message:
                    "Le mot de passe doit contenir au moins 6 caractères",
                },
              ]}
            />

            {user.fonctionnalite == "patient" ? <GestiondeCopmtePatient /> : ``}
            {user.fonctionnalite == "medecin" ? <GestiondeCopmteMedecin /> : ``}
            <FormControl mt={5} align="center">
              <Button
                w="40%"
                type="submit"
                borderColor="green.500"
                disabled={!myForm.isValid}
              >
                Submit
                {!myForm.isValid ? `` : `👌`}
              </Button>
            </FormControl>
          </form>
        </Formiz>
      </Box>
    </React.Fragment>
  );
};
export default Accountmanagement;
