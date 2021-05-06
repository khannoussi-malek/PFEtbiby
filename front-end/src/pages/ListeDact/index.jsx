import React, { useContext, useState } from "react";
import { TbibyContext } from "./../../router/context/index";
import { TableContent } from "./../../components/table/TableContent";
import { TablePagination } from "./../../components/table/TablePagination";

import { useToast, Center, Box, Spinner } from "@chakra-ui/react";
import AjoutActe from "../../components/Acte/_parcial/AjoutActe";
import { useGetListActe } from "../../services/api/acte";
import UpdateAct from "./../../components/Acte/_parcial/UpdateAct";
const ListeDact = () => {
  const { user } = useContext(TbibyContext);
  const [content, setContent] = useState([[""]]);
  const [total, setTotal] = useState(0);
  const [next, setNext] = useState("");
  const [prev, setPrev] = useState("");
  const [page, setPage] = useState(1);
  const toast = useToast();

  const params = { page };
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
