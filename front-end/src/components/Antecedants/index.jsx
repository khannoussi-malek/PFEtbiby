import { useAntecedants } from "../../services/api/patient information";
import {
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  IconButton,
  SkeletonText,
  useToast,
  Text,
  Box,
  SimpleGrid,
} from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import React, { useState } from "react";
import { useDisclosure } from "@chakra-ui/hooks";
import InformationsSurLeMedecin from "./../InformationsSurLeMedecin/index";

const Antecedants = (props) => {
  const { patient } = props;
  const toast = useToast();
  const params = { patient_id: patient.id };
  const [patientInfo, setPatientInfo] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { isLoading, refetch } = useAntecedants({
    params,
    onError: (error) => {
      toast({
        title: "🌐 Problème de connexion",
        description: " Il y a un problème de connexion",
        status: "success",
        duration: `4000`,
        isClosable: true,
      });
    },
    onSuccess: (res) => {
      setPatientInfo(res.data);
    },
  });
  // console.log(patientInfo);

  return (
    <React.Fragment>
      <Button m={5} bg="blue.100" onClick={onOpen}>
        Antecedants
      </Button>
      <Drawer placement="right" size="lg" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent bg="gray.50">
          <DrawerHeader borderBottomWidth="1px">
            Antecedants
            <IconButton
              float="right"
              variant="outline"
              size="xs"
              m={1}
              colorScheme="red"
              fontSize="10px"
              icon={<CloseIcon />}
              onClick={() => onClose()}
            />
          </DrawerHeader>
          <DrawerBody display={!isLoading ? `none` : ``}>
            <SkeletonText mt="7" noOfLines={7} spacing="7" />
          </DrawerBody>
          <DrawerBody display={isLoading ? `none` : ``}>
            {patientInfo.map((data) => (
              <Box key={data.id}>
                <SimpleGrid columns={3} spacing={10}>
                  <Box>
                    <Text
                      fontSize="23px"
                      borderBottom="1px"
                      borderColor="green.400"
                      display="inline"
                      color="gray.700"
                    >
                      Type:
                    </Text>
                    <Text fontSize="20px" color="gray.700">
                      {data.type}
                    </Text>
                  </Box>
                  <Box>
                    <Text
                      fontSize="23px"
                      borderBottom="1px"
                      borderColor="green.400"
                      display="inline"
                      color="gray.700"
                    >
                      Description:
                    </Text>
                    <Text fontSize="20px" color="gray.700">
                      {data.description}
                    </Text>
                  </Box>
                  <Box>
                    <Text
                      fontSize="23px"
                      borderBottom="1px"
                      borderColor="green.400"
                      display="inline"
                      color="gray.700"
                    >
                      Ecrit par:
                    </Text>
                    <Text fontSize="20px" color="gray.700">
                      <Popover>
                        <PopoverTrigger>
                          <Box>{data.medecin}</Box>
                        </PopoverTrigger>
                        <PopoverContent>
                          <PopoverArrow />
                          <PopoverCloseButton />
                          <PopoverHeader>Plus d'information</PopoverHeader>
                          <PopoverBody>
                            <InformationsSurLeMedecin
                              medecin={data.medecin_id}
                            />
                          </PopoverBody>
                        </PopoverContent>
                      </Popover>
                    </Text>
                  </Box>
                </SimpleGrid>
              </Box>
            ))}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </React.Fragment>
  );
};
export default Antecedants;
