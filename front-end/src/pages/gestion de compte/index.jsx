import React, { useContext, useState } from "react";
import {
  isNumber,
  isLength,
  isEmail,
  isPattern,
  isMinLength,
} from "@formiz/validations";
import {
  Box,
  Radio,
  Stack,
  RadioGroup,
  FormControl,
  Button,
  Spinner,
  Center,
  Image,
  useColorModeValue as mode,
  VStack,
  Avatar,
  HStack,
  useColorModeValue,
  Text,
  Divider,
  useToast,
} from "@chakra-ui/react";
import { HiCloudUpload } from "react-icons/hi";
import { InputDate } from "./../../components/formInput/date";

import { MyField } from "./../../components/formInput";
import { MyFieldPassword } from "./../../components/formInput/password";
import { Formiz, useForm } from "@formiz/core";
import GestiondeCopmtePatient from "./gestion compte patient";
import GestiondeCopmteMedecin from "./gestion compte medecin";
import { TbibyContext } from "./../../router/context/index";
import {
  useRemovePhoto,
  useUpdateComptePatient,
} from "./../../services/api/Update Compte/index";
//import { useUpdateCompteMedecin } from "./../../services/api/Update Compte/update_compte_medecin";
import { ImageFile } from "./../../components/formInput/image";
import { FieldGroup } from "./../../components/FieldGroup/index";
import { useGestionDeCompte } from "./../../services/api/gestion de compte/index";
import { link, userImage } from "./../../services/api/index";

