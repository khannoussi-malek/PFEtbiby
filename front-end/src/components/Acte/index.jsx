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
  const {
    id,
    removeComponentsForm,
    name,
    index,
    values,
    setFieldsValues,
    updateForm,
    key,
  } = props;
  const [title, setTitle] = useState("");
  const [showEditTitle, setShowEditTitle] = useState(true);
  const toast = useToast();
  const [selectValue, setSelectValue] = useState([]);
  const [code, setCode] = useState("");
  const [designation, setDesignation] = useState("");
  const [price, setPrice] = useState("");
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
      setCode(res.data.code);
      setDesignation(res.data.designation);
      setPrice(res.data.price);
      values.actes[index].code = res.data.code;
      values.actes[index].designation = res.data.designation;
      values.actes[index].price = res.data.price;
      updateForm(values.actes, index);
      // setFieldsValues({ actes: [...values.actes] });
    },
  });
  return (
    <AccordionItem boxShadow="lg" key={"a" + key}>
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
          label="Sélectionner une acte"
          data={selectValue}
          onChange={(e) => mutate({ id: e.value })}
          name="selectvalue"
        />
        <MyField name={`${name}.code`} label="Code" dtValue={code} />
        <TextareaForm
          name={`${name}.designation`}
          label="Diagnostic"
          dtValue={designation}
        />
        <TextareaForm name={`${name}.note`} label="Note" />
        <Prix name={`${name}.price`} label="Prix" dtValue={price} />
      </AccordionPanel>
    </AccordionItem>
  );
};
