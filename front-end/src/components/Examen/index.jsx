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
import { MyField } from "../formInput";
import { Prix } from "../formInput/Prix";
export const Examen = (props) => {
  const { id, removeComponentsForm, name } = props;
  const [title, setTitle] = useState("");
  const [showEditTitle, setShowEditTitle] = useState(true);

  return (
    <AccordionItem boxShadow="lg">
      <AccordionButton>
        <Box flex="1" textAlign="left">
          {title != "" ? title : `Examen`}
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
      <AccordionPanel pb={4}>
        <MyField
          name={`${name}.type`}
          label="Type d'examen"
          required="Il est requis de compléter ce champ"
        />
        <TextareaForm
          name={`${name}.note`}
          label="Note d'examen"
          required="Il est requis de compléter ce champ"
        />
        <Prix
          name={`${name}.prix`}
          label="Prix d'examen"
          required="Il est requis de compléter ce champ"
        />
      </AccordionPanel>
    </AccordionItem>
  );
};
