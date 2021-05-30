import { CloseButton } from "@chakra-ui/close-button";
import { Box, Center, Code } from "@chakra-ui/layout";
import React, { useState } from "react";
import ReactDOMServer from "react-dom/server";
import {
  useColorModeValue as mode,
  SimpleGrid,
  Button,
} from "@chakra-ui/react";
import { Select2 } from "./../formInput/select";
import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
} from "@chakra-ui/accordion";
import { Input } from "@chakra-ui/input";
import { RiPrinterFill } from "react-icons/ri";
import { EditIcon } from "@chakra-ui/icons";
import { InputDateRange } from "./../formInput/range";
import { useGetListeMedicamentSelect2 } from "./../../services/api/list medicament";
import { useToast } from "@chakra-ui/react";
import { MyField } from "./../formInput";
import AjoutMedicament from "./../medicament";
import { useField } from "@formiz/core";
export const Ordonnance = (props) => {
  const { id, removeComponentsForm, name, MyForm } = props;
  const toast = useToast();
  const [title, setTitle] = useState("");
  const [selectValue, setSelectValue] = useState([]);
  const [showEditTitle, setShowEditTitle] = useState(true);
  const { values } = MyForm;
  const ordonnanceImprime = () => {
    let ord = values.ordonnances;
    return (
      <Box>
        {ord != [] && ord != null
          ? ord.map((value) => (
              <>
                {value != null ? (
                  <Box>
                    {!!value.medicament_id &&
                      `Medicament :  ${value.medicament_id.label}`}

                    {!!value.NBR_FOIS_JOURS &&
                      ` | Quantité :  ${value.NBR_FOIS_JOURS.label}`}
                    {!!value.duree_entre_chaque_medicament &&
                      ` | Durée entre chaque medicament :  ${value.duree_entre_chaque_medicament}`}

                    {!!value.lorsqueVousPrenezLeMedicament &&
                      ` | Utilisation :  ${value.lorsqueVousPrenezLeMedicament}`}
                  </Box>
                ) : (
                  ``
                )}
              </>
            ))
          : ``}
      </Box>
    );
  };

  const print = () => {
    const mywindow = window.open("", "PRINT");

    mywindow.document.write(
      ReactDOMServer.renderToStaticMarkup(ordonnanceImprime())
    );

    mywindow.document.close(); // necessary for IE >= 10

    mywindow.focus(); // necessary for IE >= 10*/
    mywindow.addEventListener("afterprint", function (event) {
      mywindow.close();
    });
    mywindow.print();
  };

  const { refetch } = useGetListeMedicamentSelect2({
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
      setSelectValue(res.data);
    },
  });
  return (
    <AccordionItem boxShadow="lg">
      <AccordionButton>
        <Box flex="1" textAlign="left">
          {title != "" ? title : `Medicament`}
          <EditIcon
            mx={5}
            onClick={(event) => {
              event.stopPropagation();
              setShowEditTitle(!showEditTitle);
            }}
          />
        </Box>
        <AccordionIcon mx={3} />
        <Input
          placeholder="Écrivez le titre de cet élément"
          display={showEditTitle ? `none` : `inline`}
          onChange={(e) => setTitle(e.target.value)}
        />
        <CloseButton
          onClick={() => removeComponentsForm(id)}
          colorScheme="red"
          bgColor="red.300"
          float="right"
        />
      </AccordionButton>
      <AccordionPanel bgColor={mode("green.50", "gray.700")} pb={4}>
        <Center>
          <AjoutMedicament refetch={refetch} />
        </Center>
        {MyForm.isValid ? (
          <Button
            onClick={print}
            variant="outline"
            colorScheme="teal"
            size="lg"
          >
            <RiPrinterFill />
          </Button>
        ) : (
          <Center pt={3}>
            <Code colorScheme="red" p={2}>
              remplissez les champs nécessaire puis imprimer l'ordonnance
            </Code>
          </Center>
        )}
        <InputDateRange
          name={`${name}.duree`}
          label="Durée"
          required="le champ durée est obligatoire"
        />
        <Select2
          label="Sélectionner une medicament"
          data={selectValue}
          name={`${name}.medicament_id`}
          required=" 💊le champ nom de medicament est obligatoire"
        />
        <MyField
          name={`${name}.duree_entre_chaque_medicament`}
          label="Durée entre chaque medicament"
        />
        <SimpleGrid columns={{ lg: 1, xl: 2 }} spacing={2}>
          <Select2
            name={`${name}.NBR_FOIS_JOURS`}
            label="Nombre de fois par jour"
            data={[
              { label: "1", value: 1 },
              { label: "2", value: 2 },
              { label: "3", value: 3 },
              { label: "4", value: 4 },
              { label: "5", value: 5 },
              { label: "6", value: 6 },
              { label: "7", value: 7 },
              { label: "8", value: 8 },
              { label: "9", value: 9 },
              { label: "10", value: 10 },
            ]}
          />
          <MyField
            name={`${name}.lorsqueVousPrenezLeMedicament`}
            label="Utilisation des médicaments"
          />
        </SimpleGrid>
      </AccordionPanel>
    </AccordionItem>
  );
};
