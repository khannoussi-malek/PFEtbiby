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
import { MyField } from "./../../formInput";
import { useUpdateActe } from "../../../services/api/acte";
import { useBreakpointValue } from "@chakra-ui/media-query";
import { BiSync } from "react-icons/bi";

const UpdateAct = (props) => {
  const { data, refetch } = props;
  const isMobile = useBreakpointValue({ base: true, lg: false });

  const toast = useToast();
  const { mutate, isLoading } = useUpdateActe({
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
    values.id = data.id;
    mutate(values);
  };
  return (
    <React.Fragment>
      <Button
        ref={btnRef}
        colorScheme={mode("green", "gray")}
        // bgColor={mode("teal", "gray.50")}
        onClick={onOpen}
      >
        {isMobile ? <BiSync fontSize="30px" /> : `Mettre à jour`}
      </Button>

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        size="md"
        finalFocusRef={btnRef}
      >
        <DrawerOverlay>
          <DrawerContent
          //  bgColor={mode("green.50", "gray.700")}
          >
            <DrawerCloseButton />
            <DrawerHeader>Mettre à jour votre acte</DrawerHeader>
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
                        dtValue={data.code}
                        required="Il est requis de compléter ce champ"
                      />
                      <MyField
                        name="designation"
                        dtValue={data.designation}
                        label="Designation"
                        required="Il est requis de compléter ce champ"
                      />
                      <Prix
                        dtValue={data.price}
                        name="price"
                        label="Prix"
                        required="Il est requis de compléter ce champ"
                      />
                    </Box>

                    <Box py={3}>
                      <Button colorScheme="green" type="submit">
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
export default UpdateAct;
