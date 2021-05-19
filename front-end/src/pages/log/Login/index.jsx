import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

import { Formiz, useForm } from "@formiz/core";

import {
  useToast,
  Box,
  Text,
  FormControl,
  Button,
  Spinner,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import { MyField } from "../../../components/formInput/";
import { MyFieldPassword } from "../../../components/formInput/password";
import { Link } from "react-router-dom";
import { useLogin } from "./../../../services/api/auth";
import { TbibyContext } from "./../../../router/context";

const Login = () => {
  const history = useHistory();
  const { setUser } = useContext(TbibyContext);

  const toast = useToast();
  const { mutate, isLoading } = useLogin({
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
      let data = { ...res.data };
      if (Object.entries(res.data).length !== 0 && data.status == "Active") {
        data.isAuthenticated = true;
        localStorage.setItem("user", JSON.stringify(data));
        setUser(data);
        toast({
          title:
            "👨‍⚕️ Bienvenue " +
            (data.sexes == "homme" ? `Mr ` : `Mrs `) +
            data.nom,
          description: " Vous êtes maintenant connecté à votre compte.",
          status: "success",
          duration: `4000`,
          isClosable: true,
        });
      } else {
        toast({
          titre: "Vérifiez vos informations🔐",
          description:
            "Entrez votre e-mail, téléphone ou CIN et votre mot de passe",
          status: "success",
          duration: 4000,
          isClosable: true,
        });
      }
      history.push("/dashboard");
    },
  });

  const MyForm = useForm();
  const handleSubmit = (values) => {
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
      <Box display={isLoading ? `none` : ``}>
        <Formiz connect={MyForm} onValidSubmit={handleSubmit}>
          <form noValidate onSubmit={MyForm.submit}>
            <MyField
              name="user"
              label="Nom d'utilisateur"
              required="Il est requis de compléter ce champ"
              note="Connectez-vous avec  N° Téléphone ou votre N° C.I.N ou E-mail"
            />
            <MyFieldPassword
              name="password"
              label="Mot de passe"
              required="Il est requis de compléter ce champ"
              type="password"
            />
            <FormControl mt={5} align="center">
              <Button
                w="40%"
                type="submit"
                borderColor="green.500"
                disabled={!MyForm.isValid}
              >
                Se connecter
                {!MyForm.isValid ? `` : `👌`}
              </Button>
            </FormControl>
          </form>
        </Formiz>

        <Text mt="4" align="center" maxW="md" fontWeight="medium">
          <Box
            marginStart="1"
            color={mode("blue.600", "blue.200")}
            _hover={{ color: "blue.600" }}
            display={{ base: "block", sm: "revert" }}
          >
            <Link to="singup">Créez votre compte ✨</Link>
          </Box>
        </Text>
      </Box>
    </React.Fragment>
  );
};

export default Login;
