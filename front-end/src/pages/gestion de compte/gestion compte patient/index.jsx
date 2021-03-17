import React from "react";
import { isNumber, isPattern } from "@formiz/validations";

import {
  FormControl,
  Button,
  useColorModeValue as mode,
} from "@chakra-ui/react";

import { MyField } from "./../../../components/formInput";

const GestiondeCopmtePatient = () => {
  return (
    <React.Fragment>
      <MyField
       name="date_naissance" 
       label="Date de naissance" 
       required="Il est requis de compléter le champ correspondant au date_naissance"
       validations={[
        {
          message: "La date naissance doit respecter la forme jj/mm/aaaa",
        },
      ]}
       />
       <MyField
       name="parent" 
       label="Parent" 
       required="Il est requis de compléter le champ correspondant au parent"
       validations={[
        {
          rule: isPattern("^[a-z]*$"),
          message: "Le parent ne contient que des lettres",
        },
      ]}
       />
       <MyField
       name="code_APCI" 
       label="Code_APCI" 
       required="Il est requis de compléter le champ correspondant au code_APCI"
       validations={[
        {
          rule: isNumber(),
          message: "Le parent ne contient que des lettres",
        },
      ]}
       />
       <FormControl mt={5} align="center">
              <Button
                w="40%"
                type="submit"
                borderColor="green.500"
              >
                Submit
              </Button>
            </FormControl>
    </React.Fragment>
  );
};
export default GestiondeCopmtePatient;
