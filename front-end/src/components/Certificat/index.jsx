import { CloseButton } from "@chakra-ui/close-button";
import { Box } from "@chakra-ui/layout";
import { useState, useRef, useContext } from "react";
import { Select2 } from "./../formInput/select";
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
import { useToast, useColorModeValue as mode } from "@chakra-ui/react";
import SunEditor from "suneditor-react";
import { TbibyContext } from "./../../router/context/index";
import { usePatentInfo } from "./../../services/api/patient information/index";
import { RiPrinterFill } from "react-icons/ri";
import { IconButton } from "@chakra-ui/button";
import InputSunEditor from "../formInput/SunEditorInput";
export const Certificat = (props) => {
  const { user } = useContext(TbibyContext);
  const [editerValue, setEditerValue] = useState("");
  const editorRef = useRef();
  // editorRef.current.editor.setContents(editerValue);

  const { id, removeComponentsForm, Patient, name, key } = props;
  const [title, setTitle] = useState("");
  const [showEditTitle, setShowEditTitle] = useState(true);
  const toast = useToast();
  const [selectValues, setSelectValues] = useState([]);
  const params = { cms_users_id: user.id };
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
      setPatientInfo(res.data);
    },
  });
  // console.log(patientInfo);

  const replaceAll = (string, search, replace) => {
    return string.split(search).join(replace);
  };

  const decodeMessage = (text) => {
    console.log(Patient);
    let sexesM = user.sexes == "homme" ? `Mr.` : `Mrs.`;
    let sexesP = Patient.sexes == "homme" ? `Mr.` : `Mrs.`;
    text = replaceAll(text, "{sexesPatient}", sexesP);
    text = replaceAll(text, "{medecinNomPrenom}", user.nom + " " + user.prenom);
    text = replaceAll(
      text,
      "{patientNomPrenom}",
      patientInfo.nom + " " + patientInfo.prenom
    );
    text = replaceAll(text, "{addresPatient}", Patient.Adresse);
    text = replaceAll(text, "{sexesmedecin}", sexesM);
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

  const changeValueOfEditer = (e) => {
    refetch();
    setEditerValue(e.value);
    editorRef.current.editor.setContents(decodeMessage(e.value));
  };
  const handleChange = (content) => {
    setEditerValue(content); //Get Content Inside Editor
  };

  const print = () => {
    const mywindow = window.open("", "PRINT");

    mywindow.document.write(decodeMessage(editerValue));

    mywindow.document.close(); // necessary for IE >= 10

    mywindow.focus(); // necessary for IE >= 10*/
    mywindow.addEventListener("afterprint", function (event) {
      mywindow.close();
    });
    mywindow.print();
  };
  return (
    <AccordionItem boxShadow="lg" key={"c" + key}>
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
        <EditerCertificat user={user} />

        <Box py={2}>
          <InputSunEditor
            required={
              "Vous devez écrire un certificat ou simplement le supprimer"
            }
            name={name}
            editorRef={editorRef}
            Patient={Patient}
          />
        </Box>

        <Box py={2}>
          <Select2
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
