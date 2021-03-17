import { Formiz, useForm } from "@formiz/core";
import {
  FormControl,
  Radio,
  Stack,
  RadioGroup,
  Button,
  Center,
  useToast,
  Spinner,
} from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import {
  isEmail,
  isLength,
  isNumber,
  isPattern,
  isMinLength,
} from "@formiz/validations";
import { MyField } from "../../../components/formInput";
import { MyFieldPassword } from "../../../components/formInput/password";
import React, { useState } from "react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { useSingup } from "./../../../services/api/auth";

const Singup = () => {
  let history = useHistory();

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
            description: "🎉Votre compte a été enregistré",
            status: "success",
            duration: `4000`,
            isClosable: true,
          });
          history.push("/login");
        }
      }
    },
  });
  const [fonctionnalite, setFonctionnalite] = useState("patient");
  const [sexes, setSexes] = useState("homme");

  const myForm = useForm();
  const { values } = myForm;
  const handleSubmit = (values) => {
    values.id_cms_privileges = fonctionnalite;
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
            <FormControl>
              <Center>
                <RadioGroup
                  onChange={setFonctionnalite}
                  value={fonctionnalite}
                  name="id_cms_privileges"
                >
                  <Stack direction="row" size="lg">
                    <Radio value="patient" py={3} mx={5}>
                      🙋‍♂ Patient
                    </Radio>
                    <Radio value="medecin" py={3} mx={5}>
                      medecin 🩺
                    </Radio>
                  </Stack>
                </RadioGroup>
              </Center>
            </FormControl>
            <FormControl>
              <Center>
                <RadioGroup onChange={setSexes} value={sexes} name="sexes">
                  <Stack direction="row" size="lg">
                    <Radio value="homme" py={3} mx={5}>
                      Homme
                    </Radio>
                    <Radio value="femme" py={3} mx={5}>
                      Femme
                    </Radio>
                  </Stack>
                </RadioGroup>
              </Center>
            </FormControl>

            <MyField
              name="nom"
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
            <MyField
              name="email"
              label="Email"
              validations={[
                {
                  rule: isEmail(),
                  message: "Veuillez vérifier le format de l'e-mail",
                },
                {
                  rule: (val) => !!val || !!values.cin || !!values.telephone,
                  message: "Le champ email doit respecter la format aa@aaaa.aaa",
                  deps: [values.cin, values.telephone],
                },
              ]}
            />
            <MyField
              name="cin"
              label="cin"
              validations={[
                {
                  rule: isLength(8),
                  message: "La carte d'identité doit être constituée  de 8 chiffres",
                },
                {
                  rule: isNumber(),
                  message: "La carte d'identité ne contient que des chiffres",
                },

                {
                  rule: (val) => !!val || !!values.email || !!values.telephone,
                  message: "La carte d'identité doit être constituée  de 8 chiffres",
                  deps: [values.email, values.telephone],
                },
              ]}
            />
            <MyField
              name="telephone"
              label="Telephone"
              validations={[
                {
                  rule: isLength(8),
                  message: "La numéro de téléphone doit être constituée  de 8 chiffres",
                },
                {
                  rule: isNumber(),
                  message: "La numéro de téléphone  ne contient que des chiffres",
                },
                {
                  rule: (val) => !!val || !!values.cin || !!values.email,
                  message: "La numéro de téléphone doit être constituée  de 8 chiffres",
                  deps: [values.cin, values.email],
                },
              ]}
            />
            <MyFieldPassword
              name="password"
              label="mot de passe"
              required="Il est requis de compléter le champ correspondant au mot de passe"
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
                  message: "Le deuxième mot de passe est différent du premier mot de passe",
                  deps: [values.cin, values.telephone],
                },
              ]}
            />
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
        <Center>
          <Link to="login">
            Tu as un compte
            <ExternalLinkIcon mx="2px" />
          </Link>
        </Center>
      </Stack>
    </React.Fragment>
  );
};

export default Singup;
