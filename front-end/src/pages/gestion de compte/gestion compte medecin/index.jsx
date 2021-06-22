import React, { useState } from "react";
import {
  Button,
  useToast,
  useColorModeValue as mode,
  VStack,
  Flex,
  Box,
  Code,
} from "@chakra-ui/react";
import { Center } from "@chakra-ui/layout";
import { Select2 } from "../../../components/formInput/select";
import { isNumber, isPattern } from "@formiz/validations";
import { MyField } from "./../../../components/formInput";
import { useDomaine, useSousDomaine } from "./../../../services/api/domaine";
import { FieldGroup } from "./../../../components/FieldGroup";
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
      <FieldGroup title="Information spécifique">
        <VStack width="full" spacing="6">
          <MyField
            name="adresse_physique"
            label="Adresse"
            Placeholder={gcInfo.adresse_physique}

            // validations={[
            //   {
            //     rule: isPattern("^[a-zAZ ]*$"),
            //     message: "L'adresse physique ne contient que des lettres",
            //   },
            // ]}
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
            <Box>
              <AddDomaine refetch={refetch} />
            </Box>
          </Flex>
          <Flex w="100%">
            <Select2
              onChange={() => refetch()}
              data={sousDomaine}
              label="Sous Domaine"
              name="selectSousDomaine"
            />
            <Box display={DomaineSelected != 0 ? `` : `none`}>
              <SousDomaine
                mutateSousD={mutateSousD}
                domaine={DomaineSelected}
              />
            </Box>
          </Flex>
          <MyField
            name="secretaire"
            label="Secrétaire"
            Placeholder={gcInfo.secretaire}
          />
          <Code colorScheme="green" my={5} fontSize="15px" borderRadius={10}>
            Pour ajouter une secrétaire vous devez entrer son cin ou son numéro
            de téléphone ou son l'email. Pour la supprimer vous devez écrire
            'supprimer' dans le champs de saisie.
          </Code>
        </VStack>
      </FieldGroup>
    </React.Fragment>
  );
};
export default GestiondeCopmteMedecin;
