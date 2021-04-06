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
       name="parent" 
       label="parent" 
      />
       <MyField
       name="Code_APCI" 
       label="Code_APCI" 
       required="Il est requis de compléter le champ correspondant au code_APCI"
       validations={[
        {
          rule: isNumber(),
          message: "Le code-APCI ne contient que des chiffres",
        },
      ]}
       />
    </React.Fragment>
  );
};
export default GestiondeCopmtePatient;
