import React from "react";
import { Center, Box, Image, Button } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

const Error404 = () => {
  let history = useHistory();

  return (
    <Center minH="100vh" textAlign="center">
      <Box>
        <Box>
          <Image src="" w="100%" src="./image/404.png" />
        </Box>
        <Box mt={10}>
          <Button
            onClick={() => history.push("/dashboard")}
            variant="outline"
            size="lg"
            colorScheme="blue"
          >
            🚦 Page d'accueil 🚦
          </Button>
        </Box>
      </Box>
    </Center>
  );
};
export default Error404;
