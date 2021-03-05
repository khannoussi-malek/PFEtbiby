import { Formiz, useForm } from "@formiz/core";
import {
  Stack,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { PhoneIcon, AtSignIcon, EditIcon } from "@chakra-ui/icons";
import LoginEmai from "./loginEmail";
import LoginPhone from "./loginPhone";
import LoginCIN from "./loginCIN";
const Login = () => {
  const myForm = useForm();
  const handleSubmit = (values) => {
    console.log(values);
  };
  useEffect(() => {
    // Update the document title using the browser API
  });
  return (
    <React.Fragment>
      <Stack maxW={400} margin="auto" spacing={5} marginTop={10}>
        <Tabs isFitted variant="enclosed">
          <TabList mb="1em">
            <Tab>
              <AtSignIcon fontSize="30px" color="yellow.400" />
            </Tab>
            <Tab>
              <EditIcon fontSize="30px" color="yellow.400" />
            </Tab>
            <Tab>
              <PhoneIcon fontSize="30px" color="yellow.400" />
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <LoginEmai />
            </TabPanel>
            <TabPanel>
              <LoginCIN />
            </TabPanel>
            <TabPanel>
              <LoginPhone />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Stack>
    </React.Fragment>
  );
};

export default Login;
