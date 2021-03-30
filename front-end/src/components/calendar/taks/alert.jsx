import { Button, IconButton } from "@chakra-ui/button";
import React from "react";

import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
} from "@chakra-ui/modal";

const Alert = (props) => {
  const {
    target,
    isOpen,
    setIsOpen,
    cancelRef,
    onClose,
    fnTodo,
    Header,
    Body,
    icon,
    colorScheme,
    bg,
    btOK,
    btNon,
  } = props;

  return (
    <>
      <IconButton
        size="xs"
        m={1}
        bg={bg}
        colorScheme={colorScheme}
        fontSize="10px"
        icon={icon}
        onClick={() => setIsOpen(true)}
      />

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              {Header}
            </AlertDialogHeader>

            <AlertDialogBody>{Body}</AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                {btNon}
              </Button>

              <Button
                colorScheme="red"
                onClick={(event) => fnTodo(event, target)}
                ml={3}
              >
                {btOK}
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};
export default Alert;
