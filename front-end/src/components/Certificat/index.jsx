import { CloseButton } from "@chakra-ui/close-button";
import { Box, Divider } from "@chakra-ui/layout";
import { useState, useRef, useContext } from "react";
import { Select2 } from "./../formInput/select";
import ReactToPrint from "react-to-print";
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
import { Button, useToast } from "@chakra-ui/react";
import SunEditor from "suneditor-react";
import { TbibyContext } from "./../../router/context/index";
import { usePatentInfo } from "./../../services/api/patient information/index";

export const Certificat = (props) => {
  const { user } = useContext(TbibyContext);
  const [editerValue, setEditerValue] = useState("");
  const editorRef = useRef();
  // editorRef.current.editor.setContents(editerValue);

  const { id, removeComponentsForm, Patient } = props;
  const [title, setTitle] = useState("");
  const [showEditTitle, setShowEditTitle] = useState(true);
  const toast = useToast();
  const [selectValues, setSelectValues] = useState([]);
  const params = {};
  const replaceAll = (string, search, replace) => {
    return string.split(search).join(replace);
  };
  const [patientInfo, setPatientInfo] = useState({});
  const paramsPatentInfo = { cms_users_id: Patient.id };
  const {
    isLoading: isLodingForPatentInfo,
    refetch: refetchPatentInfo,
  } = usePatentInfo({
    params: paramsPatentInfo,
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
      console.log(res);
      setPatientInfo(res.data);
    },
  });
  // console.log(patientInfo);

  const decodeMessage = (text) => {
    var sexesM = user.sexes == "homme" ? `Mr.` : `Mrs.`;
    var sexesP = Patient.sexes == "homme" ? `Mr.` : `Mrs.`;
    text = replaceAll(text, "{sexesPatient}", sexesP);
    text = replaceAll(text, "{medecinNomPrenom}", user.nom + " " + user.prenom);
    text = replaceAll(
      text,
      "{patientNomPrenom}",
      patientInfo.nom + " " + patientInfo.prenom
    );
    text = replaceAll(text, "{addresPatient}", Patient.Adresse);
    text = replaceAll(text, "{sexesmedecin}", Patient.sexesM);
    text = replaceAll(text, "{specialiteMedecin}", "");
    text = replaceAll(text, "{domaineMedecin}", "");
    text = replaceAll(
      text,
      "{datePatient}",
      !!patientInfo.date_naissance
        ? new Date(patientInfo.date_naissance).toISOString().slice(0, 10)
        : ``
    );
    text = replaceAll(
      text,
      "{thisDate}",
      new Date().toISOString().slice(0, 10)
    );

    text = replaceAll(
      text,
      "{agePatient}",
      !!patientInfo.date_naissance
        ? Math.abs(
            new Date(
              Date.now() - new Date(patientInfo.date_naissance).getTime()
            ).getUTCFullYear() - 1970
          )
        : ``
    );

    return text;
  };
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
    refetch();
    setEditerValue(e.value);
    editorRef.current.editor.setContents(decodeMessage(e.value));
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
              height: 200,
              buttonList: [
                ["undo", "redo"],
                [
                  "font",
                  "fontSize",
                  "formatBlock",
                  ":p-More Paragraph-default.more_paragraph",
                ],
                ["paragraphStyle", "blockquote"],
                [
                  "bold",
                  "underline",
                  "italic",
                  "strike",
                  "subscript",
                  "superscript",
                ],
                ["fontColor", "hiliteColor", "textStyle"],
                ["removeFormat"],
                ["print"],
              ],
            }}
          />
        </Box>
        {/* <ReactToPrint
          trigger={() => <Button>print</Button>}
          content={() => editorRef.current.editor.getContents()}
        /> */}

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
