import { Select2 } from "./../../components/formInput/select";
import { useState } from "react";
import { useForm, Formiz } from "@formiz/core";
import { useSousDomaine } from "../../services/api/domaine";
import { Button, Grid,Box, useToast, Heading, Text, Link ,Spinner} from "@chakra-ui/react";
import { useDomaine } from "./../../services/api/domaine/index";
import { FormControl } from "@chakra-ui/form-control";
import { TableContent } from "./../../components/table/TableContent";
import { TablePagination } from "./../../components/table/TablePagination";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { useFindeDoctor } from "./../../services/api/Trouver un medecin/index";
import ReserverUnRendezVous from "../../components/reserver un rendez-vous";
const TrouverUnMedecin = (props) => {
  let header = ["Nom", "Prenom"];
  const [content, setContent] = useState([]);
  const [total, setTotal] = useState(0);
  const [next, setNext] = useState("");
  const [prev, setPrev] = useState("");
  const [page, setPage] = useState(1);
  const [domaine, setDomaine] = useState([]);
  const [DomaineSelected, setDomaineSelected] = useState(-1);
  const [sousDomaineSelected, setSousDomaineSelected] = useState(-1);
  const [sousDomaine, setSousDomaine] = useState([]);
  const toast = useToast();
  const MyForm = useForm();
  const { values } = MyForm;
  const params = {
    DomaineSelected,
    sousDomaineSelected,
    page,
  };
  const [fntable, setFntable] = useState({
    fn: (data) => <ReserverUnRendezVous data={data} />,
  });
  const {
    isLoading: isLoadingFindeDoctor,
    refetch: refetchFindeDoctor,
  } = useFindeDoctor({
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
      setTotal(res.data.total);
      setNext(res.data.next_page_url);
      setPrev(res.data.prev_page_url);
      setContent((!!res.data.data && res.data.data) || []);
    },
  });
  const { isLoading, refetch } = useDomaine({
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
      setDomaine(res.data);
      refetchFindeDoctor();
    },
  });
  const param = { id: values.SelectDomaine };
  const { isLoading: isLoadingSousD, mutate: mutateSousD } = useSousDomaine({
    param,
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
      setSousDomaine(res.data);
      refetchFindeDoctor();
    },
  });
  const handleSubmit = (values) => {
    // console.log(values);
  };
  const message = () => {
    return (
      <>
        <Heading as="h2" size="lg" fontWeight="extrabold" letterSpacing="tight">
          Aucun medecin n'existe sous cette spécialité
        </Heading>
      </>
    );
  };
  console.log(isLoadingFindeDoctor);
  return (
    <>
      <Formiz connect={MyForm} onValidSubmit={handleSubmit}>
        <form noValidate onSubmit={MyForm.submit}>
       
          <Grid

            templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
            gap={3}
          >
            <Select2
              data={domaine}
              label="Domaine"
              onChange={(event) => {
                setDomaineSelected(event.value);
                setSousDomaine([]);
                setSousDomaineSelected(-1);
                mutateSousD({ domaine_id: event.value });
              }}
              name="SelectDomaine"
            />
            <Select2
              onChange={(event) => {
                setSousDomaineSelected(event.value);
                refetch();
              }}
              data={sousDomaine}
              label="Sous Domaine"
              name="selectSousDomaine"
            />
          <Button top="45%" onClick={()=>{
            setSousDomaineSelected(-1);
            setDomaineSelected(-1);
          }}>Tous les médecins</Button>

          </Grid>
           <Spinner
        display={!isLoadingFindeDoctor ? `none` : ``}
        size="xl"
        p={5}
        m="auto"
        color="red.500"
      />
<Box 
        display={isLoadingFindeDoctor ? `none` : ``}
>
          <TableContent
          
            header={header}
            content={content}
            fntable={fntable}
            message={message}
          />
          <TablePagination
        total={total}
        next_page_url={next}
        prev_page_url={prev}
        page={page}
        setPage={setPage}
      />
          </Box>
        </form>
      </Formiz>
    </>
  );
};
export default TrouverUnMedecin;
