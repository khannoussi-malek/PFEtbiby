import React, { useContext } from "react";
import { Spinner, Tooltip } from "@chakra-ui/react";

import { Box, Spacer, Flex } from "@chakra-ui/layout";
import Calendar from "./../../components/calendar";
import { useState } from "react";
import { Button } from "@chakra-ui/button";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { useBreakpointValue } from "@chakra-ui/media-query";
import { useDisclosure } from "@chakra-ui/hooks";

import BookingForm from "./bookingForm";
import { useListPatientDashboardAPI } from "../../services/api/listPatientDashboard/inde";
import { useToast } from "@chakra-ui/react";
import { TbibyContext } from "../../router/context";
import { usePatientEntrer } from "./../../services/api/manageTheRoom";
import { useHistory } from "react-router-dom";
import ConfirmerUnRendezVous from "./../../components/confirmer un rendez vous";
import {
  useReservationMListe,
  useUpdateReservation,
  useDeleteReservation,
} from "../../services/api/reservation";
import { InputDate } from "../../components/formInput/date";
import { Formiz, useForm } from "@formiz/core";

const CalendarDashboardMedecin = () => {
  const toast = useToast();
  const history = useHistory();
  const { user } = useContext(TbibyContext);

  const [task, setTask] = useState([{ start: "2021-03-22T00:00" }]);

  const id = user.idMedecin || user.id;
  const [params, setParams] = useState({ medecin_id: id });
  const { mutate: EnteredMutate, isLoading: PatientEntrerIsLoading } =
    usePatientEntrer({
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
        refetchTask();
        if (user.fonctionnalite === "medecin") {
          history.push("/dashboard/consultation");
        }
      },
    });
  const { mutate: DeleteMutate, isLoading: DeleteIsLoading } =
    useDeleteReservation({
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
        refetchTask();
      },
    });

  const { mutate, isLoading: isLoadingUpdate } = useUpdateReservation({
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
    isLoading: listPatientDashboardAPIIsLoading,
    refetch: listPatientDashboardAPIRefetch,
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
  const isMobile = useBreakpointValue({ base: true, lg: false });
  const addDays = (date, days) => {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    setDate(result);
  };
  const [date, setDate] = useState(new Date());

  const MyForm = useForm();
  const { values } = MyForm;

  const handleSubmit = (values) => {};
  return (
    <Box>
      <Formiz connect={MyForm} onValidSubmit={handleSubmit}>
        <Spinner
          display={
            !isLoadingUpdate && !DeleteIsLoading && !PatientEntrerIsLoading
              ? `none`
              : ``
          }
          size="xl"
          m="auto"
          color="red.500"
        />
        <Box
          display={
            isLoadingUpdate || DeleteIsLoading || PatientEntrerIsLoading
              ? `none`
              : ``
          }
        >
          <Flex py={2}>
            <Button
              colorScheme="green"
              ml={2}
              onClick={() => addDays(date, daysView * -1)}
            >
              <Tooltip label="Moin un jour" aria-label="Moin un jour">
                <ArrowLeftIcon />
              </Tooltip>
            </Button>
            <Spacer />
            {!isMobile ? (
              <Tooltip
                label="Affiché en mode 1 jours"
                aria-label="Affiché en mode 1 jours"
              >
                <Button mx={2} onClick={() => setDaysView(1)}>
                  Par 1 jour
                </Button>
              </Tooltip>
            ) : (
              ``
            )}
            <Box w="120px" position="relative" top="-7px" mx={2}>
              <InputDate SyncWithVariable={setDate} name="date" />
            </Box>
            <Tooltip
              label="Aller à aujourd'hui"
              aria-label="Aller à aujourd'hui"
            >
              <Button
                mx={2}
                onClick={() => {
                  setDate(new Date());
                }}
              >
                Aujourd'hui
              </Button>
            </Tooltip>

            <ConfirmerUnRendezVous refetchDashboard={refetchTask} />
            {!isMobile ? (
              <Tooltip
                label="Affiché en mode 2 jours"
                aria-label="Affiché en mode 2 jours"
              >
                <Button mx={2} onClick={() => setDaysView(2)}>
                  Par 2 jour
                </Button>
              </Tooltip>
            ) : (
              ``
            )}
            <Spacer />
            <Button
              colorScheme="green"
              mr={2}
              onClick={() => addDays(date, daysView)}
            >
              <Tooltip label="Plus un jour" aria-label="Plus un jour">
                <ArrowRightIcon />
              </Tooltip>
            </Button>
          </Flex>
        </Box>
        <Calendar
          EnteredMutate={EnteredMutate}
          usertype={user.fonctionnalite}
          DeleteMutate={DeleteMutate}
          task={task}
          setTask={setTask}
          date={date}
          rowNumber={daysView}
          updateTask={updateTask}
          addtask={addtask}
        />

        <BookingForm
          listPatientDashboardAPIRefetch={listPatientDashboardAPIRefetch}
          listPatient={listPatient}
          currentDateStart={currentDateStart}
          cancelRef={cancelRef}
          onClose={onClose}
          isOpen={isOpen}
          refetchTask={refetchTask}
          medecin_id={id}
          setTask={setTask}
          end={end}
        />
      </Formiz>
    </Box>
  );
};

export default CalendarDashboardMedecin;
