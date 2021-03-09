import * as React from "react";
import {
  Box,
  useColorModeValue as mode,
  Heading,
  Image,
} from "@chakra-ui/react";
import Login from "./Login";
import Singup from "./Sing up";
import { Route } from "react-router";

const log = () => {
  return (
    <Box
      bg={mode("gray.50", "inherit")}
      minH="100vh"
      py="12"
      px={{ sm: "6", lg: "8" }}
    >
      <Box maxW={{ sm: "md" }} mx={{ sm: "auto" }} w={{ sm: "full" }}>
        <Box>
          <Box>
            <Image
              maxW={200}
              m="auto"
              src="./logo192.png"
              alt="Segun Adebayo"
            />
          </Box>
          <Heading mt="6" textAlign="center" size="xl" fontWeight="extrabold">
            Sign in to your account
          </Heading>
        </Box>
        <Box maxW={{ sm: "md" }} mx={{ sm: "auto" }} mt="8" w={{ sm: "full" }}>
          <Box
            bg={mode("white", "gray.700")}
            py="8"
            px={{ base: "4", md: "10" }}
            shadow="base"
            rounded={{ sm: "lg" }}
          >
            <Route component={Login} exact path="/login" />
            <Route component={Singup} exact path="/Singup" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default log;
