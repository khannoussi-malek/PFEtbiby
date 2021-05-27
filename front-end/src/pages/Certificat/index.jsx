import React, { useContext, useState, useEffect } from "react";
import { TbibyContext } from "./../../router/context";
import EditerCertificat from "./../../components/Certificat/editer";
import { TableContent } from "./../../components/table/TableContent";
import { useGetListCertificat } from "./../../services/api/certificat";
import { TablePagination } from "./../../components/table/TablePagination";
import CertificatUpdate from "./../../components/Certificat/CertificatUpdate";

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
import { RiFolderUserLine } from "react-icons/ri";
import { BsSearch } from "react-icons/bs";

const CertificatPage = () => {
  const { user } = useContext(TbibyContext);
  const [content, setContent] = useState([[""]]);
  const [total, setTotal] = useState(0);
  const [next, setNext] = useState("");
  const [prev, setPrev] = useState("");
  const [page, setPage] = useState(1);
  const toast = useToast();
  const [inputValue, setInputValue] = useState("");

  const id = user.idMedecin || user.id;
  const [params, setParams] = useState({ id: id, page });
  const { isLoading, refetch } = useGetListCertificat({
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
    fn: (data) => (
      <CertificatUpdate
        refetch={refetch}
        data={data.structure}
        type={data.type}
        id={data.id}
        cms_users_id={data.cms_users_id}
      />
    ),
  });
  let header = ["Nom"];

  return (
    <React.Fragment>
      <Box>
        <Center>
          <EditerCertificat refetch={refetch} user={user} />
        </Center>
        <Spinner
          pt={3}
          display={!isLoading ? `none` : `block`}
          size="xl"
          m="auto"
          color="red.500"
        />
        <Box display={isLoading ? `none` : ``}>
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
                      setParams({ id: id, page, recherche: inputValue });
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
export default CertificatPage;
