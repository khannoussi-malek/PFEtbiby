import { Box } from "@chakra-ui/layout";
import { Draggable } from "react-beautiful-dnd";
import { BsBoxArrowInRight } from "react-icons/bs";
import Alert from "./alert";
import {
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
} from "@chakra-ui/popover";
import { useColorModeValue as mode } from "@chakra-ui/react";

import { useState, useRef } from "react";
import { CloseIcon } from "@chakra-ui/icons";

const Task = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);
  const cancelRef = useRef();
  const [isOpenRemove, setIsOpenRemove] = useState(false);
  const onCloseRemove = () => setIsOpenRemove(false);
  const cancelRefRemove = useRef();

  const { taskvalue, task, setTask, DeleteMutate, EnteredMutate, usertype } =
    props;

  const Entered = (event) => {
    event.stopPropagation();
    EnteredMutate({ id: taskvalue.id });
    onClose();
  };
  const remove = (event) => {
    event.stopPropagation();
    DeleteMutate({ id: taskvalue.id });
    onClose();
  };
  const detail = (event) => {
    event.stopPropagation();
  };
  const getItemStyle = (isDragging, draggableStyle) => ({
    ...draggableStyle,
    userSelect: "none",
    padding: 3,
    margin: `0 0 0px 0`,
  });
  return (
    <Draggable
      key={taskvalue.id}
      draggableId={taskvalue.id.toString()}
      index={taskvalue.id}
    >
      {(provided, snapshot) => (
        <Popover>
          <PopoverTrigger>
            <Box
              onClick={(event) => detail(event)}
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              style={
                ("none",
                getItemStyle(
                  snapshot.isDragging,
                  provided.draggableProps.style
                ))
              }
              border="2px"
              borderRadius="20px"
              bgColor={snapshot.isDragging ? `#3b8a5b` : `#b3e6c8`}
              borderColor="green.200"
              mx={3}
              px={2}
              children={
                <Box color="gray.800" fontSize="17px">
                  <Alert
                    hoverMassage="Supprimer ce réservatitien"
                    Header="Supprimer la réservation"
                    Body={`Voulez-vous vraiment supprimer cette réservation avec ${taskvalue.nomprenom}`}
                    icon={<CloseIcon />}
                    colorScheme="teal"
                    bg="red.300"
                    fnTodo={remove}
                    btOK="Effacer"
                    btNon="Annuler"
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                    onClose={onClose}
                    cancelRef={cancelRef}
                  />
                  {taskvalue.nomprenom}
                  {
                    usertype == "medecin" ? (
                      <Alert
                        hoverMassage="Envoyer ce patient au médecin"
                        Header="Confirmer"
                        Body={`Voulez-vous confirmer que ${taskvalue.nomprenom} débutera sa consultation ? `}
                        icon={<BsBoxArrowInRight w={4} h={4} />}
                        bg="blue.300"
                        btOK="oui"
                        btNon="Non"
                        fnTodo={Entered}
                        isOpen={isOpenRemove}
                        setIsOpen={setIsOpenRemove}
                        onClose={onCloseRemove}
                        cancelRef={cancelRefRemove}
                      />
                    ) : (
                      ``
                    )
                    // (
                    //   <Alert
                    //     Header="Supprimer la réservation"
                    //     Body={`Voulez-vous vraiment supprimer cette réservation avec ${taskvalue.nomprenom}`}
                    //     icon={<CloseIcon />}
                    //     fnTodo={remove}
                    //     isOpen={isOpen}
                    //     setIsOpen={setIsOpen}
                    //     onClose={onClose}
                    //     cancelRef={cancelRef}
                    //   />
                    // )
                  }
                </Box>
              }
            />
          </PopoverTrigger>
          <PopoverContent bg={mode("green.50", "gray.800")}>
            <PopoverHeader fontWeight="semibold">
              {taskvalue.nomprenom}
            </PopoverHeader>
            <PopoverBody>
              Votre rendez-vous est le {taskvalue.start.slice(0, 10) + " "}à
              {" " + taskvalue.start.slice(11, 19)}
            </PopoverBody>
          </PopoverContent>
        </Popover>
      )}
    </Draggable>
  );
};
export default Task;
