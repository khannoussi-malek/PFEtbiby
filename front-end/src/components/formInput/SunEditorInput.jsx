import React, { useState, useContext, useRef } from "react";
import { useField } from "@formiz/core";
import {
  FormControl,
  FormLabel,
  FormHelperText,
  Text,
  useToast,
} from "@chakra-ui/react";
import { TbibyContext } from "./../../router/context";
import SunEditor from "suneditor-react";
import { IconButton } from "@chakra-ui/button";
import { RiPrinterFill } from "react-icons/ri";
import { usePatentInfo } from "./../../services/api/patient information";

const InputSunEditor = (props) => {
  const { user } = useContext(TbibyContext);

  const [editerValue, setEditerValue] = useState("");

  const { errorMessage, id, isValid, isSubmitted, setValue, value } =
    useField(props);
  const {
    label,
    required,
    note,
    Placeholder,
    dtValue,
    Patient,
    editorRef,
    disabled,
  } = props;
  const [isTouched, setIsTouched] = React.useState(false);
  const showError = !isValid && (isTouched || isSubmitted);
  //   const editorRef = useRef();
  const toast = useToast();

  const [patientInfo, setPatientInfo] = useState({});
  const paramsPatentInfo = { cms_users_id: Patient.id };
  const { isLoading: isLodingForPatentInfo, refetch: refetchPatentInfo } =
    usePatentInfo({
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
  const handleChange = (content) => {
    setEditerValue(content); //Get Content Inside Editor
    setValue(content);
  };
  const replaceAll = (string, search, replace) => {
    return string.split(search).join(replace);
  };
  const decodeMessage = (text) => {
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
    <FormControl>
      <FormLabel htmlFor={id}>{label}</FormLabel>
      <SunEditor
        disable={!!disabled}
        ref={editorRef}
        id={id}
        placeholder={
          Placeholder ||
          "S'il vous plaît écrivez votre structure de certificat ici..."
        }
        value={value || dtValue || ""}
        onBlur={() => setIsTouched(true)}
        aria-invalid={showError}
        aria-required={!!required}
        aria-describedby={showError ? `${id}-error` : null}
        lang="fr"
        name="my-editor"
        height="auto"
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
            ["align", "horizontalRule", "list", "lineHeight"],
            ["removeFormat"],
          ],
        }}
      />
      {showError && (
        <Text id={`${id}-error`} color="tomato">
          {errorMessage}
        </Text>
      )}
      <IconButton
        m={2}
        onClick={() => print()}
        variant="outline"
        colorScheme="teal"
        aria-label="Send email"
        icon={<RiPrinterFill />}
        size="lg"
      />

      {note && <FormHelperText id={`${id}-note`}>{note}</FormHelperText>}
    </FormControl>
  );
};
export default InputSunEditor;
