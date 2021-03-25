import React, { useContext } from "react";
import { Spinner } from "@chakra-ui/react";

import { Box, Spacer, Flex } from "@chakra-ui/layout";
import Calandre from "./../../components/calandre/index";
import { useState } from "react";
import { Button } from "@chakra-ui/button";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { useBreakpointValue } from "@chakra-ui/media-query";
import { useDisclosure } from "@chakra-ui/hooks";

import BookingForm from "./bookingForm";
import { useListPatientDashboardAPI } from "./../../services/api/listPatientDashboard/inde";
import { useToast } from "@chakra-ui/react";
import { TbibyContext } from "./../../router/context/index";
import {
  useReservationMListe,
  useUpdateReservation,
} from "../../services/api/create reservation";

const CalandreDashboard = () => {
  //config

  //calander function
  const toast = useToast();

  const { user } = useContext(TbibyContext);

  const [task, setTask] = useState([{ start: "2021-03-22T00:00" }]);
  const params = { medecin_id: user.id };
  const { mutate, isLoading: isLoadingUpdate } = useUpdateReservation({
    onError: (error) => {
      // setMessage("Vérifier l'information qui vous inseri ou votre liste");
    },
    onSuccess: (res) => {
      refetchTask();
    },
  });
  const { isLoading, refetch: refetchTask } = useReservationMListe({
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
  const [currentDateStart, setCurrentDateStart] = useState("");
  const cancelRef = React.useRef();
  const [end, setend] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [listPatient, setListPatient] = useState([]);
  const {
    isLoading: ListPatientDashboardAPIIsLoading,
    refetch: ListPatientDashboardAPIRefetch,
  } = useListPatientDashboardAPI({
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
      setListPatient(res.data);
    },
  });
  const addtask = (event, start, end) => {
    event.stopPropagation();
    setend(end);
    setCurrentDateStart(start);
    onOpen();
  };
  const updateTask = (element) => {
    mutate({
      id: element.draggableId,
      date_reservation:
        element.destination.droppableId.replace("T", " ") + ":00",
    });
  };

  //view
  const [daysView, setDaysView] = useState(1);
  const [date, setDate] = useState(new Date());
  const isMobile = useBreakpointValue({ base: true, lg: false });
  const addDays = (date, days) => {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    setDate(result);
  };

  return (
    <Box>
      <Spinner
        display={!isLoadingUpdate ? `none` : ``}
        size="xl"
        m="auto"
        color="red.500"
      />
      <Box display={isLoadingUpdate ? `none` : ``}>
        <Flex>
          <Button ml={2} onClick={() => addDays(date, daysView * -1)}>
            <ArrowLeftIcon />
          </Button>
          <Spacer />
          <Button mx={2} onClick={() => setDaysView(1)}>
            Par jour
          </Button>
          {!isMobile ? (
            <Button mx={2} onClick={() => setDate(new Date())}>
              Ajourdhui
            </Button>
          ) : (
            ``
          )}
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
      <Calandre
        task={task}
        setTask={setTask}
        date={date}
        rowNumber={daysView}
        updateTask={updateTask}
        addtask={addtask}
      />

      <BookingForm
        ListPatientDashboardAPIRefetch={ListPatientDashboardAPIRefetch}
        listPatient={listPatient}
        currentDateStart={currentDateStart}
        cancelRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        refetchTask={refetchTask}
        medecin_id={user.id}
        setTask={setTask}
        end={end}
      />
    </Box>
  );
};

export default CalandreDashboard;
