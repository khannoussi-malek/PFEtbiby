import { CloseButton } from "@chakra-ui/close-button";
import { Box } from "@chakra-ui/layout";
import { useState } from "react";
import { TextareaForm } from "./../../formInput/Textarea";
import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
} from "@chakra-ui/accordion";
import { Input, useColorModeValue as mode } from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import { MyField } from "../../formInput";
export const AntecedantsForm = (props) => {
  const { id, removeComponentsForm, name } = props;
  const [title, setTitle] = useState("");
  const [showEditTitle, setShowEditTitle] = useState(true);

  return (
    <AccordionItem boxShadow="lg">
      <AccordionButton>
        <Box flex="1" textAlign="left">
          {title != "" ? title : `Antecedant`}
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
      <AccordionPanel bgColor={mode("green.50", "gray.700")} pb={4}>
        <MyField name={`${name}.type`} label="type de antecedant" />
        <TextareaForm
          name={`${name}.description`}
          label="description de antecedant"
        />
      </AccordionPanel>
    </AccordionItem>
  );
};
