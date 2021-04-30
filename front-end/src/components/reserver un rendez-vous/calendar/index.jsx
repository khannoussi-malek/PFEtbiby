import { useUpdateReservation } from "../../../services/api/reservation";
import { useToast, Button } from "@chakra-ui/react";
import React, { useState, useContext } from "react";
import { Box, Spacer, Flex } from "@chakra-ui/layout";
import { Spinner } from "@chakra-ui/react";
import { useBreakpointValue } from "@chakra-ui/media-query";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import {
  useDeleteReservation,
  useListReservationEnLigne,
} from "./../../../services/api/reservation";
import { useDisclosure } from "@chakra-ui/hooks";
import BookingFormReserve from "./bookingForm/index";
import CalendarReservePara from "./../calendar";
import { TbibyContext } from "./../../../router/context/index";
const CalendarReserve = (props) => {
  const { user } = useContext(TbibyContext);

  const { data } = props;
  const params = { medecin_id: data.id, patient_id: user.id };
  const toast = useToast();
  const [task, setTask] = useState([{ start: "2021-03-22T00:00" }]);
  const [date, setDate] = useState(new Date());
  const isMobile = useBreakpointValue({ base: true, lg: false });
  const [daysView, setDaysView] = useState(1);
  const [end, setend] = useState("");
  const [currentDateStart, setCurrentDateStart] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();

  const { isLoading, refetch: refetchTask } = useListReservationEnLigne({
    params,
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
      // console.log(res.data.data);
      for (let i in res.data) {
        res.data[i].start = res.data[i].start.replace(" ", "T").slice(0, -3);
      }
      setTask(res.data);
    },
  });
  const addDays = (date, days) => {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    setDate(result);
  };
  const {
    mutate: DeleteMutate,
    isLoading: DeleteIsLoading,
  } = useDeleteReservation({
    onError: (error) => {
      // setMessage("Vérifier l'information qui vous inseri ou votre liste");
    },
    onSuccess: (res) => {
      refetchTask();
    },
  });

  const { mutate, isLoading: isLoadingUpdate } = useUpdateReservation({
    onError: (error) => {
      // setMessage("Vérifier l'information qui vous inseri ou votre liste");
    },
    onSuccess: (res) => {
      refetchTask();
    },
  });
  const updateTask = (element) => {
    mutate({
      id: element.draggableId,
      date_reservation:
        element.destination.droppableId.replace("T", " ") + ":00",
    });
  };

  const addtask = (event, start, end) => {
    event.stopPropagation();
    setend(end);
    setCurrentDateStart(start);
    onOpen();
  };
  return (
    <Box>
      <Spinner
        display={!isLoadingUpdate && !DeleteIsLoading ? `none` : ``}
        size="xl"
        m="auto"
        color="red.500"
      />
      <Box display={isLoadingUpdate || DeleteIsLoading ? `none` : ``}>
        <Flex py={2}>
          <Button ml={2} onClick={() => addDays(date, daysView * -1)}>
            <ArrowLeftIcon />
          </Button>
          <Spacer />
          {!isMobile ? (
            <Button mx={2} onClick={() => setDaysView(1)}>
              Par jour
            </Button>
          ) : (
            ``
          )}

          <Button mx={2} onClick={() => setDate(new Date())}>
            Aujourd'hui
          </Button>
          {!isMobile ? (
            <Button mx={2} onClick={() => setDaysView(7)}>
              Par semaine
            </Button>
          ) : (
            ``
          )}
          <Spacer />
          <Button mr={2} onClick={() => addDays(date, daysView)}>
            <ArrowRightIcon />
          </Button>
        </Flex>
      </Box>

      <CalendarReservePara
        usertype={"reservie"}
        DeleteMutate={DeleteMutate}
        task={task}
        setTask={setTask}
        date={date}
        rowNumber={daysView}
        updateTask={updateTask}
        addtask={addtask}
      />

      <BookingFormReserve
        data={data}
        currentDateStart={currentDateStart}
        cancelRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        refetchTask={refetchTask}
        medecin_id={data.id}
        setTask={setTask}
        end={end}
      />
    </Box>
  );
};
export default CalendarReserve;
