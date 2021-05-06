import { Button } from "@chakra-ui/button";
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/modal";
import React, { useState, useRef, useEffect } from "react";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css"; // Import Sun Editor's CSS File
import AddElement from "./AddElement";
import "./editer.css";
import { useDisclosure } from "@chakra-ui/hooks";
import { useForm, Formiz } from "@formiz/core";
import { Box } from "@chakra-ui/layout";
import { MyField } from "../formInput";
import { useUpdateCertificatType } from "./../../services/api/certificat/index";
import { useToast, Spinner, useColorModeValue as mode } from "@chakra-ui/react";
import { BiAnalyse } from "react-icons/bi";
import { useBreakpointValue } from "@chakra-ui/media-query";
const CertificatUpdate = (props) => {
  const isMobile = useBreakpointValue({ base: true, lg: false });

  const { refetch, data, type, id, cms_users_id } = props;
  const toast = useToast();
  const { mutate, isLoading } = useUpdateCertificatType({
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
  const [editerValue, setEditerValue] = useState(data);
  useEffect(() => {
    setEditerValue(data);
  }, [data]);
  const btnRef = React.useRef();
  const editorRef = useRef();
  const handleChange = (content) => {
    setEditerValue(content); //Get Content Inside Editor
  };

  const MyForm = useForm();
  const handleSubmit = (values) => {
    values.structure = editerValue;
    values.id = id;
    values.type = type;
    values.cms_users_id = cms_users_id;
    mutate(values);
  };
  return (
    <React.Fragment>
      <Button
        ref={btnRef}
        colorScheme={mode("teal", "gray.50")}
        bgColor={mode("teal", "gray.50")}
        onClick={onOpen}
      >
        {isMobile ? (
          <BiAnalyse fontSize="20px" />
        ) : (
          `Mettre à jour un certificat`
        )}
      </Button>

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        size="full"
        finalFocusRef={btnRef}
      >
        <DrawerOverlay>
          <DrawerContent bgColor={mode("gray.50", "gray.700")}>
            <DrawerCloseButton />
            <DrawerHeader>Créez votre type de certificat</DrawerHeader>
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
                    <SunEditor
                      ref={editorRef}
                      lang="fr"
                      name="my-editor"
                      height="auto"
                      placeholder="S'il vous plaît écrivez votre structure de certificat ici..."
                      showToolbar={true}
                      setContents={editerValue}
                      values={editerValue}
                      onChange={handleChange}
                      setOptions={{
                        plugins: [AddElement],
                        buttonList: [
                          ["undo", "redo"],
                          [
                            "font",
                            "fontSize",
                            "formatBlock",
                            ":p-More Paragraph-default.more_paragraph",
                          ],
                          ["paragraphStyle", "blockquote"],
                          [
                            "bold",
                            "underline",
                            "italic",
                            "strike",
                            "subscript",
                            "superscript",
                          ],
                          ["fontColor", "hiliteColor", "textStyle"],
                          ["removeFormat"],
                          ["image"],
                          ["align", "horizontalRule", "list", "lineHeight"],
                          [
                            {
                              name: "Element",
                              dataCommand: "Element",
                              buttonClass: "",
                              title: "Element",
                              dataDisplay: "submenu",
                              innerHTML:
                                '<div style="width: 70px;">Modèle</div>',
                            },
                          ],
                          ["fullScreen"],
                        ],
                      }}
                    />
                    <Box p={2} borderLeft="1px" my={2}>
                      Utiliser le boutton 'modèle' pour créer vos propres
                      certificats . Exemple : si vou ajoutez 'patientNomPrénom'
                      , lors de votre consulation le nom de votre patient sera
                      ajouté automatiquement en utilisant votre certificat
                      modélisée.
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
export default CertificatUpdate;
