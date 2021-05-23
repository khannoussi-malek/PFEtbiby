import { Box, Flex, Text } from "@chakra-ui/layout";
import { Grid } from "@chakra-ui/layout";
import { GridItem } from "@chakra-ui/layout";
import { Droppable } from "react-beautiful-dnd";
import { useColorModeValue as mode } from "@chakra-ui/react";

import Task from "../taks";

const TimeElement = (props) => {
  const {
    usertype,
    HoursValue,
    key,
    value,
    DeleteMutate,
    addtask,
    task,
    EnteredMutate,
    setTask,
  } = props;

  return (
    <Box
      key={key}
      h="160px"
      fontSize="20px"
      border="1px"
      borderColor={mode("green.200", "cyan.800")}
    >
      <Grid
        h="100%"
        templateRows="repeat(4, 1fr)"
        border="3px"
        borderColor="red.200"
        gap={0}
      >
        <Droppable
          droppableId={
            value.toISOString().slice(0, 10) +
            "T" +
            HoursValue.slice(0, 3) +
            "00"
          }
        >
          {(provided, snapshot) => (
            <GridItem
              {...provided.droppableProps}
              ref={provided.innerRef}
              bgColor={mode("green.50", "cyan.600")}
              // bgColor={snapshot.isDraggingOver ? "green.100" : `gray.50`}
              color={mode("green.800", "gray.300")}
              maxH="40px"
              onClick={(event) =>
                addtask(
                  event,
                  value.toISOString().slice(0, 10) +
                    "T" +
                    HoursValue.slice(0, 3) +
                    "00",
                  value.toISOString().slice(0, 10) +
                    "T" +
                    HoursValue.slice(0, 3) +
                    "15"
                )
              }
              borderBottom="1px"
              id={
                value.toISOString().slice(0, 10) +
                "T" +
                HoursValue.slice(0, 3) +
                "00"
              }
              //   bgColor="gray.50"
              borderColor="gray.200"
            >
              <Flex>
                <Text fontSize="xs">{HoursValue.slice(0, 3) + "00"}</Text>
                {task.map((taskvalue) =>
                  taskvalue.start ===
                  value.toISOString().slice(0, 10) +
                    "T" +
                    HoursValue.slice(0, 3) +
                    "00" ? (
                    <Task
                      usertype={usertype}
                      EnteredMutate={EnteredMutate}
                      DeleteMutate={DeleteMutate}
                      key={taskvalue.id}
                      task={task}
                      setTask={setTask}
                      taskvalue={taskvalue}
                    />
                  ) : (
                    ``
                  )
                )}
                {provided.placeholder}
              </Flex>
            </GridItem>
          )}
        </Droppable>
        <Droppable
          droppableId={
            value.toISOString().slice(0, 10) +
            "T" +
            HoursValue.slice(0, 3) +
            "15"
          }
        >
          {(provided, snapshot) => (
            <GridItem
              {...provided.droppableProps}
              ref={provided.innerRef}
              bgColor={mode("green.100", "cyan.700")}
              maxH="40px"
              color={mode("green.800", "gray.300")}
              onClick={(event) =>
                addtask(
                  event,
                  value.toISOString().slice(0, 10) +
                    "T" +
                    HoursValue.slice(0, 3) +
                    "15",
                  value.toISOString().slice(0, 10) +
                    "T" +
                    HoursValue.slice(0, 3) +
                    "30"
                )
              }
              borderBottom="1px"
              id={
                value.toISOString().slice(0, 10) +
                "T" +
                HoursValue.slice(0, 3) +
                "15"
              }
              //   bgColor="gray.50"
              borderColor="gray.200"
            >
              <Flex>
                <Text fontSize="xs">{HoursValue.slice(0, 3) + "15"}</Text>
                {task.map((taskvalue) =>
                  taskvalue.start ===
                  value.toISOString().slice(0, 10) +
                    "T" +
                    HoursValue.slice(0, 3) +
                    "15" ? (
                    <Task
                      usertype={usertype}
                      EnteredMutate={EnteredMutate}
                      DeleteMutate={DeleteMutate}
                      key={taskvalue.id}
                      task={task}
                      setTask={setTask}
                      taskvalue={taskvalue}
                    />
                  ) : (
                    ``
                  )
                )}
                {provided.placeholder}
              </Flex>
            </GridItem>
          )}
        </Droppable>
        <Droppable
          droppableId={
            value.toISOString().slice(0, 10) +
            "T" +
            HoursValue.slice(0, 3) +
            "30"
          }
        >
          {(provided, snapshot) => (
            <GridItem
              {...provided.droppableProps}
              ref={provided.innerRef}
              bgColor={mode("green.200", "cyan.800")}
              maxH="40px"
              color={mode("green.800", "gray.300")}
              onClick={(event) =>
                addtask(
                  event,
                  value.toISOString().slice(0, 10) +
                    "T" +
                    HoursValue.slice(0, 3) +
                    "30",
                  value.toISOString().slice(0, 10) +
                    "T" +
                    HoursValue.slice(0, 3) +
                    "45"
                )
              }
              borderBottom="1px"
              id={
                value.toISOString().slice(0, 10) +
                "T" +
                HoursValue.slice(0, 3) +
                "30"
              }
              //   bgColor="gray.50"
              borderColor="gray.200"
            >
              <Flex>
                <Text fontSize="xs">{HoursValue.slice(0, 3) + "30"}</Text>
                {task.map((taskvalue) =>
                  taskvalue.start ===
                  value.toISOString().slice(0, 10) +
                    "T" +
                    HoursValue.slice(0, 3) +
                    "30" ? (
                    <Task
                      usertype={usertype}
                      EnteredMutate={EnteredMutate}
                      DeleteMutate={DeleteMutate}
                      key={taskvalue.id}
                      task={task}
                      setTask={setTask}
                      taskvalue={taskvalue}
                    />
                  ) : (
                    ``
                  )
                )}
                {provided.placeholder}
              </Flex>
            </GridItem>
          )}
        </Droppable>
        <Droppable
          droppableId={
            value.toISOString().slice(0, 10) +
            "T" +
            HoursValue.slice(0, 3) +
            "45"
          }
        >
          {(provided, snapshot) => (
            <GridItem
              {...provided.droppableProps}
              ref={provided.innerRef}
              bgColor={mode("green.300", "cyan.900")}
              color={mode("green.800", "gray.300")}
              maxH="40px"
              onClick={(event) =>
                addtask(
                  event,
                  value.toISOString().slice(0, 10) +
                    "T" +
                    HoursValue.slice(0, 3) +
                    "45",
                  value.toISOString().slice(0, 10) +
                    "T" +
                    (parseInt(HoursValue.slice(0, 2)) < 9)
                    ? `0${parseInt(HoursValue.slice(0, 2)) + 1}:00`
                    : parseInt(HoursValue.slice(0, 2)) + 1 + ":00"
                )
              }
              borderBottom="1px"
              id={
                value.toISOString().slice(0, 10) +
                "T" +
                HoursValue.slice(0, 3) +
                "45"
              }
              //   bgColor="gray.50"
              borderColor="gray.200"
            >
              <Flex>
                <Text fontSize="xs">{HoursValue.slice(0, 3) + "45"}</Text>
                {task.map((taskvalue) =>
                  taskvalue.start ===
                  value.toISOString().slice(0, 10) +
                    "T" +
                    HoursValue.slice(0, 3) +
                    "45" ? (
                    <Task
                      usertype={usertype}
                      EnteredMutate={EnteredMutate}
                      DeleteMutate={DeleteMutate}
                      key={taskvalue.id}
                      task={task}
                      setTask={setTask}
                      taskvalue={taskvalue}
                    />
                  ) : (
                    ``
                  )
                )}
                {provided.placeholder}
              </Flex>
            </GridItem>
          )}
        </Droppable>
      </Grid>
    </Box>
  );
};
export default TimeElement;
