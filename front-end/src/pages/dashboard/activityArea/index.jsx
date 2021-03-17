import React from "react";
import { Box } from "@chakra-ui/react";
import Accountmanagement from "./../../gestion de compte/";
import { PrivateRoute } from "./../../../router/_partials/PrivateRoute";
import { authentication } from "./../../../services/authentication/auth";
import Rappel from "./../../rappel/index";
const ActivityArea = () => {
  let auth = authentication();
  return (
    <React.Fragment>
      <Box
        flex="1"
        borderWidth="2px"
        rounded="xl"
        px={{ base: 0, md: 5 }}
        py={{ base: 2, md: 5 }}
      >
        <PrivateRoute
          path="/dashbord/Gestion de compte"
          component={Accountmanagement}
          isAuth={auth}
          exact
        />
        <PrivateRoute
          path="/dashbord/Rappel"
          component={Rappel}
          isAuth={auth}
          exact
        />
      </Box>
    </React.Fragment>
  );
};

export default ActivityArea;
