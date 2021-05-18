import { useNotification } from "./../../services/api/notification";
import { TbibyContext } from "./../../router/context/index";
import { useContext, useState } from "react";
import {
  Box,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Tag,
  Text,
  TagLabel,
  Divider,
  useToast,
  Button,
} from "@chakra-ui/react";
import OneNotification from "./_partials/One notification";
import { useRemoveAllNotification } from "./../../services/api/notification/index";
const Notification = (props) => {
  const { user } = useContext(TbibyContext);
  const toast = useToast();
  const [notification, setNotification] = useState([]);
  const params = { id: user.id };
  const { isLoading, refetch } = useNotification({
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
      setNotification(res.data);
    },
  });
  const { mutate: removeAllNotificationMutate } = useRemoveAllNotification({
    onError: (error) => {
      toast({
        title: "🌐 Problème de connexion",
        description: " Il y a un problème de connexion",
        status: "success",
        duration: `4000`,
        isClosable: true,
      });
    },
  });
  const removeElement = (element) => {
    let array = [...notification];
    array.splice(array.indexOf(element), 1);
    // console.log(array);
    setNotification(array);
  };
  return notification.length ? (
    <Popover>
      <PopoverTrigger>
        <Tag
          mx={3}
          size="lg"
          colorScheme="gray"
          borderRadius="full"
          _hover={{ cursor: "pointer" }}
        >
          🔔
          <TagLabel>
            {notification.length != 0 ? notification.length : ``}
          </TagLabel>
        </Tag>
        {/* <Button mx={2}>🔔</Button> */}
      </PopoverTrigger>
      <PopoverContent mx={2}>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>
          <Text fontSize="2xl"> Notification</Text>
          {notification.length != 0 ? (
            <Button
              fontSize="13px"
              onClick={() => {
                removeAllNotificationMutate({ id: user.id });
                setNotification([]);
              }}
              float="right"
              mr={2}
            >
              Effacer tout
            </Button>
          ) : (
            ``
          )}
        </PopoverHeader>
        <PopoverBody overflowY="scroll" maxH="80hw">
          {notification.map((element) => (
            <OneNotification
              removeElement={removeElement}
              refetch={refetch}
              notif={element}
            ></OneNotification>
          ))}
        </PopoverBody>
        <Divider />
      </PopoverContent>
    </Popover>
  ) : null;
};
export default Notification;
