import React, { useRef } from "react";
import { MyField } from "./../../../../MyField";
import { Formiz } from "@formiz/core";
import { useForm } from "@formiz/core";
import { useDisclosure } from "@chakra-ui/hooks";
import { isPattern } from "@formiz/validations";
import {
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  useColorModeValue as mode,
  useToast,
  DrawerCloseButton,
  DrawerFooter,
  Box,
} from "@chakra-ui/react";
import { useAddSousDomaine } from "../../../../services/api/domaine";
const SousDomaine = (props) => {
  const { mutateSousD, domaine } = props;
  const toast = useToast();
  const { mutate, isLoading } = useAddSousDomaine({
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
      toast({
        title: "Sous domaine ajouté avec succès",
        description: "Vous pouvez le choisir à partir de la liste",
        status: "success",
        duration: `4000`,
        isClosable: true,
      });
      mutateSousD({ domaine_id: domaine });

      onClose();
    },
  });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const myForm = useForm();
  const { values } = myForm;
  const SubmitAPI = (values) => {
    values.domaine_id = domaine;
    mutate(values);
  };
  return (
    <React.Fragment>
      <Button
        mx={2}
        position="relative"
        top="31px"
        // bg={mode("blue.400", "blue.800")}
        ref={btnRef}
        colorScheme={mode("green", "teal")}
        onClick={onOpen}
      >
        Ajouter
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Ajout Sous-domaine</DrawerHeader>
            <DrawerBody>
              <Formiz connect={myForm} onValidSubmit={SubmitAPI}>
                <form
                  noValidate
                  onSubmit={myForm.submit}
                  multiple
                  // encType="multipart/form-data"
                >
                  <MyField
                    name="nom"
                    label="Sous Domaine"
                    required="Il est requis de compléter le champ correspondant au sous-domaine"
                    validations={[
                      {
                        rule: isPattern("^[a-zA-Z ]*$"),
                        message: "Le nom ne contient que des lettres",
                      },
                    ]}
                  />
                  <Box m={2}>
                    <Button variant="outline" mr={3} onClick={onClose}>
                      Annuler
                    </Button>
                    <Button
                      w="40%"
                      type="submit"
                      borderColor="green.500"
                      disabled={!myForm.isValid}
                    >
                      Enregister
                      {!myForm.isValid ? `` : `👌`}
                    </Button>
                  </Box>
                </form>
              </Formiz>
            </DrawerBody>
            <DrawerFooter>
              <Button variant="outline" mr={3} onClick={onClose}>
                Annuler
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </React.Fragment>
  );
};
export default SousDomaine;
