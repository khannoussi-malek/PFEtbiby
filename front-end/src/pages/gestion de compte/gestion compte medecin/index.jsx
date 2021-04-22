import React, { useState } from "react";
import {
  Button,
  useToast,
  useColorModeValue as mode,
  VStack,
  Flex,
} from "@chakra-ui/react";
import { Select2 } from "../../../components/formInput/select";
import { isNumber, isPattern } from "@formiz/validations";
import { MyField } from "./../../../components/formInput";
import {
  useDomaine,
  useSousDomaine,
} from "./../../../services/api/domaine/index";
import { FieldGroup } from "./../../../components/FieldGroup/index";
import AddDomaine from "./_partials/Domaine";
import SousDomaine from "./_partials/SousDomaine";

const GestiondeCopmteMedecin = (props) => {
  const { gcInfo, valueForm } = props;

  const [domaine, setDomaine] = useState([]);
  const [sousDomaine, setSousDomaine] = useState([]);
  const [DomaineSelected, setDomaineSelected] = useState(0);

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
  const param = { id: valueForm.SelectDomaine };
  const { isLoading: isLoadingSousD, mutate: mutateSousD } = useSousDomaine({
    param,
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
      setSousDomaine(res.data);
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

          <Flex w="100%">
            <Select2
              data={domaine}
              label="Domaine"
              onChange={(event) => {
                setDomaineSelected(event.value);
                setSousDomaine([]);
                mutateSousD({ domaine_id: event.value });
              }}
              name="SelectDomaine"
            />
            <AddDomaine />
          </Flex>
          <Flex w="100%">
            <Select2
              onChange={() => refetch()}
              data={sousDomaine}
              label="Sous Domaine"
              name="selectSousDomaine"
            />
            <SousDomaine mutateSousD={mutateSousD} domaine={DomaineSelected} />
          </Flex>
        </VStack>
      </FieldGroup>
    </React.Fragment>
  );
};
export default GestiondeCopmteMedecin;
