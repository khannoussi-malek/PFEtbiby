import React, { useState } from "react";
import {
  FormControl,
  Button,
  useToast,
  useColorModeValue as mode,
  VStack,
} from "@chakra-ui/react";
import { Select2 } from "../../../components/formInput/select";
import { isNumber, isPattern } from "@formiz/validations";
import { MyField } from "./../../../components/formInput";
import { useDomaine } from "./../../../services/api/domaine/index";
import { FieldGroup } from "./../../../components/FieldGroup/index";

const GestiondeCopmteMedecin = (props) => {
  const { gcInfo } = props;

  const [domaine, setDomaine] = useState([]);
  const toast = useToast();
  const { isLoading, refetch } = useDomaine({
    onError: (error) => {
      toast({
        title: "🌐 Problème de connexion",
        description: " Il y a un problème de connexion",
        status: "success",
        duration: `4000`,
        isClosable: true,
      });
    },
    onSuccess: (res) => {
      setDomaine(res.data);
    },
  });
  const { mutate } = useDomaine({
    onError: (error) => {
      // setMessage("Vérifier l'information qui vous inseri ou votre liste");
    },
    onSuccess: (res) => {
      // console.log(res);
    },
  });
  return (
    <React.Fragment>
      <FieldGroup title="information spécifique">
        <VStack width="full" spacing="6">
          <MyField
            name="adresse_physique"
            label="Adresse"
            // // dtValue={gcInfo.adresse_physique}
            // Placeholder={gcInfo.adresse_physique}
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
            Placeholder={gcInfo.spécialité}
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
            Placeholder={gcInfo.temps_de_séance}
            // required="Il est requis de compléter le champ correspondant au temps_de_séance"
            validations={[
              {
                rule: isNumber(),
                message: "Le temps_de_séance ne contient que des chiffres",
              },
            ]}
          />

          <Select2
            required={"Choisir un domaine."}
            data={domaine}
            label="Domaine"
            name="SelectDomaine"
            onChange={() => mutate()}
          />
          <Select2
            required={"Choisir un sous_domaine."}
            data={[
              {
                label: "domaine A1",
                value: "domaine A1",
              },
              {
                label: "domaine B1",
                value: "domaine B1",
              },
              {
                label: "domaine C1",
                value: "domaine C1",
              },
            ]}
            label="Sous Domaine"
            name="selectSousDomaine"
          />
        </VStack>
      </FieldGroup>
    </React.Fragment>
  );
};
export default GestiondeCopmteMedecin;
