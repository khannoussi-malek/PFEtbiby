import { useNotification } from "./../../services/api/notification/index";
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
  Button,
  Tag,
  Text,
  TagLabel,
  Divider,
  useToast,
} from "@chakra-ui/react";
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
  console.log(notification);
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
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>
          <Text fontSize="2xl"> Notification</Text>
        </PopoverHeader>
        <PopoverBody>
          {notification.map((element) => (
            <Box>{element.content}</Box>
          ))}
        </PopoverBody>
        <Divider />
      </PopoverContent>
    </Popover>
  );
};
export default Notification;
