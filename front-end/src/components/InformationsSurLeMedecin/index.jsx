import { useMedecinInfo } from "./../../services/api/Medecin information";
import { useToast, Text, Button, Avatar } from "@chakra-ui/react";
import { useState } from "react";
import { MdCall } from "react-icons/md";
import React from "react";
import { EmailIcon } from "@chakra-ui/icons";
import { link, userImage } from "../../services/api";
const InformationsSurLeMedecin = (props) => {
  const { medecin } = props;
  const [medecinInfo, setMedecinInfo] = useState([]);
  const params = { id: medecin };
  const toast = useToast();
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
      {medecinInfo.photo && (
        <Avatar
          size="xl"
          name={medecinInfo.nom}
          src={`${link.slice(0, -1)}${medecinInfo.photo}`}
        />
      )}
      <Text display="block" as="a" href={"tel:" + medecinInfo.telephone}>
        <Button
          my={1}
          leftIcon={<MdCall />}
          colorScheme="green"
          variant="outline"
        >
          Appelles
        </Button>
      </Text>

      <Text as="a" href={"mailto:" + medecinInfo.email}>
        <Button
          my={1}
          colorScheme="green"
          leftIcon={<EmailIcon />}
          variant="outline"
        >
          Email
        </Button>
      </Text>
      <Text>{medecinInfo.sexes}</Text>
    </React.Fragment>
  );
};
export default InformationsSurLeMedecin;
