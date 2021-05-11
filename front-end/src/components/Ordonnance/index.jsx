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
export const Ordonnance = (props) => {
  const { id, removeComponentsForm } = props;
  const [title, setTitle] = useState("");
  const [showEditTitle, setShowEditTitle] = useState(true);

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
      <AccordionPanel bgColor="gray.50" pb={4}>
        {/* <Select2
          required={"Sélect le type de certifica."}
          label="type de certifica"
          data={[
            {
              label: "Scholeur de certificats",
              value: "Scholeur de certificats",
            },
            {
              label: "Scholeur de certificats2",
              value: "Scholeur de certificats2",
            },
            {
              label: "Scholeur de certificats3",
              value: "Scholeur de certificats3",
            },
          ]}
          name="selectvalue"
        /> */}

        <TextareaForm name="ordonnance" label="contenu d'ordonnance" />
      </AccordionPanel>
    </AccordionItem>
  );
};
