import { Box, Center, Grid, GridItem } from "@chakra-ui/layout";
import { useColorModeValue as mode } from "@chakra-ui/react";
import TimeElement from "./timeElement";
import { DragDropContext } from "react-beautiful-dnd";
function Calendar(props) {
  const {
    usertype,
    EnteredMutate,
    rowNumber,
    date,
    DeleteMutate,
    task,
    updateTask,
    setTask,
    addtask,
  } = props;

  //const [, setTask] = useState([{ start: "2021-03-22T00:00" }]);
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

  //to get format yyy-mm-ddThh:mm:ss
  // .toISOString().slice(0, 19)

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
          borderColor={mode("cyan.200", "cyan.900")}
          bgColor={mode("cyan.300", "cyan.900")}
          color={mode("gray.800", "gray.50")}
          h={10}
          align="center"
        >
          {value.toISOString().slice(0, 10)}
        </Center>
        {Hours.map((HoursValue) => (
          <TimeElement
            EnteredMutate={EnteredMutate}
            usertype={usertype}
            DeleteMutate={DeleteMutate}
            key={HoursValue.slice(0, 4)}
            HoursValue={HoursValue}
            value={value}
            addtask={addtask}
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
          <Box
            w="100%"
            border="1px"
            bgColor={mode("cyan.300", "cyan.900")}
            borderColor={mode("cyan.200", "cyan.900")}
          >
            <Center h={10} align="center"></Center>
            {Hours.map((value) => (
              <Center
                border="1px"
                borderColor={mode("cyan.200", "cyan.900")}
                bgColor={mode("cyan.300", "cyan.900")}
                color={mode("gray.800", "gray.50")}
                h="160px"
                key={value}
                px={2}
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
            <DragDropContext onDragEnd={(result) => updateTask(result)}>
              {contenu}
            </DragDropContext>
          </Grid>
        </GridItem>
      </Grid>
    </Box>
  );
}

export default Calendar;
