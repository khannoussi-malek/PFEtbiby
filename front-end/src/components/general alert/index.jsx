import { useState, useRef } from "react";
import { Button, IconButton } from "@chakra-ui/button";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
} from "@chakra-ui/react";
const G_Alert = (props) => {
  const {
    target,
    fnTodo,
    Header,
    Body,
    icon,
    colorScheme,
    bg,
    btOK,
    btNon,
    submitcolor,
  } = props;
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);
  const cancelRef = useRef();
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
                colorScheme={colorScheme}
                onClick={() => {
                  fnTodo(target);
                  onClose();
                }}
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
export default G_Alert;
