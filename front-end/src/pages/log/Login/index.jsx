import React, { useEffect, useRef } from "react";
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
import useQuery from "react-query";
import Api from "./../../../services/api/index";

const Login = () => {
  let UserPassword = {
    user: "",
    password: "",
  };
  useEffect(() => {
    if (UserPassword.user != "") {
      // console.log(GetApi("/login"));
      // Your useEffect code here to be run on update
    }
  }, [UserPassword]);
  // const { data, errer } = useQuery("login", loginApi("login",));
  let auth = new Auth();
  const MyForm = useForm();

  const handleSubmit = (values) => {
    UserPassword = values;
    console.log(values);
    Api.get("/login", {
      params: {
        ...values,
      },
    })
      .then((rep) => console.log(rep))
      .catch((erroe) => console.log("ffffffffffffff" + erroe));
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
