import { FormControl } from "@chakra-ui/form-control";
import { useForm, Formiz } from "@formiz/core";
import { TextareaForm } from "./../../../components/formInput/Textarea";
import {
  Accordion,
  Box,
  Button,
  CloseButton,
  Divider,
  SimpleGrid,
} from "@chakra-ui/react";
import { FormizStep } from "@formiz/core";

import { PrixFix } from "../../../components/formInput/PrixFix";
import React, { useState } from "react";
import { Prix } from "./../../../components/formInput/Prix";
import { Certificat } from "../../../components/Certificat";
import { Acte } from "../../../components/Acte";
import { Examen } from "../../../components/Examen";
import { Ordonnance } from "./../../../components/Ordonnance/index";
import { Lettre } from "./../../../components/Lettre/index";
import { AntecedantsForm } from "./../../../components/Antecedants/AntecedantsForm";

const Form = (props) => {
  const { Patient } = props;
  const [prixTotale, setPrixTotale] = useState(0);
  const MyForm = useForm();
  const handleSubmit = (values) => {
    console.log(values);
  };
  const [ComponentsForm, setComponentsForm] = useState([]);
  const addelement = (element) => {
    setComponentsForm([...ComponentsForm, element]);
  };
  const removeComponentsForm = (id) => {
    ComponentsForm.splice(ComponentsForm.indexOf(id, 1));
    setComponentsForm([...ComponentsForm]);
  };

  return (
    <Formiz connect={MyForm} onValidSubmit={handleSubmit}>
      <form noValidate onSubmit={MyForm.submit}>
        <div className="demo-form__content">
          <TextareaForm name="Diagnostic" label="Diagnostic" />
          <Box right={0} w="200px">
            <Prix name="prix" label="prix consultation" value={0} />
          </Box>
          <Divider my={5} />
          <Box display={ComponentsForm.length > 0 ? `block` : `none`}>
            Détail
            <CloseButton
              onClick={() => setComponentsForm([])}
              colorScheme="red"
              bgColor="red.200"
              float="right"
              boxShadow="dark-lg"
            />
          </Box>
          <Accordion
            defaultIndex={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
            allowMultiple
          >
            {ComponentsForm.map((element, index) => {
              return React.cloneElement(element, {
                id: index,
                removeComponentsForm: removeComponentsForm,
                Patient: Patient,
                name: "form" + index,
              });
            })}
            {
              [..Certificat,...Act,...].sort((a,b)=>a-b).map(({id,type},index)=>{
                type === "certificat" && <Certificat name={`certificats[${index}]`} age={`certificats`} />
              })
            }
          </Accordion>
          <Box py={3}>
            <SimpleGrid minChildWidth="100px" spacing="10px">
              <Button onClick={() => addelement(<Certificat />)}>
                Certificat
              </Button>
              <Button onClick={() => addelement(<Acte />)}>Acte</Button>
              <Button onClick={() => addelement(<Examen />)}>Examen</Button>
              <Button onClick={() => addelement(<AntecedantsForm />)}>
                Antecedants
              </Button>
              <Button onClick={() => addelement(<Ordonnance />)}>
                Ordonnance
              </Button>
              <Button onClick={() => addelement(<Lettre />)}>Lettre</Button>
            </SimpleGrid>
          </Box>
          <Divider my={5} />
          <Box right={0} w="200px">
            <PrixFix
              name="prix_totale"
              label="prix totale"
              value={prixTotale}
            />
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
        </div>
      </form>
    </Formiz>
  );
};
export default Form;
