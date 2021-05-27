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
import { Tooltip } from "@chakra-ui/tooltip";

const Alert = (props) => {
  const {
    hoverMassage,
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
      <Tooltip
        label={!!hoverMassage && hoverMassage}
        aria-label={!!hoverMassage && hoverMassage}
      >
        <IconButton
          size="sm"
          m={1}
          bg={bg}
          colorScheme={colorScheme}
          // fontSize="10px"
          icon={icon}
          onClick={() => setIsOpen(true)}
        />
      </Tooltip>
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
              <Button ref={cancelRef} onClick={onClose} colorScheme="green">
                {btNon}
              </Button>

              <Button
                colorScheme="green"
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
