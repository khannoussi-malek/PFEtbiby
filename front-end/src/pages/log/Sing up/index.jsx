import { Formiz, useForm } from "@formiz/core";
import {
  Stack,
  Button,
  FormControl,
  Center,
  RadioGroup,
  useToast,
  Radio,
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
  const { mutate } = useSingup({
    onSuccess: (res) => {
      res = res.data;
      if (res.api_status == 1) {
        if (res.exists) {
          toast({
            title: res.elementExists + " est pris ",
            description: "choisir autre " + res.elementExists + " 💭",
            status: "success",
            duration: `4000`,
            isClosable: true,
          });
        } else {
          toast({
            title: " ✨ ",
            description:
              "🎉Votre compte est enregistré, vous attend pour vous connecter🎉",
            status: "success",
            duration: `4000`,
            isClosable: true,
          });
          history.push("/login");
        }
      }
    },
  });
  const [fonctionnalite, serFonctionnalite] = useState("patient");

  const myForm = useForm();
  const { values } = myForm;
  const handleSubmit = (values) => {
    values.id_cms_privileges = fonctionnalite;
    mutate(values);
  };

  return (
    <React.Fragment>
      <Stack maxW={400} margin="auto" spacing={5}>
        <Formiz connect={myForm} onValidSubmit={handleSubmit}>
          <form noValidate onSubmit={myForm.submit}>
            <Center>
              <RadioGroup defaultValue="patient" name="fonctionnalite">
                <Stack spacing={5} direction="row">
                  <Radio
                    colorScheme="purple.500 "
                    size="lg"
                    value="patient"
                    defaultChecked={true}
                  >
                    Patient
                  </Radio>
                  <Radio colorScheme="blue.300" size="lg" value="medecin">
                    medecin
                  </Radio>
                </Stack>
              </RadioGroup>
            </Center>
            <MyField
              name="nom"
              label="Nom"
              required="nom is required"
              validations={[
                {
                  rule: isPattern("^[a-zA-Z]*$"),
                  message: "nom contien letter selmen",
                },
              ]}
            />
            <MyField
              name="prenom"
              label="Prenom"
              required="Prenom is required"
              validations={[
                {
                  rule: isPattern("^[a-zA-Z]*$"),
                  message: "Prenom contien letter selmen",
                },
              ]}
            />
            <MyField
              name="email"
              label="Email"
              validations={[
                {
                  rule: isEmail(),
                  message: "verifie email svp",
                },
                {
                  rule: (val) => !!val || !!values.cin || !!values.telephone,
                  message: "zid wa7ed",
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
                  message: "carte identité composé par 8 chiffre",
                },
                {
                  rule: isNumber(),
                  message: "carte identité composé par des chiffre",
                },

                {
                  rule: (val) => !!val || !!values.email || !!values.telephone,
                  message: "zid wa7ed",
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
                  message: "numero telephone composé par des chiffre",
                },
                {
                  rule: isNumber(),
                  message: "numero telephone  composé par des chiffre",
                },
                {
                  rule: (val) => !!val || !!values.cin || !!values.email,
                  message: "zid wa7ed",
                  deps: [values.cin, values.email],
                },
              ]}
            />
            <MyFieldPassword
              name="password"
              label="mot de passe"
              required="password is required"
              type="password"
              validations={[
                {
                  rule: isMinLength(6),
                  message:
                    "Le mot de passe doit avoir au moins une longueur de 6",
                },
              ]}
            />
            <MyFieldPassword
              name="R_password"
              label="Répéter le mot de passe"
              required="password is required"
              type="password"
              validations={[
                {
                  rule: (val) => val == values.password,
                  message: "not the same",
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
