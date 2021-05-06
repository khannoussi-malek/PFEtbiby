import { CloseButton } from "@chakra-ui/close-button";
import { Box, Divider } from "@chakra-ui/layout";
import { useColorModeValue as mode } from "@chakra-ui/react";
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
export const Acte = (props) => {
  const { id, removeComponentsForm, name } = props;
  const [title, setTitle] = useState("");
  const [showEditTitle, setShowEditTitle] = useState(true);

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
          data={[]}
          // onChange={(e) => changeValueOfEditer(e)}
          name="selectvalue"
        />
        <MyField name="code" label="Code" />
        <TextareaForm name="Diagnostic" label="Diagnostic" />
        <TextareaForm name="note" label="Note" />
        <Prix name="prix" label="Prix" />
      </AccordionPanel>
    </AccordionItem>
  );
};
