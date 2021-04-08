import { FormControl } from "@chakra-ui/form-control";
import { useForm, Formiz } from "@formiz/core";
import { TextareaForm } from "./../../../components/formInput/Textarea";
import { Box, Button, Divider, SimpleGrid } from "@chakra-ui/react";
// import { MyField } from "./../../../components/formInput/index";
import { PrixFix } from "../../../components/formInput/PrixFix";
import { useState } from "react";
import { Prix } from "./../../../components/formInput/Prix";
import { link } from "./../../../services/api/index";
import { Certificat } from "../../../components/Certificat";
const Form = () => {
  const [prixTotale, setPrixTotale] = useState(0);
  const MyForm = useForm();
  const handleSubmit = (values) => {};
  const [ComponentsForm, setComponentsForm] = useState([]);

  const addToConsultation = (element) => {
    ComponentsForm.push(element);
    setComponentsForm(ComponentsForm);
  };
  return (
    <Formiz connect={MyForm} onValidSubmit={handleSubmit}>
      <form noValidate onSubmit={MyForm.submit}>
        <TextareaForm name="Diagnostic" label="Diagnostic" />
        <Box right={0} w="200px">
          <Prix name="prix" label="prix consultation" value={0} />
        </Box>
        <Divider my={5} />
        {ComponentsForm.map((element, index) => (
          <Box id={"id-" + index} key={"id-" + index}>
            {element}
          </Box>
        ))}
        <Box py={3}>
          <SimpleGrid minChildWidth="70px" spacing="10px">
            <Button onClick={addToConsultation(<Certificat />)}>
              Certificat
            </Button>
            <Button>acte</Button>
            <Button>Examen</Button>
            <Button>Ordonnance</Button>
            <Button>Lettre</Button>
          </SimpleGrid>
        </Box>
        <Divider my={5} />
        <Box right={0} w="200px">
          <PrixFix name="prix_totale" label="prix totale" value={prixTotale} />
        </Box>
        <FormControl mt={5} align="center">
          <Button
            w="40%"
            type="submit"
            borderColor="green.500"
            disabled={!MyForm.isValid}
          >
            Submit
            {!MyForm.isValid ? `` : `👌`}
          </Button>
        </FormControl>
      </form>
    </Formiz>
  );
};
export default Form;
