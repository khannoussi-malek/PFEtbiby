import React from "react";
import { Box } from "@chakra-ui/react";
import { Route } from "react-router-dom";
import Rappel from "./Rappel/index";
const ActivityArea = () => {
  return (
    <React.Fragment>
      <Box
        flex="1"
        borderWidth="2px"
        rounded="xl"
        px={{ base: 1, md: 5 }}
        p={5}
      >
        <Route component={Rappel} exact path="/dashbord/rappel" />
      </Box>
    </React.Fragment>
  );
};

export default ActivityArea;
