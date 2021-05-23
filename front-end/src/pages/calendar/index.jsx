import React, { useContext, useState } from "react";

import { Box, Center } from "@chakra-ui/layout";
import CalendarDashboardMedecin from "./medecin";
import { TbibyContext } from "./../../router/context";
import CalendarDashboardPatient from "./patient";
import { Radio, RadioGroup } from "@chakra-ui/react";
import { Stack } from "@chakra-ui/react";

const CalendarDashboard = () => {
  const [calendarType, setCalendarType] = useState("cabine");
  const { user } = useContext(TbibyContext);
  if (user.fonctionnalite == "secretaire") {
    return (
      <Box>
        <Center>
          <RadioGroup onChange={setCalendarType} value={calendarType}>
            <Stack direction="row" spacing={50}>
              <Radio value="cabine">cabine </Radio>
              <Radio value="moi">moi</Radio>
            </Stack>
          </RadioGroup>
        </Center>
        {calendarType == "cabine" ? (
          <CalendarDashboardMedecin />
        ) : (
          <CalendarDashboardPatient />
        )}
      </Box>
    );
  } else {
    return (
      <Box>
        {user.fonctionnalite == "medecin" ? (
          <CalendarDashboardMedecin />
        ) : (
          <CalendarDashboardPatient />
        )}
      </Box>
    );
  }
};

export default CalendarDashboard;
