import {
  Stack,
  FormControl,
  FormLabel,
  FormHelperText,
  FormErrorMessage,
  Input,
} from "@chakra-ui/react";
import React, { Component, useState } from "react";

const Login = () => {
  const { email } = useState("");
  const { showpassword, setshowpassword } = useState(false);
  const { password } = useState("");
  return (
    <React.Fragment>
      <Stack maxW={400} margin="auto" spacing={5} marginTop={10}>
        <FormControl>
          <FormLabel htmlFor="email">email address</FormLabel>
          <Input
            isRequired
            type="email"
            id="email"
            aria-describedby="email-helper-test"
            value={email}
          />
          <FormErrorMessage>nope</FormErrorMessage>
          <FormHelperText id="email-helper-test">
            We'll never share your password.
          </FormHelperText>
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="password">password address</FormLabel>
          <Input
            isRequired
            type={showpassword ? "text" : "password"}
            id="password"
            autoComplete="off"
            aria-describedby="email-helper-test"
            value={password}
          />
          <FormErrorMessage>nope</FormErrorMessage>
          <FormHelperText>We'll never share your email.</FormHelperText>
        </FormControl>
        <FormControl>
          <button type="submit"> log in</button>
        </FormControl>
        hi
      </Stack>
    </React.Fragment>
  );
};

export default Login;
