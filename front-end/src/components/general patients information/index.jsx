import { usePatentInfo } from "./../../services/api/patient information/index";
import {
  useToast,
  Button,
  Box,
  Text,
  SkeletonCircle,
  SkeletonText,
  Avatar,
  Flex,
} from "@chakra-ui/react";
import React, { useState } from "react";
import TextInfo from "./_partials/text";

const GeneralPatientsInformation = (props) => {
  const [patientInfo, setPatientInfo] = useState({});
  const { patient } = props;
  const [show, setShow] = useState(false);
  const toast = useToast();
  const params = { cms_users_id: patient.id };
  const { isLoading, refetch } = usePatentInfo({
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
      setPatientInfo(res.data);
    },
  });
  return (
    <React.Fragment>
      <Button
        m={5}
        bg={show ? `red.300` : `blue.300`}
        onClick={() => setShow(!show)}
      >
        informations
      </Button>
      <Box display={!show ? `none` : `block`}>
        <Box p={6} display={!isLoading ? `none` : `block`}>
          <SkeletonCircle size="10" />
          <SkeletonText mt="4" noOfLines={4} spacing="4" />
        </Box>
        <Box w="100%" p={6} display={isLoading ? `none` : `block`}>
          <Avatar
            my={3}
            size="md"
            src={patientInfo.photo}
            name={patient.nomprenom}
          />
          <TextInfo data={patientInfo.nom} type="Nom" />
          <TextInfo data={patientInfo.prenom} type="Prenom" />
          <TextInfo data={patientInfo.cin} type="C.I.N" />
          <TextInfo data={patientInfo.Date_Naissance} type="Date naissance" />
          <TextInfo data={patientInfo.email} type="E-mail" />
          <TextInfo data={patientInfo.sexes} type="Sexes" />
          <TextInfo data={patientInfo.telephone} type="Telephone" />
        </Box>
      </Box>
    </React.Fragment>
  );
};
export default GeneralPatientsInformation;
