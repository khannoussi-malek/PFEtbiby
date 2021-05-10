import React, { useContext } from "react";
import { Spinner } from "@chakra-ui/react";

import { Box, Spacer, Flex } from "@chakra-ui/layout";
import Calendar from "./../../components/calendar/index";
import { useState } from "react";
import { Button } from "@chakra-ui/button";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { useBreakpointValue } from "@chakra-ui/media-query";

import { useToast } from "@chakra-ui/react";
import { TbibyContext } from "../../router/context/index";
import {
  useListReservation,
  useDeleteReservation,
} from "../../services/api/reservation";

const CalendarDashboardPatient = () => {
  const toast = useToast();
  const { user } = useContext(TbibyContext);
  const [task, setTask] = useState([]);

  const params = { patient_id: user.id };
  const {
    mutate: DeleteMutate,
    isLoading: DeleteIsLoading,
  } = useDeleteReservation({
    onError: (error) => {
      // setMessage("Vérifier l'information qui vous inseri ou votre liste");
    },
    onSuccess: (res) => {
      refetchTask();
      console.log("refetch");
    },
  });

  const { isLoading, refetch: refetchTask } = useListReservation({
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
      for (let i in res.data) {
        res.data[i].start = res.data[i].start.replace(" ", "T").slice(0, -3);
      }
      setTask(res.data);
    },
  });
  const [end, setend] = useState("");

  const addtask = (event, start, end) => {};
  const updateTask = (element) => {
    toast({
      title: "Vous ne pouvez pas changer votre réservation",
      description: " Vous devez appelez votre médecin pour le faire",
      status: "success",
      duration: `4000`,
      isClosable: true,
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
        display={!DeleteIsLoading ? `none` : ``}
        size="xl"
        m="auto"
        color="red.500"
      />
      <Box display={DeleteIsLoading ? `none` : ``}>
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
            <Button mx={2} onClick={() => setDaysView(2)}>
              Par 2 jour
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
      <Calendar
        usertype={user.fonctionnalite}
        DeleteMutate={DeleteMutate}
        task={task}
        setTask={setTask}
        date={date}
        rowNumber={daysView}
        updateTask={updateTask}
        addtask={addtask}
      />
    </Box>
  );
};

export default CalendarDashboardPatient;
