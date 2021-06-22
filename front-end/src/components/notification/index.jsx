import { useNotification } from "./../../services/api/notification";
import { TbibyContext } from "./../../router/context";
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
  Tooltip,
} from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

import OneNotification from "./_partials/One notification";
import { useRemoveAllNotification } from "./../../services/api/notification";
const Notification = (props) => {
  let history = useHistory();

  const { user,cleanUser } = useContext(TbibyContext);
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
      setNotification(res.data.notife);
      if(res.data.status ==="non Active"){
        cleanUser();
        history.push("/login");
      }
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
          <Tooltip label="Notification" aria-label="Notification">
            🔔
          </Tooltip>

          <TagLabel>
            {notification.length != 0 ? notification.length : ``}
          </TagLabel>
        </Tag>
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
        <PopoverBody overflowY="scroll" maxH="70vh">
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
