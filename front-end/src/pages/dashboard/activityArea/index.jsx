import React from "react";
import { Box } from "@chakra-ui/react";
import { Route } from "react-router-dom";
import Accountmanagement from "./../../gestion de compte/index";
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
        <Route
          component={Accountmanagement}
          exact
          path="/dashbord/Gestion de compte"
        />
      </Box>
    </React.Fragment>
  );
};

export default ActivityArea;
