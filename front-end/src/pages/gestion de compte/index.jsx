import React, { useState } from "react";

import {
  useToast,
  Box,
  Radio,
  Stack,
  RadioGroup,
  FormControl,
  Button,
  Spinner,
  Center,
  useColorModeValue as mode,
} from "@chakra-ui/react";

import { MyField } from "./../../components/formInput";
import { MyFieldPassword } from "./../../components/formInput/password";
import { Formiz, useForm } from "@formiz/core";

const Accountmanagement = () => {
  const [sexes, setSexes] = React.useState("homme");
  const isLoading = false;
  const MyForm = useForm();
  const handleSubmit = (values) => {};
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
            <MyField name="nom" label="Nom" required="Nom is required" />
            <MyField
              name="prenom"
              label="Prenom"
              required="Prenom is required"
            />
            <FormControl>
              <Center>
                <RadioGroup onChange={setSexes} value={sexes}>
                  <Stack direction="row" size="lg">
                    <Radio value="homme" py={3} px={10}>
                      homme 👨‍🦰
                    </Radio>
                    <Radio value="famme" py={3} px={10}>
                      Famme 👩‍🦰
                    </Radio>
                  </Stack>
                </RadioGroup>
              </Center>
            </FormControl>

            <MyField
              name="telephone"
              label="Telephone"
              required="Telephone is required"
            />

            <MyField
              name="telephone"
              label="Telephone"
              required="Telephone is required"
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
                disabled={!MyForm.isValid}
              >
                Submit
                {!MyForm.isValid ? `` : `👌`}
              </Button>
            </FormControl>
          </form>
        </Formiz>
      </Box>
    </React.Fragment>
  );
};
export default Accountmanagement;
