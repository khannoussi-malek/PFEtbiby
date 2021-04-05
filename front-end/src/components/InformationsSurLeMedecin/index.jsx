import { useMedecinInfo } from "./../../services/api/Medecin information/index";
import { useToast, Text, Button } from "@chakra-ui/react";
import { useState } from "react";
import { MdCall } from "react-icons/md";
import React from "react";
import { EmailIcon } from "@chakra-ui/icons";
const InformationsSurLeMedecin = (props) => {
  const { medecin } = props;
  const [medecinInfo, setMedecinInfo] = useState([]);
  const params = { id: medecin };
  const toast = useToast();
  console.log(medecinInfo);
  const { isLoading, refetch } = useMedecinInfo({
    params,
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
      setMedecinInfo(res.data);
    },
  });

  return (
    <React.Fragment>
      <Text>{medecinInfo.nom}</Text>
      <Text display="block" as="a" href={"tel:" + medecinInfo.telephone}>
        <Button
          my={1}
          leftIcon={<MdCall />}
          colorScheme="blue"
          variant="outline"
        >
          Appelles
        </Button>
      </Text>

      <Text as="a" href={"mailto:" + medecinInfo.email}>
        <Button
          my={1}
          colorScheme="teal"
          leftIcon={<EmailIcon />}
          variant="solid"
        >
          Email
        </Button>
      </Text>
      <Text>{medecinInfo.sexes}</Text>
      <Text>{medecinInfo.photo}</Text>
    </React.Fragment>
  );
};
export default InformationsSurLeMedecin;
