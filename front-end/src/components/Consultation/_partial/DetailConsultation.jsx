import { useHistoriqueListCertificat } from "../../../services/api/Historique patient";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { Text } from "@chakra-ui/react";
import { Box, SimpleGrid } from "@chakra-ui/layout";
import ShowCertifica from "../../Certificat/ShowCertifica";
import { useDetatilOfConsultation } from "../../../services/api/consultation";
import { useColorModeValue as mode } from "@chakra-ui/react";

const DetailConsultation = (props) => {
  const toast = useToast();
  const { data } = props;
  const [consultation, setConsultation] = useState({});
  const [detatil, setDetatil] = useState({});
  const params = { id: data.id };
  const { isLoading, refetch } = useDetatilOfConsultation({
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
      // console.log(res.data.data);
      setConsultation(res.data.data.consultation);
      setDetatil(res.data.data.detail);
    },
  });
  return (
    <>
      <Text pb={2} fontSize="23px">
        {consultation != null ? <>Diagnostic: {consultation.Diagnostic}</> : ``}
      </Text>
      <Text pb={2} fontSize="23px">
        {consultation != null ? <>Prix: {consultation.prix}</> : ``}
      </Text>
      <Text>
        {detatil != null ? (
          <SimpleGrid minChildWidth="100px" spacing="10px">
            <Accordion allowMultiple>
              {Object.keys(detatil).map((value) => {
                return (
                  <AccordionItem>
                    <h2>
                      <AccordionButton bgColor="green.200">
                        <Box flex="1" textAlign="left" fontSize="30px">
                          {value}
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      {detatil[value].map((valueobject) => (
                        <Box borderBottom="1px" borderColor="gray.200" pb={2}>
                          {Object.keys(valueobject).map((finalevalue) => (
                            <Text>
                              {value == "certificat" ? (
                                <ShowCertifica
                                  structure={valueobject.structure}
                                  patientId={valueobject.patient_id}
                                />
                              ) : (
                                <>
                                  {valueobject[finalevalue] != null ? (
                                    <>
                                      <Text fontSize="20px">
                                        {finalevalue}:
                                      </Text>
                                      <Text fontSize="15px">
                                        {valueobject[finalevalue]}
                                      </Text>
                                    </>
                                  ) : (
                                    ``
                                  )}
                                </>
                              )}
                            </Text>
                          ))}
                        </Box>
                      ))}
                    </AccordionPanel>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </SimpleGrid>
        ) : (
          ``
        )}
      </Text>
    </>
  );
};
export default DetailConsultation;
