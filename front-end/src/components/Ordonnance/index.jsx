import { CloseButton } from "@chakra-ui/close-button";
import { Box } from "@chakra-ui/layout";
import { useState } from "react";
import { useColorModeValue as mode } from "@chakra-ui/react";
import { Select2 } from "./../formInput/select";
import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
} from "@chakra-ui/accordion";
import { Input } from "@chakra-ui/input";
import { EditIcon } from "@chakra-ui/icons";
import { InputDateRange } from "./../formInput/range";
import { MyNumberInput } from "./../formInput/numberinput";
import { useGetListeMedicamentSelect2 } from "./../../services/api/list medicament";
import { useToast } from "@chakra-ui/react";
import { MyField } from "./../formInput";
import AjoutMedicament from "./../medicament";
export const Ordonnance = (props) => {
  const { id, removeComponentsForm, name } = props;
  const toast = useToast();
  const [title, setTitle] = useState("");
  const [selectValue, setSelectValue] = useState([]);
  const [showEditTitle, setShowEditTitle] = useState(true);
  const { refetch } = useGetListeMedicamentSelect2({
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
  return (
    <AccordionItem boxShadow="lg">
      <AccordionButton>
        <Box flex="1" textAlign="left">
          {title != "" ? title : `Ordonnance`}
          <EditIcon
            mx={5}
            onClick={(event) => {
              event.stopPropagation();
              setShowEditTitle(!showEditTitle);
            }}
          />
        </Box>
        <AccordionIcon mx={3} />
        <CloseButton
          onClick={() => removeComponentsForm(id)}
          colorScheme="red"
          bgColor="red.300"
          float="right"
        />
        <Input
          placeholder="Écrivez le titre de cet élément"
          display={showEditTitle ? `none` : `inline`}
          onChange={(e) => setTitle(e.target.value)}
        />
      </AccordionButton>
      <AccordionPanel bgColor={mode("green.50", "gray.700")} pb={4}>
        <AjoutMedicament refetch={refetch} />

        <InputDateRange
          name={`${name}.duree`}
          label="Durée"
          required="la valeur de durée est obligatoire"
        />
        <Select2
          label="Sélectionner une medicament"
          data={selectValue}
          name={`${name}.medicament_id`}
          required="le nom de medicament est obligatoire"
        />
        <MyField
          name={`${name}.duree_entre_chaque_medicament`}
          label="duree entre chaque medicament"
        />
        <MyNumberInput
          name={`${name}.NBR_FOIS_JOURS`}
          label="Nombre de fois par jour"
        />
      </AccordionPanel>
    </AccordionItem>
  );
};
