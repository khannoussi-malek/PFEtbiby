import React from "react";
import { Button } from "@chakra-ui/button";
import { Box, Center, Grid, GridItem } from "@chakra-ui/layout";
import { useState } from "react";
import TimeElement from "./timeElement";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
} from "@chakra-ui/modal";
import { useDisclosure } from "@chakra-ui/hooks";
import { DragDropContext } from "react-beautiful-dnd";
function Calandre(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  const [currentDateStart, setCurrentDateStart] = useState("");
  const [start, setstartt] = useState("");
  const [end, setend] = useState("");
  const { rowNumber } = props;
  const Hours = [
    // "00:00",
    // "01:00",
    // "02:00",
    // "03:00",
    // "04:00",
    // "05:00",
    // "06:00",
    "07:00",
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    // "19:00",
    // "20:00",
    // "21:00",
    // "22:00",
    // "23:00",
  ];
  const addtaks = (event, start, end) => {
    event.stopPropagation();
    setstartt(start);
    setend(end);
    setId(id + 1);
    setCurrentDateStart(start);
    onOpen();
  };
  const restOfConfirmation = (start, end) => {
    setTask((task) => [
      ...task,
      { id, start, end, nom: "khannoussi", prenom: "malek" },
    ]);
    onClose();
  };
  //to get format yyy-mm-ddThh:mm:ss
  // .toISOString().slice(0, 19)

  const [date] = useState(new Date());
  const [task, setTask] = useState([{ start: "2021-03-22T00:00" }]);
  const [id, setId] = useState(0);

  const moveTask = (element) => {
    let toThis = element.destination.droppableId;
    let taksid = element.draggableId;
    let index = task.indexOf(task.find((element) => element.id == taksid));
    task[index].start = toThis;
    setTask([...task]);
  };
  const addToDOM = () => {
    // task.forEach((element) => console.log(element));
  };
  const addDays = (date, days) => {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  };

  const headerDates = [];
  //make header
  for (let i = 0; i < rowNumber; i++) {
    i === 0
      ? headerDates.push(date)
      : headerDates.push(addDays(headerDates[headerDates.length - 1], 1));
  }

  const contenu = [];
  for (const [index, value] of headerDates.entries()) {
    contenu.push(
      <Box>
        <Center
          w="100%"
          key={index}
          border="1px"
          borderColor="gray.200"
          bgColor="gray.300"
          h={10}
          align="center"
        >
          {value.toISOString().slice(0, 10)}
        </Center>
        {Hours.map((HoursValue) => (
          <TimeElement
            HoursValue={HoursValue}
            value={value}
            addtaks={addtaks}
            task={task}
            setTask={setTask}
          />
        ))}
      </Box>
    );
  }
  return (
    <Box>
      <Grid templateColumns="repeat(10, 1fr)" gap={0}>
        <GridItem colSpan={1}>
          <Box w="100%" bgColor="gray.300">
            <Center h={10} align="center"></Center>
            {Hours.map((value) => (
              <Center
                border="1px"
                borderColor="gray.400"
                bgColor="gray.300"
                h="160px"
                key={value}
                fontSize="20px"
              >
                {value}
              </Center>
            ))}
          </Box>
        </GridItem>
        <GridItem colSpan={9} w="100%">
          <Grid
            w="100%"
            templateColumns={"repeat(" + parseInt(rowNumber) + ", 1fr)"}
            gap={0}
          >
            <DragDropContext onDragEnd={(result) => moveTask(result)}>
              {contenu}
            </DragDropContext>
          </Grid>
        </GridItem>
      </Grid>
      <AlertDialog
        motionPreset="slideInBottom"
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogOverlay />

        <AlertDialogContent>
          <AlertDialogHeader>Confirmer la réservation</AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogBody>
            Réservation un rendez-vous a {currentDateStart.slice(0, 10) + " "}
            en
            {" " + currentDateStart.slice(11, 19)}
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              Non
            </Button>
            <Button onClick={() => restOfConfirmation(start, end)} ml={3}>
              Oui
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </Box>
  );
}

export default Calandre;
