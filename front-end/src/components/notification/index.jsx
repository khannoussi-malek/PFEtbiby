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
} from "@chakra-ui/react";
import OneNotification from "./_partials/One notification";
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
  return (
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
          <TagLabel></TagLabel>
        </Tag>
        {/* <Button mx={2}>🔔</Button> */}
      </PopoverTrigger>
      <PopoverContent mx={2}>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>
          <Text fontSize="2xl"> Notification</Text>
        </PopoverHeader>
        <PopoverBody>
          {notification.map((element) => (
            <OneNotification
              refetch={refetch}
              notif={element}
            ></OneNotification>
          ))}
        </PopoverBody>
        <Divider />
      </PopoverContent>
    </Popover>
  );
};
export default Notification;
