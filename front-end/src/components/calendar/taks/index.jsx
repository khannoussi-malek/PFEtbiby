import { IconButton } from "@chakra-ui/button";
import { Box } from "@chakra-ui/layout";
import { CloseIcon } from "@chakra-ui/icons";
import { Draggable } from "react-beautiful-dnd";
import {
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
} from "@chakra-ui/popover";
const Task = (props) => {
  const { taskvalue, task, setTask, DeleteMutate } = props;

  const remove = (event) => {
    event.stopPropagation();
    DeleteMutate({ id: taskvalue.id });
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
              // _focus="none"
              border="2px"
              borderRadius="20px"
              bgColor={snapshot.isDragging ? `#3b8a5b` : `#b3e6c8`}
              borderColor="green.200"
              mx={3}
              px={2}
              children={
                <Box>
                  <IconButton
                    onClick={(event) => remove(event)}
                    size="xs"
                    m={1}
                    bg="red.300"
                    colorScheme="teal"
                    fontSize="10px"
                    icon={<CloseIcon />}
                  />
                  {taskvalue.nomprenom}
                </Box>
              }
            />
          </PopoverTrigger>
          <PopoverContent bg="gray.50">
            <PopoverHeader fontWeight="semibold">
              {taskvalue.nomprenom}
            </PopoverHeader>
            <PopoverBody>
              Rendez-vous a {taskvalue.start.slice(0, 10) + " "}
              en
              {" " + taskvalue.start.slice(11, 19)}
            </PopoverBody>
          </PopoverContent>
        </Popover>
      )}
    </Draggable>
  );
};
export default Task;
