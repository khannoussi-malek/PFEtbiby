import React from "react";
import {
  FormControl,
  Button,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import { Select2 } from "../../../components/formInput/select";
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
        // required="Il est requis de compléter le champ correspondant au adresse_physique"
        validations={[
          {
            rule: isPattern("^[a-zAZ ]*$"),
            message: "L'adresse physique ne contient que des lettres",
          },
        ]}
         />
        <MyField
        name="spécialité"
        label="spécialité"
        // required="Il est requis de compléter le champ correspondant au spécialité"
        validations={[
          {
            rule: isPattern("^[a-zAZ ]*$"),
            message: "La spécialité ne contient que des lettres",
          },
        ]}
         />
         <MyField
        name="temps_de_séance"
        label="Temps_de_séance"
        // required="Il est requis de compléter le champ correspondant au temps_de_séance"
        validations={[
          {
            rule: isNumber(),
            message: "Le temps_de_séance ne contient que des chiffres",
          },
        ]}
         />
          <Select2
                    //required={"Choisir un domaine."}
                    data={['domaine A', 'domaine B', 'domaine C',]}
                    label="Domaine"
                    name="selectDomaine"
                    options={{
                      placeholder: 'Choisir un domaine',
                    }}
          />
          
          <Select2
                    //required={"Choisir un sous_domaine."}
                    //data={listeSousDomaine}
                    label="Sous Domaine"
                    name="selectSousDomaine"
          />
    </React.Fragment>
  );
};
export default GestiondeCopmteMedecin;
