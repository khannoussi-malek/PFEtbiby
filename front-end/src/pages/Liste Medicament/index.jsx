import React, { useContext, useState } from "react";

import { useToast, Center, Box, Spinner } from "@chakra-ui/react";
import { useListMedicament } from "../../services/api/list medicament";
import AjoutMedicament from "./../../components/medicament";
import { TbibyContext } from "./../../router/context";
import { TableContent } from "./../../components/table/TableContent";
import { TablePagination } from "./../../components/table/TablePagination";
const ListeMedicament = () => {
  const { user } = useContext(TbibyContext);
  const [content, setContent] = useState([[""]]);
  const [total, setTotal] = useState(0);
  const [next, setNext] = useState("");
  const [prev, setPrev] = useState("");
  const [page, setPage] = useState(1);
  const toast = useToast();

  const params = { page: page };
  const { isLoading, refetch } = useListMedicament({
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
  let header = ["nom"];

  return (
    <React.Fragment>
      <Box>
        <Center>
          <AjoutMedicament refetch={refetch} />
        </Center>
        <Spinner
          pt={3}
          display={!isLoading ? `none` : `block`}
          size="xl"
          m="auto"
          color="red.500"
        />
        <Box display={isLoading ? `none` : ``}>
          <TableContent header={header} content={content} />
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
export default ListeMedicament;
