import { CloseButton } from "@chakra-ui/close-button";
import { Box, Divider } from "@chakra-ui/layout";
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
import { useListeMedec } from "../../services/api/Medecin information";
import { useToast } from "@chakra-ui/react";
export const Lettre = (props) => {
  const { id, removeComponentsForm, name } = props;
  const [selectValue, setSelectValue] = useState([]);
  const [title, setTitle] = useState("");
  const [showEditTitle, setShowEditTitle] = useState(true);
  const toast = useToast();

  const { isLoading, refetch } = useListeMedec({
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
      setSelectValue(res.data || []);
    },
  });

  return (
    <AccordionItem boxShadow="lg">
      <AccordionButton>
        <Box flex="1" textAlign="left">
          {title != "" ? title : `Lettre`}
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
      </AccordionButton>
      <AccordionPanel bgColor="gray.50" pb={4}>
        <Input
          placeholder="Écrivez le titre de cet élément"
          display={showEditTitle ? `none` : `inline`}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Select2
          label="Sélectionner un medécin"
          data={selectValue}
          name={`${name}.medecin_destiantaire_id`}
        />
        <TextareaForm
          name={`${name}.description`}
          label="Contenu de lettre"
          required="Il est requis de compléter ce champ"
        />
      </AccordionPanel>
    </AccordionItem>
  );
};