const Accountmanagement = () => {
  const [pictures, setPictures] = useState({});

  const { user } = useContext(TbibyContext);
  const { mutate, isLoading } = useUpdateComptePatient({
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
      gcRefetch();
    },
  });

  const [gcInfo, setGcInfo] = useState({});
  const toast = useToast();
  const params = { id: user.id };
  const { isLoading: gcLoding, refetch: gcRefetch } = useGestionDeCompte({
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
      setGcInfo(res.data);
    },
  });
  const { mutate: RMmutate, isLoading: RMisLoading } = useRemovePhoto({
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
      gcRefetch();
    },
  });
  const [fonctionnalite, setFonctionnalite] = useState("patient");
  const [sexes, setSexes] = React.useState();
  const handleSubmit = (values) => {
    values.id = user.id;
    values.sexes = sexes;
    values.id_cms_privileges = fonctionnalite;
    values.photo = pictures;
    const data = new FormData();

    Object.keys(values).map((value, index) => {
      data.append(value, values[value]);
    });

    mutate(data);
  };

  const myForm = useForm();
  const { values } = myForm;
  return (
    <React.Fragment>
      <Spinner
        display={!isLoading ? `none` : ``}
        size="xl"
        m="auto"
        color="red.500"
      />
      <Box
        px={{ base: "4", md: "3", lg: "10" }}
        py="16"
        // maxWidth="xl"
        mx="auto"
        display={isLoading ? `none` : ``}
      >
        <Formiz connect={myForm} onValidSubmit={handleSubmit}>
          <form
            noValidate
            onSubmit={myForm.submit}
            multiple
            // encType="multipart/form-data"
          >
            <FieldGroup title="informations générales">
              <VStack width="full" spacing="6">
                <MyField
                  name="nom"
                  label="Nom"
                  // required="Il est requis de compléter le champ correspondant au nom"
                  validations={[
                    {
                      rule: isPattern("^[a-zA-Z ]*$"),
                      message: "Le nom ne contient que des lettres",
                    },
                  ]}
                  dtValue={gcInfo.nom}
                />

                <MyField
                  name="prenom"
                  label="Prenom"
                  dtValue={gcInfo.prenom}
                  // required="Il est requis de compléter le champ correspondant au prenom"
                  validations={[
                    {
                      rule: isPattern("^[a-zA-Z ]*$"),
                      message: "Le prenom ne contient que des lettres",
                    },
                  ]}
                />

                <MyField
                  name="telephone"
                  label="Telephone"
                  dtValue={gcInfo.telephone}
                  // required="Il est requis de compléter le champ correspondant au telephone"
                  validations={[
                    {
                      rule: isNumber(),
                      message:
                        "La numéro de téléphone  ne contient que des chiffres",
                    },
                    {
                      rule: isLength(8),
                      message:
                        "La numéro de téléphone doit être constituée  de 8 chiffres",
                    },
                    {
                      rule: (val) => !!val || !!values.cin || !!values.email,
                      message:
                        "La numéro de téléphone doit être constituée  de 8 chiffres",
                      deps: [values.cin, values.email],
                    },
                  ]}
                />

                <FormControl>
                  <Center>
                    <RadioGroup onChange={setSexes} value={sexes} name="sexes">
                      <Stack direction="row" size="lg">
                        <Radio value="homme" py={3} px={10}>
                          Homme 👨‍🦰
                        </Radio>
                        <Radio value="femme" py={3} px={10}>
                          Femme 👩‍🦰
                        </Radio>
                      </Stack>
                    </RadioGroup>
                  </Center>
                </FormControl>

                <InputDate
                  name="date_naissance"
                  label="Date de naissance"
                  dValue={gcInfo.date_naissance}
                  //required="Il est requis de compléter le champ correspondant au date_naissance"
                />

                <MyField
                  name="cin"
                  label="C.I.N"
                  dtValue={gcInfo.cin}
                  validations={[
                    {
                      rule: isNumber(),
                      message:
                        "La carte d'identité ne contient que des chiffres",
                    },
                    {
                      rule: isLength(8),
                      message:
                        "La carte d'identité doit être constituée  de 8 chiffres",
                    },
                    {
                      rule: (val) =>
                        !!val || !!values.email || !!values.telephone,
                      message:
                        "La carte d'identité doit être constituée  de 8 chiffres",
                      deps: [values.email, values.telephone],
                    },
                  ]}
                />
                <MyField
                  name="email"
                  label="Email"
                  dtValue={gcInfo.email}
                  // required="Il est requis de compléter le champ correspondant au mail"
                  validations={[
                    {
                      rule: isEmail(),
                      message:
                        "Veuillez vérifier le format de l'e-mail(doit contenir @ et .)",
                    },
                    {
                      rule: (val) =>
                        !!val || !!values.cin || !!values.telephone,
                      message: "Le champ email doit contenir @ et .",
                      deps: [values.cin, values.telephone],
                    },
                  ]}
                />

                <MyFieldPassword
                  name="password"
                  label="Mot de passe"
                  // required="Il est requis de compléter le champ correspondant au mot-de-passe"
                  type="password"
                  validations={[
                    {
                      rule: isMinLength(6),
                      message:
                        "Le mot de passe doit contenir au moins 6 caractères",
                    },
                  ]}
                />
              </VStack>
            </FieldGroup>
            <Divider />
            <FieldGroup title="Profile Photo">
              <Stack direction="row" spacing="6" align="center" width="full">
                <Avatar
                  size="xl"
                  name={gcInfo.nom + " " + gcInfo.prenom}
                  src={
                    !!gcInfo.photo
                      ? `${link}${gcInfo.photo}`
                      : `${link}${userImage}`
                  }
                />
                <Box>
                  <HStack spacing="5">
                    <ImageFile
                      pictures={pictures}
                      setPictures={setPictures}
                      name="photo"
                      label="photo"
                    />
                    <Button
                      display={!!gcInfo.photo ? `block` : `none`}
                      variant="ghost"
                      colorScheme="red"
                      onClick={() => {
                        RMmutate({ id: user.id });
                      }}
                    >
                      Effacer
                    </Button>
                  </HStack>
                  <Text
                    fontSize="sm"
                    mt="3"
                    color={useColorModeValue("gray.500", "whiteAlpha.600")}
                  >
                    .jpg, .gif, or .png.
                  </Text>
                </Box>
              </Stack>
            </FieldGroup>
            <Divider />

            {user.fonctionnalite == "patient" ? (
              <GestiondeCopmtePatient gcInfo={gcInfo} />
            ) : (
              ``
            )}
            {user.fonctionnalite == "medecin" ? <GestiondeCopmteMedecin /> : ``}
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
          </form>
        </Formiz>
      </Box>
    </React.Fragment>
  );
};
export default Accountmanagement;
