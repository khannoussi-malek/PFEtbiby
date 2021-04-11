import { CloseButton } from "@chakra-ui/close-button";
import { Box, Divider } from "@chakra-ui/layout";
import { useState, useRef } from "react";
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
import EditerCertificat from "./editer";
import { useGetCertificat } from "../../services/api/certificat";
import { useToast } from "@chakra-ui/react";
import SunEditor from "suneditor-react";

export const Certificat = (props) => {
  const [editerValue, setEditerValue] = useState("");
  const editorRef = useRef();

  const { id, removeComponentsForm } = props;
  const [title, setTitle] = useState("");
  const [showEditTitle, setShowEditTitle] = useState(true);
  const toast = useToast();
  const [selectValues, setSelectValues] = useState([]);
  const params = {};
  const { isLoading, refetch } = useGetCertificat({
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
      setSelectValues(res.data);
    },
  });
  const changeValueOfEditer = (e) => {
    setEditerValue(e.value);
    console.log(e.value);
    // console.log(editorRef.current.editor.core);
  };
  const handleChange = (content) => {
    setEditerValue(content); //Get Content Inside Editor
  };
  return (
    <AccordionItem boxShadow="lg">
      <AccordionButton>
        <Box flex="1" textAlign="left">
          {title != "" ? title : `Certificat`}
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
        <EditerCertificat />
        <Input
          placeholder="Écrivez le titre de cet élément"
          display={showEditTitle ? `none` : `inline`}
          onChange={(e) => setTitle(e.target.value)}
        />

        <Box py={2}>
          <SunEditor
            ref={editorRef}
            lang="fr"
            name="my-editor"
            height="auto"
            placeholder="S'il vous plaît écrivez votre structure de certificat ici..."
            showToolbar={true}
            values={editerValue}
            onChange={handleChange}
            setOptions={{
              buttonList: [
                [
                  "font",
                  "fontSize",
                  "align",
                  "fontColor",
                  "hiliteColor",
                  "paragraphStyle",
                  "list",
                  "blockquote",
                  "lineHeight",
                  "horizontalRule",
                  "formatBlock",
                ],
              ],
            }}
          />
        </Box>
        <Box py={2}>
          <Select2
            required={"Sélect le type de certifica."}
            label="Type de certificat"
            data={selectValues}
            onChange={(e) => changeValueOfEditer(e)}
            name="selectvalue"
          />
        </Box>
      </AccordionPanel>
    </AccordionItem>
  );
};
