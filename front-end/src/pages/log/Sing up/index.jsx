import { Formiz, useForm } from "@formiz/core";
import { Stack, Button, FormControl, Center } from "@chakra-ui/react";
import { isEmail, isLength, isNumber } from "@formiz/validations";
import { MyField } from "../../../components/formInput";
import { MyFieldPassword } from "../../../components/formInput/password";
import React from "react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
const Singup = () => {
  const myForm = useForm();
  const { values } = myForm;
  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <React.Fragment>
      <Stack maxW={400} margin="auto" spacing={5}>
        <Formiz connect={myForm} onValidSubmit={handleSubmit}>
          <form noValidate onSubmit={myForm.submit}>
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
                  rule: (val) => !!val || !!values.cin || !!values.telephone,
                  message: "zid wa7ed",
                  deps: [values.cin, values.telephone],
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
                  rule: (val) => !!val || !!values.cin || !!values.telephone,
                  message: "zid wa7ed",
                  deps: [values.cin, values.telephone],
                },
              ]}
            />
            <MyFieldPassword
              name="password"
              label="mot de passe"
              required="password is required"
              type="password"
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
