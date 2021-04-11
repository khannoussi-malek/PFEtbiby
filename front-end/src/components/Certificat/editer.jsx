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
import React, { useState, useRef } from "react";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css"; // Import Sun Editor's CSS File
import AddElement from "./AddElement";
import "./editer.css";
import { useDisclosure } from "@chakra-ui/hooks";
import { useForm, Formiz } from "@formiz/core";
import { Box } from "@chakra-ui/layout";
import { MyField } from "../formInput";
import { useAddCertificatType } from "./../../services/api/certificat/index";
import { useToast, Spinner } from "@chakra-ui/react";
const EditerCertificat = (props) => {
  const toast = useToast();
  const { mutate, isLoading } = useAddCertificatType({
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
    },
  });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const editorRef = useRef();
  //   useEffect(() => {
  //     // Get underlining core object here
  //     // Notice that useEffect is been used because you have to make sure the editor is rendered.
  //     console.log(editorRef.current.editor.core);
  //   }, []);
  const handleChange = (content) => {
    setEditerValue(content); //Get Content Inside Editor
  };

  const MyForm = useForm();
  const handleSubmit = (values) => {
    values.structure = editerValue;
    mutate(values);
  };
  const [editerValue, setEditerValue] = useState("");
  return (
    <React.Fragment>
      <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
        Ajouter un certificat
      </Button>

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        size="full"
        finalFocusRef={btnRef}
      >
        <DrawerOverlay>
          <DrawerContent bgColor="gray.50">
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
                    <Box mb={5}>
                      <MyField
                        name="type"
                        label="nom de certif"
                        required="walah"
                      />
                    </Box>

                    <SunEditor
                      ref={editorRef}
                      lang="fr"
                      name="my-editor"
                      height="auto"
                      placeholder="S'il vous plaît écrivez votre structure de certificat ici..."
                      showToolbar={true}
                      values={editerValue}
                      onChange={handleChange}
                      setOptions={{
                        plugins: [AddElement],
                        buttonList: [
                          [
                            "font",
                            "fontSize",
                            "align",
                            "fontColor",
                            "hiliteColor",
                            "paragraphStyle",
                            "list",
                            "blockquote",
                            "lineHeight",
                            "horizontalRule",
                            "formatBlock",
                            {
                              name: "Element",
                              dataCommand: "Element",
                              buttonClass: "",
                              title: "Element",
                              dataDisplay: "submenu",
                              innerHTML:
                                '<div style="width: 70px;">Element</div>',
                            },
                          ],
                        ],
                      }}
                    />
                    <Box p={2} borderLeft="1px" my={2}>
                      Il s'agit d'un élément de type de certification .Utilisez
                      un élément pour écrire la valeur de changement comme le
                      nom de votre patiente ou votre âge ou quelque chose comme
                      ça
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
export default EditerCertificat;
