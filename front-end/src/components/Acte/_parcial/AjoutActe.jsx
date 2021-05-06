import React, { useRef, useState } from "react";
import { Box } from "@chakra-ui/layout";
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/modal";
import { Button, useToast, useColorModeValue as mode } from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/react";
import { Formiz, useForm } from "@formiz/core";
import { useDisclosure } from "@chakra-ui/hooks";
import { Prix } from "../../formInput/Prix";
import { useCreateActe } from "./../../../services/api/acte/index";
import { MyField } from "./../../formInput/index";

const AjoutActe = (props) => {
  const { user, refetch } = props;
  const toast = useToast();
  const { mutate, isLoading } = useCreateActe({
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
      if (refetch != undefined) {
        refetch();
      }
    },
  });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const MyForm = useForm();
  const handleSubmit = (values) => {
    mutate(values);
  };
  const [editerValue, setEditerValue] = useState("");
  return (
    <React.Fragment>
      <Button
        ref={btnRef}
        colorScheme={mode("teal", "gray.50")}
        bgColor={mode("teal", "gray.50")}
        onClick={onOpen}
      >
        Ajouter un acte
      </Button>

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        size="md"
        finalFocusRef={btnRef}
      >
        <DrawerOverlay>
          <DrawerContent bgColor={mode("gray.50", "gray.700")}>
            <DrawerCloseButton />
            <DrawerHeader>Définit votre acte</DrawerHeader>
            <DrawerBody>
              <Spinner
                display={!isLoading ? `none` : `block`}
                size="xl"
                m="auto"
                color="red.500"
              />
              <Box display={isLoading ? `none` : `block`}>
                <Formiz connect={MyForm} onValidSubmit={handleSubmit}>
                  <form noValidate onSubmit={MyForm.submit}>
                    <Box mb={5}>
                      <MyField
                        name="code"
                        label="Code"
                        required="vous devez saisir le nom de la certification"
                      />
                      <MyField
                        name="designation"
                        label="Designation"
                        required="vous devez saisir le nom de la certification"
                      />
                      <Prix
                        name="price"
                        label="Price"
                        required="vous devez saisir le nom de la certification"
                      />
                    </Box>

                    <Box py={3}>
                      <Button colorScheme="blue" type="submit">
                        Sauvegarder {!MyForm.isValid ? `` : `👌`}
                      </Button>
                    </Box>
                  </form>
                </Formiz>
              </Box>
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
export default AjoutActe;
