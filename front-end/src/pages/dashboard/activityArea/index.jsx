import React from "react";
import { Box } from "@chakra-ui/react";
import Accountmanagement from "./../../gestion de compte/";
import { PrivateRoute } from "./../../../router/_partials/PrivateRoute";
import { authentication } from "./../../../services/authentication/auth";

const ActivityArea = () => {
  let auth = authentication();
  return (
    <React.Fragment>
      <Box
        flex="1"
        borderWidth="2px"
        rounded="xl"
        px={{ base: 1, md: 5 }}
        p={5}
      >
        <PrivateRoute
          path="/dashbord/Gestion de compte"
          component={Accountmanagement}
          isAuth={auth}
          exact
        />
      </Box>
    </React.Fragment>
  );
};

export default ActivityArea;
