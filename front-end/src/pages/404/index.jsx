import React from "react";
import { Center, Box, Image, Button } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

const Error404 = () => {
  let history = useHistory();

  return (
    <Center
      minH="100vh"
      textAlign="center"
      onClick={() => history.push("/dashboard")}
    >
      <Box>
        <Box>
          <Image src="" h="75vh" src="./image/404.png" />
        </Box>
        <Box mt={10}>
          <Button variant="outline" size="lg" colorScheme="green">
            Bienvenue
          </Button>
        </Box>
      </Box>
    </Center>
  );
};
export default Error404;
