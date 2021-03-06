import { Formiz, useForm } from "@formiz/core";
import {
  Stack,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Center,
  Image,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import {
  PhoneIcon,
  AtSignIcon,
  EditIcon,
  ExternalLinkIcon,
} from "@chakra-ui/icons";
import LoginEmai from "./_partials/LoginEmai";
import LoginPhone from "./_partials/LoginPhone";
import LoginCIN from "./_partials/LoginCIN";
import { useHistory } from "react-router-dom";
const Login = () => {
  let history = useHistory();
  const ToSingup = () => history.push("/singup");

  const myForm = useForm();
  const [logindata, setlogindata] = useState({ user: "", password: "" });
  useEffect(() => {
    if (logindata.user != "") {
      //login api all data in [logindata] user and password
      console.log(logindata);
    }
  }, [logindata]);

  return (
    <React.Fragment>
      <Stack maxW={400} margin="auto" spacing={5} marginTop={10}>
        <Image maxW={200} m="auto" src="./logo192.png" alt="Segun Adebayo" />
        <Tabs isFitted variant="enclosed">
          <TabList mb="1em">
            <Tab>
              <AtSignIcon fontSize="30px" color="red.400" />
            </Tab>
            <Tab>
              <EditIcon fontSize="30px" color="red.400" />
            </Tab>
            <Tab>
              <PhoneIcon fontSize="30px" color="red.400" />
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <LoginEmai setlogindata={setlogindata} logindata={logindata} />
            </TabPanel>
            <TabPanel>
              <LoginCIN setlogindata={setlogindata} logindata={logindata} />
            </TabPanel>
            <TabPanel>
              <LoginPhone setlogindata={setlogindata} logindata={logindata} />
            </TabPanel>
          </TabPanels>
        </Tabs>
        <Center onClick={ToSingup}>
          Créez votre compte <ExternalLinkIcon mx="2px" />
        </Center>
      </Stack>
    </React.Fragment>
  );
};

export default Login;
