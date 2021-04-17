import React from "react";
import { isNumber, isPattern } from "@formiz/validations";
import {
  FormControl,
  Button,
  useColorModeValue as mode,
  VStack,
} from "@chakra-ui/react";

import { MyField } from "./../../../components/formInput";
import { FieldGroup } from "./../../../components/FieldGroup/index";

const GestiondeCopmtePatient = (props) => {
  const { gcInfo } = props;
  return (
    <React.Fragment>
      <FieldGroup title="information spécifique">
        <VStack width="full" spacing="6">
          <MyField
            name="parent"
            label="Représentant légal"
            Placeholder={gcInfo.parent}
          />

          <MyField
            name="Code_APCI"
            label="Code APCI"
            dtValue={gcInfo.Code_APCI}
            validations={[
              {
                rule: isNumber(),
                message: "Le code-APCI ne contient que des chiffres",
              },
            ]}
          />

          <MyField
            name="Adresse"
            label="Adresse"
            dtValue={gcInfo.Adresse}
            Placeholder={gcInfo.Adresse}
          />
          
        </VStack>
      </FieldGroup>
    </React.Fragment>
  );
};
export default GestiondeCopmtePatient;
