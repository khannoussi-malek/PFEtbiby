import { Box, Divider, useToast } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import { useRemoveNotification } from "./../../../services/api/notification";
import { Button } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import React from "react";
import { IconButton } from "@chakra-ui/button";
import { useSeeNotification } from "./../../../services/api/notification/index";
import { useColorModeValue as mode } from "@chakra-ui/react";

const OneNotification = (props) => {
  let history = useHistory();
  const { notif, refetch, removeElement } = props;
  const toast = useToast();
  const handleClick = () => {
    history.push(notif.url || "/dashboard");
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
  const { mutate: seeNotifMutate } = useSeeNotification({
    onSuccess: (res) => {
      refetch();
    },
  });
  return (
    <React.Fragment>
      <Box
        p={2}
        onClick={() => handleClick()}
        onMouseEnter={() => {
          if (notif.is_read == 0) {
            seeNotifMutate({ id: notif.id });
            notif.is_read = 1;
          }
        }}
        color={mode("gray.900", "gray.100")}
        bgColor={notif.is_read == 1 ? `` : mode("gray.50", "gray.500")}
      >
        <Box float="right" fontSize="10px" colorScheme="red">
          <IconButton
            size="xs"
            m={1}
            bg="red.300"
            colorScheme="teal"
            fontSize="10px"
            icon={<CloseIcon />}
            onClick={(event) => {
              removeElement(notif);
              event.stopPropagation();
              mutate({ id: notif.id });
            }}
          />
        </Box>
        {notif.content}
      </Box>
      <Divider />
    </React.Fragment>
  );
};
export default OneNotification;
