import { CloseButton } from "@chakra-ui/close-button";
import { Box, Divider } from "@chakra-ui/layout";
import { useColorModeValue as mode, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { Select2 } from "./../formInput/select";
import { TextareaForm } from "./../formInput/Textarea";
import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
} from "@chakra-ui/accordion";
import { Input } from "@chakra-ui/input";
import { EditIcon } from "@chakra-ui/icons";
import { MyField } from "../formInput";
import { Prix } from "../formInput/Prix";
import { useGetAllListActe, useGetOnetActe } from "../../services/api/acte";
export const Acte = (props) => {
  const { id, removeComponentsForm } = props;
  const [title, setTitle] = useState("");
  const [showEditTitle, setShowEditTitle] = useState(true);
  const toast = useToast();
  const [selectValue, setSelectValue] = useState([]);
  const [code, setCode] = useState("");
  const [diagnostic, setDiagnostic] = useState("");
  const [prix, setPrix] = useState("");
  const [note, setNote] = useState("");

  const { isLoading, refetch } = useGetAllListActe({
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
      setSelectValue(res.data);
    },
  });
  const { mutate, isLoading: isLoadingGetActe } = useGetOnetActe({
    onError: (error) => {
      // setMessage("Vérifier l'information qui vous inseri ou votre liste");
    },
    onSuccess: (res) => {
      console.log(res.code);
      setCode(res.code);
      setDiagnostic(res.designation);
      setPrix(res.price);
    },
  });
  return (
    <AccordionItem boxShadow="lg">
      <AccordionButton>
        <Box flex="1" textAlign="left">
          {title != "" ? title : `Acte`}
          <EditIcon
            mx={5}
            onClick={(event) => {
              event.stopPropagation();
              setShowEditTitle(!showEditTitle);
            }}
          />
          <Input
            placeholder="Écrivez le titre de cet élément"
            display={showEditTitle ? `none` : `inline`}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Box>
        <AccordionIcon mx={3} />
        <CloseButton
          onClick={() => removeComponentsForm(id)}
          colorScheme="red"
          bgColor="red.300"
          float="right"
        />
      </AccordionButton>
      <AccordionPanel bgColor={mode("gray.50", "gray.700")} pb={4}>
        <Select2
          label="Type de certificat"
          data={selectValue}
          onChange={(e) => mutate({ id: e.value })}
          name="selectvalue"
        />
        <MyField name="code" label="Code" dtValue={code} />
        <TextareaForm
          name="diagnostic"
          label="Diagnostic"
          dtValue={diagnostic}
        />
        <TextareaForm name="note" label="Note" dtValue={note} />
        <Prix name="prix" label="Prix" dtValue={prix} />
      </AccordionPanel>
    </AccordionItem>
  );
};
