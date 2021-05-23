import React, { useContext, useState, useEffect } from "react";
import { TbibyContext } from "./../../router/context";
import { TableContent } from "./../../components/table/TableContent";
import { TablePagination } from "./../../components/table/TablePagination";

import {
  useToast,
  Center,
  Box,
  Spinner,
  Button,
  ButtonGroup,
  FormControl,
  FormLabel,
  Grid,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Tooltip,
} from "@chakra-ui/react";
import AjoutActe from "../../components/Acte/_parcial/AjoutActe";
import { useGetListActe } from "../../services/api/acte";
import UpdateAct from "./../../components/Acte/_parcial/UpdateAct";
import { RiFolderUserLine } from "react-icons/ri";
import { BsSearch } from "react-icons/bs";
const ListeDact = () => {
  const { user } = useContext(TbibyContext);
  const [content, setContent] = useState([[""]]);
  const [total, setTotal] = useState(0);
  const [next, setNext] = useState("");
  const [prev, setPrev] = useState("");
  const [page, setPage] = useState(1);
  const toast = useToast();

  const [inputValue, setInputValue] = useState("");
  const [params, setParams] = useState({ page });
  const { isLoading, refetch } = useGetListActe({
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
  useEffect(() => {
    refetch();
  }, [params]);
  const [fntable, setFntable] = useState({
    fn: (data) => <UpdateAct data={data} refetch={refetch} />,
  });
  let header = ["code", "designation"];

  return (
    <React.Fragment>
      <Box>
        <Center>
          <AjoutActe refetch={refetch} user={user} />
        </Center>
        <Stack
          pt={10}
          spacing="4"
          direction={{ base: "column", md: "row" }}
          justify="space-between"
        >
          <Grid templateColumns="repeat(2, 1fr)" w="100%" gap={2}>
            <Tooltip
              label={`Écrivez le nom du certificat que vous avez recherché sur ce`}
              aria-label={`Écrivez le nom du certificat que vous avez recherché sur ce`}
            >
              <FormControl w="100%" id="search">
                <InputGroup size="sm">
                  <FormLabel srOnly>Filtrer:</FormLabel>
                  <InputLeftElement pointerEvents="none" color="gray.400">
                    <BsSearch />
                  </InputLeftElement>
                  <Input
                    rounded="base"
                    type="search"
                    onChange={(value) => setInputValue(value.target.value)}
                    placeholder="Filtrer"
                  />
                </InputGroup>
              </FormControl>
            </Tooltip>

            <Tooltip label={`Rechercher 🔎`} aria-label={`Rechercher 🔎`}>
              <ButtonGroup size="sm" variant="outline">
                <Button
                  w="100%"
                  onClick={() => {
                    setParams({ page, recherche: inputValue });
                    // refetch();
                  }}
                  iconSpacing="1"
                  leftIcon={<RiFolderUserLine fontSize="1.25em" />}
                >
                  {"Chercher"}
                </Button>
              </ButtonGroup>
            </Tooltip>
          </Grid>
        </Stack>
        <Spinner
          pt={3}
          display={!isLoading ? `none` : `block`}
          size="xl"
          m="auto"
          color="red.500"
        />
        <Box display={isLoading ? `none` : ``}>
          <TableContent header={header} content={content} fntable={fntable} />
          <TablePagination
            total={total}
            next_page_url={next}
            prev_page_url={prev}
            page={page}
            setPage={setPage}
          />
        </Box>
      </Box>
    </React.Fragment>
  );
};
export default ListeDact;
