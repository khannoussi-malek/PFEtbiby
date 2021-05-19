import {
  Center,
  Radio,
  RadioGroup,
  Stack,
  Spinner,
  Button,
  useToast,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import { Formiz, useForm } from "@formiz/core";
import { FormControl } from "@chakra-ui/form-control";
import { MyField } from "./../../../MyField";
import {
  isLength,
  isPattern,
  isNumber,
  isEmail,
  isMinLength,
} from "@formiz/validations";
import { InputDate } from "./../../../components/formInput/date";
import { MyFieldPassword } from "./../../../MyFieldPassword";
import React, { useState } from "react";
import { useSingup } from "./../../../services/api/auth";

const AddNewPatient = (props) => {
  const { medecin_id, addPatient } = props;
  const [fonctionnalite, setFonctionnalite] = useState("patient");
  const myForm = useForm();
  const { values } = myForm;
  const [sexes, setSexes] = useState("homme");

  const toast = useToast();
  const { mutate, isLoading } = useSingup({
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
      res = res.data;
      if (res.api_status == 1) {
        if (res.exists) {
          toast({
            title: res.elementExists + " existe déja",
            description: "choisir un autre " + res.elementExists + " 💭",
            status: "success",
            duration: `4000`,
            isClosable: true,
          });
        } else {
          toast({
            title: " ✨ ",
            description: "🎉 Compte a été enregistré",
            status: "success",
            duration: `4000`,
            isClosable: true,
          });
          addPatient({ medecin_id, patient_id: res.id });
        }
      }
    },
  });
  const handleSubmit = (values) => {
    values.sexes = sexes;
    values.id_cms_privileges = fonctionnalite;
    delete values.R_password;
    mutate(values);
  };
  return (
    <React.Fragment>
      <Spinner
        display={!isLoading ? `none` : ``}
        size="xl"
        m="auto"
        color="red.500"
      />
      <Stack
        maxW={400}
        display={isLoading ? `none` : ``}
        margin="auto"
        spacing={5}
      >
        <Formiz connect={myForm} onValidSubmit={handleSubmit}>
          <form noValidate onSubmit={myForm.submit}>
            <MyField
              name="nom"
              label="Nom"
              required="Il est requis de compléter ce champ"
              validations={[
                {
                  rule: isPattern("^[a-zA-Z ]*$"),
                  message: "Le nom ne contient que des lettres",
                },
              ]}
            />
            <MyField
              name="prenom"
              label="Prénom"
              required="Il est requis de compléter ce champ"
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
                    <Radio value="homme" py={3} mx={5}>
                      Homme 👨‍🦰
                    </Radio>
                    <Radio value="femme" py={3} mx={5}>
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
              name="email"
              label="E-mail"
              validations={[
                {
                  rule: isEmail(),
                  message: "Veuillez vérifier le format de l'E-mail",
                },
                {
                  rule: (val) => !!val || !!values.cin || !!values.telephone,
                  message: 'Le champ E-mail doit contenir "@" et "." ',
                  deps: [values.cin, values.telephone],
                },
              ]}
            />
            <MyField
              name="cin"
              label="C.I.N"
              validations={[
                {
                  rule: isLength(8),
                  message:
                    "La carte d'identité doit être constituée  de 8 chiffres",
                },
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
              name="telephone"
              label="Téléphone"
              validations={[
                {
                  rule: isLength(8),
                  message:
                    "La numéro de téléphone doit être constituée  de 8 chiffres",
                },
                {
                  rule: isNumber(),
                  message:
                    "La numéro de téléphone  ne contient que des chiffres",
                },
                {
                  rule: (val) => !!val || !!values.cin || !!values.email,
                  message:
                    "La numéro de téléphone doit être constituée  de 8 chiffres",
                  deps: [values.cin, values.email],
                },
              ]}
            />
            <MyFieldPassword
              name="password"
              label="Mot de passe"
              required="Il est requis de compléter ce champ "
              type="password"
              validations={[
                {
                  rule: isMinLength(6),
                  message:
                    "Le mot de passe doit contenir au moins 6 caractères",
                },
              ]}
            />
            <MyFieldPassword
              name="R_password"
              label="Répéter le mot de passe"
              required="Il est requis de compléter le champ correspondant au répéter mot de passe"
              type="password"
              validations={[
                {
                  rule: (val) => val == values.password,
                  message: "Le mot de passe répété doit être le même.",
                  deps: [values.cin, values.telephone],
                },
              ]}
            />
            <FormControl mt={5} align="center">
              <Button
                type="submit"
                borderColor="green.500"
                disabled={!myForm.isValid}
              >
                Créer mon compte
                {!myForm.isValid ? `` : `👌`}
              </Button>
            </FormControl>
          </form>
        </Formiz>
      </Stack>
    </React.Fragment>
  );
};
export default AddNewPatient;
