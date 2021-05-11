import { Select2 } from "./../../components/formInput/select";
import { useState } from "react";
import { useForm, Formiz } from "@formiz/core";
import { useSousDomaine } from "../../services/api/domaine";
import { MdCall } from "react-icons/md";
import { EmailIcon, SearchIcon } from "@chakra-ui/icons";
import {
  Button,
  Grid,
  Box,
  useToast,
  Heading,
  Spinner,
  Center,
  Popover,
  PopoverTrigger,
  Portal,
  PopoverContent,
  PopoverArrow,
  PopoverHeader,
  PopoverCloseButton,
  PopoverBody,
  Avatar,
  Text,
  PopoverFooter,
} from "@chakra-ui/react";
import { useDomaine } from "./../../services/api/domaine/index";
import { TableContent } from "./../../components/table/TableContent";
import { TablePagination } from "./../../components/table/TablePagination";
import { useFindeDoctor } from "./../../services/api/Trouver un medecin/index";
import ReserverUnRendezVous from "../../components/reserver un rendez-vous";
import { link, userImage } from "./../../services/api/index";
import { TableActions } from "./../../components/table/TableActions";
import { useBreakpointValue } from "@chakra-ui/media-query";
import { BiInfoCircle } from "react-icons/bi";
import MedecinInfo from "./../../components/InformationsSurLeMedecin/FromData";
const TrouverUnMedecin = (props) => {
  let header = ["Nom Prenom", "domaine"];
  const isMobile = useBreakpointValue({ base: true, lg: false });

  const [content, setContent] = useState([]);
  const [total, setTotal] = useState(0);
  const [next, setNext] = useState("");
  const [prev, setPrev] = useState("");
  const [page, setPage] = useState(1);
  const [domaine, setDomaine] = useState([]);
  const [DomaineSelected, setDomaineSelected] = useState(-1);
  const [sousDomaineSelected, setSousDomaineSelected] = useState(-1);
  const [sousDomaine, setSousDomaine] = useState([]);
  const [search, setSearch] = useState("");
  const toast = useToast();
  const MyForm = useForm();
  const { values } = MyForm;
  const params = {
    search,
    DomaineSelected,
    sousDomaineSelected,
    page,
  };
  const [fntable, setFntable] = useState({
    fn: (data) => <ReserverUnRendezVous data={data} />,
    fn2: (data) => <MedecinInfo data={data} />,
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
  return (
    <>
      <Formiz connect={MyForm} onValidSubmit={handleSubmit}>
        <form noValidate onSubmit={MyForm.submit}>
          <Grid
            p={3}
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
            <Button
              top="45%"
              onClick={() => {
                setSousDomaineSelected(-1);
                setDomaineSelected(-1);
              }}
            >
              Tous les médecins
            </Button>
          </Grid>
          <Box>
            <Center>
              <Spinner
                display={!isLoadingFindeDoctor ? `none` : ``}
                textAlign="center"
                size="xl"
                m="auto"
                color="red.500"
              />
            </Center>
            <Box display={isLoadingFindeDoctor ? `none` : ``}>
              <TableActions
                buttonText="Chercher"
                buttonIcon={<SearchIcon />}
                chercherFn={setSearch}
              />
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
          </Box>
        </form>
      </Formiz>
    </>
  );
};
export default TrouverUnMedecin;
