import { useBreakpointValue } from "@chakra-ui/media-query";
import { BiInfoCircle } from "react-icons/bi";

import { EmailIcon } from "@chakra-ui/icons";
import { MdCall } from "react-icons/md";
import { link, userImage } from "./../../services/api";
import {
  Box,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Button,
  Portal,
  PopoverFooter,
  Text,
  Avatar,
  Tooltip,
} from "@chakra-ui/react";
const PatientInfo = (props) => {
  const isMobile = useBreakpointValue({ base: true, lg: false });

  const { data } = props;

  return (
    <Popover>
      <PopoverTrigger>
        <Button m={1} colorScheme="green">
          <Tooltip
            label={`Plus d'informations sur ${data.nom + " " + data.prenom}`}
            aria-label={`Plus d'informations sur ${
              data.nom + " " + data.prenom
            }`}
          >
            {isMobile ? <BiInfoCircle fontSize="30px" /> : `Informations`}
          </Tooltip>
        </Button>
      </PopoverTrigger>
      <Portal>
        <PopoverContent borderColor="green">
          <PopoverArrow />
          <PopoverHeader>{data.nom + " " + data.prenom} </PopoverHeader>
          <PopoverCloseButton />
          <PopoverBody>
            {data.photo && (
              <Box>
                <Avatar
                  size="xl"
                  name={data.nom + " " + data.prenom}
                  src={`${link.slice(0, -1)}${data.photo}`}
                />
              </Box>
            )}
            {data.Adresse && <Text>Adresse : {data.Adresse} </Text>}
            {data.Code_APCI && <Text>Code_APCI : {data.Code_APCI} </Text>}
            {data.email != "" && data.email != null ? (
              <Text as="a" href={"mailto:" + data.email}>
                <Button
                  my={1}
                  colorScheme="green"
                  leftIcon={<EmailIcon />}
                  variant="outline"
                >
                  Email
                </Button>
              </Text>
            ) : (
              ``
            )}
            {data.telephone != "" && data.telephone != null ? (
              <Text display="block" as="a" href={"tel:" + data.telephone}>
                <Button
                  my={1}
                  leftIcon={<MdCall />}
                  colorScheme="green"
                  variant="outline"
                >
                  Appeller
                </Button>
              </Text>
            ) : (
              ``
            )}
            {data.cin && <Text>cin : {data.cin} </Text>}
          </PopoverBody>
          <PopoverFooter>
            Ce sont des informations personnelles sur votre patient
          </PopoverFooter>
        </PopoverContent>
      </Portal>
    </Popover>
  );
};
export default PatientInfo;
