import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/modal";
import { Button, Box } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/hooks";
import { useRef, useContext, useState } from "react";
import { TbibyContext } from "./../../router/context/index";
import {
  useDeleteReservation,
  useValideReservation,
} from "../../services/api/reservation";
import { useToast } from "@chakra-ui/toast";
import { TableContent } from "./../table/TableContent";
import { TablePagination } from "./../table/TablePagination";
import { CheckIcon, CloseIcon } from "@chakra-ui/icons";
import G_Alert from "./../general alert/index";
import { useSendPatientToWaitingRoomEnligne } from "../../services/api/manageTheRoom";

const ConfirmerUnRendezVous = (props) => {
  const { refetchDashboard } = props;
  const { user } = useContext(TbibyContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const toast = useToast();
  const [total, setTotal] = useState(0);
  const [next, setNext] = useState("");
  const [prev, setPrev] = useState("");
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [header, setHeader] = useState(["nom prenom"]);
  const {
    mutate: SPTWRMutate,
    isLoading: SPTWRIsLoading,
  } = useSendPatientToWaitingRoomEnligne({
    onError: (error) => {
      // setMessage("Vérifier l'information qui vous inseri ou votre liste");
    },
    onSuccess: (res) => {
      refetchDashboard();
      refetchlist();
    },
  });
  const params = { medecin_id: user.id };
  const {
    mutate: DeleteMutate,
    isLoading: DeleteIsLoading,
  } = useDeleteReservation({
    onError: (error) => {
      // setMessage("Vérifier l'information qui vous inseri ou votre liste");
    },
    onSuccess: (res) => {
      refetchlist();
      refetchDashboard();
    },
  });
  const [fntable, setFntable] = useState({
    fn2: (data) => (
      <G_Alert
        Header="Supprimer la proposition réservation"
        Body={`Voulez-vous vraiment supprimer cette proposition de réservation avec ${data.nomprenom}`}
        icon={<CloseIcon />}
        colorScheme="teal"
        bg="red.300"
        target={{ id: data.id }}
        fnTodo={DeleteMutate}
        btOK="Effacer"
        btNon="Annuler"
      />
      // <Button mx={1} onClick={() => console.log(data.id)}>
      //   remove
      // </Button>
    ),
    fn: (data) => (
      <G_Alert
        Header="Valude la réservation"
        Body={`Voulez-vous vraiment Valude cette proposition de réservation avec ${data.nomprenom}`}
        icon={<CheckIcon />}
        colorScheme="teal"
        bg="blue.300"
        target={{ id: data.id, etat: "en attente", state: "valide" }}
        fnTodo={SPTWRMutate}
        btOK="Valide"
        submitcolor="gray.50"
        btNon="Annuler"
      />
    ),
  });
  const { isLoading, refetch: refetchlist } = useValideReservation({
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
      refetchDashboard();
    },
  });
  return (
    <>
      <Button
        position="absolute"
        bottom="7%"
        right="4%"
        ref={btnRef}
        colorScheme="teal"
        onClick={onOpen}
      >
        valider un rendez vous
      </Button>
      <Drawer
        size="md"
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>valider un rendez vous</DrawerHeader>

            <DrawerBody>
              <Box display={isLoading ? `none` : ``}>
                <TableContent
                  header={header}
                  content={content}
                  fntable={fntable}
                />
                <TablePagination
                  total={total}
                  next_page_url={next}
                  prev_page_url={prev}
                  page={page}
                  setPage={setPage}
                />
              </Box>
            </DrawerBody>

            <DrawerFooter>
              <Button variant="outline" mr={3} onClick={onClose}>
                Annuler
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};
export default ConfirmerUnRendezVous;
