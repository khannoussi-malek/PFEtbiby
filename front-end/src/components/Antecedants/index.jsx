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
  useColorModeValue as mode,
  DrawerFooter,
} from "@chakra-ui/react";

import { CloseIcon } from "@chakra-ui/icons";
import React, { useState } from "react";
import { useDisclosure } from "@chakra-ui/hooks";
import InformationsSurLeMedecin from "./../InformationsSurLeMedecin/index";
import { TableContent } from "./../table/TableContent";
import { TablePagination } from "./../table/TablePagination";
import { useBreakpointValue } from "@chakra-ui/media-query";
import DescriptionMobile from "./descriptionMobile/index";

const Antecedants = (props) => {
  const isMobile = useBreakpointValue({ base: true, lg: false });
  const { patient } = props;
  const toast = useToast();
  const params = { patient_id: patient.id };
  const [total, setTotal] = useState(0);
  const [next, setNext] = useState("");
  const [prev, setPrev] = useState("");
  const [page, setPage] = useState(1);
  const [patientInfo, setPatientInfo] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  let header = ["type", "description"];
  if (isMobile) {
    header = ["type"];
  } else {
    header = ["type", "description"];
  }
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
      setPatientInfo(res.data.data);
    },
  });

  // console.log(patientInfo);
  const [fntable, setFntable] = useState({
    fn: (data) => (
      <Text fontSize="20px" color={mode("gray.700", "gray.50")}>
        <Popover>
          <PopoverTrigger>
            <Text
              textAlign="center"
              bgColor={mode("gray.100", "gray.500")}
              _hover={{
                background: mode("blue.100", "gray.600"),
              }}
              style={{ cursor: "pointer" }}
              borderRadius="20px"
              p={2}
              colorScheme="blue"
            >
              {data.medecin}
            </Text>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverHeader>Plus d'information</PopoverHeader>
            <PopoverBody>
              <InformationsSurLeMedecin medecin={data.medecin_id} />
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </Text>
    ),
    fn2: (data) => <DescriptionMobile data={data} />,
  });
  return (
    <React.Fragment>
      <Button bg={mode("blue.100", "blue.800")} onClick={onOpen}>
        Antecedants
      </Button>
      <Drawer placement="left" size="xl" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent bg={mode("gray.50", "gray.700")}>
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
            <TableContent
              header={header}
              content={patientInfo}
              fntable={fntable}
            />
            <TablePagination
              total={total}
              next_page_url={next}
              prev_page_url={prev}
              page={page}
              setPage={setPage}
            />
          </DrawerBody>
          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Annuler
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </React.Fragment>
  );
};
export default Antecedants;
