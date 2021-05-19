import { usePatentInfo } from "./../../services/api/patient information";
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
  useColorModeValue as mode,
  IconButton,
  Text,
  DrawerFooter,
  Tooltip,
} from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";
import React, { useState } from "react";
import TextInfo from "./_partials/text";
import { useDisclosure } from "@chakra-ui/hooks";
import { CloseIcon } from "@chakra-ui/icons";
import { link, userImage } from "./../../services/api";
import { MdCall } from "react-icons/md";

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
      <Button colorScheme={mode("green", "blue")} onClick={onOpen}>
        <Tooltip
          label={`Obtenez les informations générales sur ${patientInfo.nom} ${patientInfo.prenom}`}
          aria-label={`Obtenez les informations générales sur ${patientInfo.nom} ${patientInfo.prenom}`}
        >
          Informations
        </Tooltip>
      </Button>
      <Drawer placement="left" size="md" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent bg={mode("gray.50", "gray.700")}>
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
              size="xl"
              src={
                !!patientInfo.photo
                  ? `${link}${patientInfo.photo}`
                  : `${link}${userImage}`
              }
              name={patient.nomprenom}
            />
            <TextInfo data={patientInfo.nom} type="Nom" />
            <TextInfo data={patientInfo.prenom} type="Prenom" />
            <TextInfo data={patientInfo.cin} type="C.I.N" />
            <TextInfo data={patientInfo.Date_Naissance} type="Date naissance" />
            <TextInfo data={patientInfo.email} type="E-mail" />
            {!!patientInfo.email ? (
              <Text as="a" href={"mailto:" + patientInfo.email}>
                <Button
                  my={1}
                  colorScheme="green"
                  leftIcon={<EmailIcon />}
                  variant="outline"
                >
                  Email
                </Button>
              </Text>
            ) : (
              ``
            )}
            <TextInfo data={patientInfo.sexes} type="Sexe" />
            <TextInfo data={patientInfo.telephone} type="Telephone" />

            {!!patientInfo.telephone ? (
              <Text
                display="block"
                as="a"
                href={"tel:" + patientInfo.telephone}
              >
                <Button
                  my={1}
                  leftIcon={<MdCall />}
                  colorScheme="blue"
                  variant="outline"
                >
                  Appeller
                </Button>
              </Text>
            ) : (
              ``
            )}
          </DrawerBody>
          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Annuler
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </React.Fragment>
  );
};
export default GeneralPatientsInformation;
