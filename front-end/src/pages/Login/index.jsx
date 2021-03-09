import { Formiz, useForm } from "@formiz/core";

import { MyField } from "../../components/formInput/";
import { MyFieldPassword } from "../../components/formInput/password";
import {
  Stack,
  Center,
  Image,
  Link,
  Button,
  FormControl,
} from "@chakra-ui/react";
import React from "react";
import { useHistory } from "react-router-dom";
const Login = () => {
  let history = useHistory();
  const ToSingup = () => history.push("/singup");
  const handleSubmit = (values) => {
    console.log(values);
    localStorage.setItem("token", "ok");
    //login api all data in [logindata] user and password
  };
  const myForm = useForm();

  return (
    <React.Fragment>
      <Stack maxW={400} margin="auto" spacing={5} marginTop={10}>
        <Image maxW={200} m="auto" src="./logo192.png" alt="Segun Adebayo" />
        <Formiz connect={myForm} onValidSubmit={handleSubmit}>
          <form noValidate onSubmit={myForm.submit}>
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
                disabled={!myForm.isValid}
              >
                {!myForm.isValid ? `` : `👌`}
                Submit
                {!myForm.isValid ? `` : `👌`}
              </Button>
            </FormControl>
          </form>
        </Formiz>
        <Center onClick={ToSingup}>
          <Link as="singup">Créez votre compte ✨</Link>
        </Center>
      </Stack>
    </React.Fragment>
  );
};

export default Login;
