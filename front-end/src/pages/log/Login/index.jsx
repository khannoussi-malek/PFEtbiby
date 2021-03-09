import React from "react";
import { Formiz, useForm } from "@formiz/core";

import {
  Box,
  Text,
  FormControl,
  Button,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import { MyField } from "../../../components/formInput/";
import { MyFieldPassword } from "../../../components/formInput/password";
import Auth from "./../../../services/authentication/index";

import { Link, useHistory } from "react-router-dom";

const Login = () => {
  let auth = new Auth();
  const MyForm = useForm();

  const handleSubmit = (values) => {
    console.log(values);
    auth.login();
    localStorage.setItem("token", "ok");
    //login api all data in [logindata] user and password
  };

  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

export default Login;
