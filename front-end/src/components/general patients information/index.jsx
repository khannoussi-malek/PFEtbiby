import { usePatentInfo } from "./../../services/api/patient information/index";
import {
  Center,
  useToast,
  Button,
  SkeletonCircle,
  SkeletonText,
  Avatar,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  IconButton,
} from "@chakra-ui/react";
import React, { useState } from "react";
import TextInfo from "./_partials/text";
import { useDisclosure } from "@chakra-ui/hooks";
import { CloseIcon } from "@chakra-ui/icons";

const GeneralPatientsInformation = (props) => {
  const [patientInfo, setPatientInfo] = useState({});
  const { patient } = props;
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
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <React.Fragment>
      <Button m={5} bg="blue.100" onClick={onOpen}>
        Informations
      </Button>
      <Drawer placement="right" size="md" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent bg="gray.50">
          <DrawerHeader borderBottomWidth="1px">
            Information de patient
            <IconButton
              float="right"
              variant="outline"
              size="xs"
              m={1}
              colorScheme="red"
              fontSize="10px"
              icon={<CloseIcon />}
              onClick={() => onClose()}
            />
          </DrawerHeader>
          <DrawerBody display={!isLoading ? `none` : ``}>
            <SkeletonCircle size="12" />
            <SkeletonText mt="7" noOfLines={7} spacing="7" />
          </DrawerBody>
          <DrawerBody display={isLoading ? `none` : ``}>
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
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </React.Fragment>
  );
};
export default GeneralPatientsInformation;
