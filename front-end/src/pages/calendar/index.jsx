import React, { useContext } from "react";

import { Box } from "@chakra-ui/layout";
import CalendarDashboardMedecin from "./medecin";
import { TbibyContext } from "./../../router/context";
import CalendarDashboardPatient from "./patient";

const CalendarDashboard = () => {
  const { user } = useContext(TbibyContext);

  return (
    <Box>
      {user.fonctionnalite == "medecin" ? (
        <CalendarDashboardMedecin />
      ) : (
        <CalendarDashboardPatient />
      )}
    </Box>
  );
};

export default CalendarDashboard;
