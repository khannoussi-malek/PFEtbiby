import { Box, useToast } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import { useRemoveNotification } from "./../../../services/api/notification";
import { Button } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

const OneNotification = (props) => {
  let history = useHistory();
  const { notif, refetch } = props;
  const toast = useToast();
  const handleClick = () => {
    history.push(notif.url);
  };

  const { isLoading, mutate } = useRemoveNotification({
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
      refetch();

      //   setNotification(res.data);
    },
  });
  return (
    <Box onClick={() => handleClick()}>
      <Box float="right" fontSize="10px" colorScheme="red">
        <CloseIcon
          onClick={() => {
            mutate({ id: notif.id });
          }}
        />
      </Box>
      {notif.content}
    </Box>
  );
};
export default OneNotification;
