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
import { useAddDomaine } from "../../../../services/api/domaine";

const AddDomaine = (props) => {
  const { refetch } = props;
  const toast = useToast();

  const { mutate, isLoading } = useAddDomaine({
    onError: (error) => {
      // setMessage("Vérifier l'information qui vous inseri ou votre liste");
    },
    onSuccess: (res) => {
      onClose();
      toast({
        title: "Type de certification ajouté avec succès",
        description:
          "Vous pouvez le sélectionner nouveau à partir de 'Type de certificat'",
        status: "success",
        duration: `4000`,
        isClosable: true,
      });
      refetch();
    },
  });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const myForm = useForm();
  const { values } = myForm;
  const SubmitAPI = (values) => {
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
            <DrawerHeader>Create your account</DrawerHeader>
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
                    label="Domaine"
                    required="Il est requis de compléter le champ correspondant au domaine"
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
                      Submit
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
export default AddDomaine;
