import React, { useContext } from "react";
import { Box } from "@chakra-ui/react";
import Accountmanagement from "./../../gestion de compte/";
import { PrivateRoute } from "./../../../router/_partials/PrivateRoute";
import Rappel from "./../../rappel/index";
import ListPatents from "./../../Mes patients";
import CalendarDashboard from "./../../calendar";
import { TbibyContext } from "./../../../router/context";
import MonRendezvous from "./../../Mon rendez vous/index";
import MonMedecin from "./../../Mon medecin/index";
const ActivityArea = () => {
  const { user } = useContext(TbibyContext);

  return (
    <React.Fragment>
      <Box
        flex="1"
        borderWidth="2px"
        rounded="xl"
        // px={{ base: 0, md: 1 }}
        py={{ base: 2, md: 1 }}
      >
        <PrivateRoute
          path="/dashboard"
          component={CalendarDashboard}
          isAuth={user.isAuthenticated}
          exact
        />
        <PrivateRoute
          path="/dashboard/Mon médecin"
          component={MonMedecin}
          isAuth={user.isAuthenticated}
          exact
        />
        <PrivateRoute
          path="/dashboard/Gestion de compte"
          component={Accountmanagement}
          isAuth={user.isAuthenticated}
          exact
        />
        <PrivateRoute
          path="/dashboard/Mon rendez vous"
          component={MonRendezvous}
          isAuth={user.isAuthenticated}
          exact
        />
        <PrivateRoute
          path="/dashboard/Rappel"
          component={Rappel}
          isAuth={user.isAuthenticated}
          exact
        />
        <PrivateRoute
          path="/dashboard/Mes patients"
          component={ListPatents}
          isAuth={user.isAuthenticated}
          exact
        />
      </Box>
    </React.Fragment>
  );
};

export default ActivityArea;
