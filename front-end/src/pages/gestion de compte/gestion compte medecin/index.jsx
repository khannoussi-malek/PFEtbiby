import React, { useState } from "react";
import {
  FormControl,
  Button,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import {
  isNumber,
  isPattern,
} from "@formiz/validations";
import { MyField } from "./../../../components/formInput";

const GestiondeCopmteMedecin = () => {
  return (
    <React.Fragment>
      <MyField
        name="adresse_physique"
        label="Adresse"
        required="Il est requis de compléter le champ correspondant au adresse_physique"
        validations={[
          {
            rule: isPattern("^[a-z]*$"),
            message: "L'adresse physique ne contient que des lettres",
          },
        ]}
         />
        <MyField
        name="spécialité"
        label="spécialité"
        required="Il est requis de compléter le champ correspondant au spécialité"
        validations={[
          {
            rule: isPattern("^[a-z]*$"),
            message: "La spécialité ne contient que des lettres",
          },
        ]}
         />
         <MyField
        name="temps_de_séance"
        label="Temps_de_séance"
        required="Il est requis de compléter le champ correspondant au temps_de_séance"
        validations={[
          {
            rule: isNumber(),
            message: "Le temps_de_séance ne contient que des chiffres",
          },
        ]}
         />
         <MyField
        name="domaine_id"
        label="Domaine"
        required="Il est requis de compléter le champ correspondant au domaine_id"
        validations={[
          {
            rule: isNumber(),
            message: "Le domaine_id ne contient que des chiffres",
          },
        ]}
         />
         <MyField
        name="sous_domaine_id"
        label="Sous_domaine"
        required="Il est requis de compléter le champ correspondant au sous_domaine_id"
        validations={[
          {
            rule: isNumber(),
            message: "Le sous_domaine_id ne contient que des chiffres",
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
    </React.Fragment>
  );
};
export default GestiondeCopmteMedecin;
