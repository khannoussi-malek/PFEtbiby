import React from "react";
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

const Login = () => {
  let history = useHistory();
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
      let data = res.data;
      if (Object.entries(res.data).length !== 0 && data.status == "Active") {
        localStorage.setItem("userid", data.id);
        localStorage.setItem(
          "nomPrenom",
          data.nom != null
            ? `${data.nom}`
            : `` + " " + (data.prenom != null)
            ? `${data.prenom}`
            : ``
        );

        localStorage.setItem("isAuthenticated", "true");
        localStorage.setItem("fonctionnalite", data.fonctionnalite);
        localStorage.setItem("telephone", data.telephone);
        localStorage.setItem("email", data.email);
        localStorage.setItem("cin", data.cin);
        localStorage.setItem("sexes", data.sexes);
        localStorage.setItem("photo", data.photo);
        toast({
          title:
            "👨‍⚕️ Bienvenue " +
            (data.sexes == "homme" ? `Mr ` : `Mrs `) +
            data.nom,
          description:
            " Vous êtes maintenant connecté à votre compte. être en bonne santé",
          status: "success",
          duration: `4000`,
          isClosable: true,
        });
        history.push("/dashbord");
      } else {
        toast({
          title: "vérifier votre information 🔐",
          description:
            "Entrez votre e-mail, téléphone ou CIN et votre mot de passe",
          status: "success",
          duration: 4000,
          isClosable: true,
        });
      }
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
            <MyField name="user" label="User" required="user is required" />
            <MyFieldPassword
              name="password"
              label="password"
              required="password is required"
              type="password"
            />
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
