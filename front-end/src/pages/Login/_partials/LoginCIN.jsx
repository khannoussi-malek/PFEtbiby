import { Formiz, useForm } from "@formiz/core";
import { Stack, Button, FormControl } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { MyField } from "../../../components/formInput/";
import { MyFieldPassword } from "../../../components/formInput/password";
import { isLength, isNumber } from "@formiz/validations";

const LoginCIN = (props) => {
  const myForm = useForm();
  const handleSubmit = (values) => {
    props.setlogindata(values);
  };
  useEffect(() => {
    // Update the document title using the browser API
  });
  return (
    <React.Fragment>
      <Stack maxW={400} margin="auto" spacing={5}>
        <Formiz connect={myForm} onValidSubmit={handleSubmit}>
          <form noValidate onSubmit={myForm.submit}>
            <MyField
              name="user"
              label="CIN"
              required="CIN is required"
              validations={[
                {
                  rule: isLength(8),
                  message: "carte identité composé par 8 chiffre",
                },
                {
                  rule: isNumber(),
                  message: "carte identité composé par des chiffre",
                },
              ]}
            />
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
      </Stack>
    </React.Fragment>
  );
};

export default LoginCIN;
