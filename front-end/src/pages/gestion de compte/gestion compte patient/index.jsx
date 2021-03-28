import React, { useState } from "react";
import { isNumber, isLength } from "@formiz/validations";

import {
  Box,
  Radio,
  FormControl,
  Button,
  Spinner,
  Center,
  useColorModeValue as mode,
} from "@chakra-ui/react";

import { MyField } from "./../../../components/formInput";

const GestiondeCopmtePatient = () => {
  return (
    <React.Fragment>
      <MyField name="pp" label="pp" required="Telephone is required" />
    </React.Fragment>
  );
};
export default GestiondeCopmtePatient;
