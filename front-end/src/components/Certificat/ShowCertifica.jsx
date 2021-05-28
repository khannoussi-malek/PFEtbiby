import InputSunEditor from "./../formInput/SunEditorInput";
import { Formiz, useForm } from "@formiz/core";

import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
} from "@chakra-ui/modal";
import { useRef, useState, useEffect } from "react";
import { Button } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/react";
const ShowCertifica = (props) => {
  const { structure, patientId } = props;

  const editorRef = useRef();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();
  const btnRef = useRef();
  const MyForm = useForm();
  const handleSubmit = (values) => {};
  useEffect(() => {
    !!!!editorRef.current && editorRef.current.editor.setContents(structure);
  });
  return (
    <>
      <Button onClick={onOpen}>Certificat</Button>
      <AlertDialog
        motionPreset="slideInBottom"
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogOverlay />

        <AlertDialogContent minW={{ md: "700px", lg: "90vw" }}>
          <AlertDialogHeader>Certificat</AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogBody>
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
          </AlertDialogBody>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};
export default ShowCertifica;
