import InputSunEditor from "./../formInput/SunEditorInput";
import { Formiz, useForm } from "@formiz/core";
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/modal";
import { useRef, useState, useEffect } from "react";
import { Button } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/react";
const ShowCertifica = (props) => {
  const { structure, patientId } = props;

  const editorRef = useRef();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const MyForm = useForm();
  const handleSubmit = (values) => {};
  useEffect(() => {
    !!!!editorRef.current && editorRef.current.editor.setContents(structure);
    console.log(!!editorRef.current);
  });
  return (
    <>
      <Button ref={btnRef} m={1} onClick={onOpen}>
        ouvrir
      </Button>
      <Drawer
        size="xl"
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Historique patient</DrawerHeader>

            <DrawerBody>
              <Formiz connect={MyForm} onValidSubmit={handleSubmit}>
                <form noValidate onSubmit={MyForm.submit}>
                  <InputSunEditor
                    Patient={{ id: patientId }}
                    disabled={true}
                    editorRef={editorRef}
                    name="certif"
                  />
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
    </>
  );
};
export default ShowCertifica;
