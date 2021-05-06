import React, { useContext, useState } from "react";
import { TbibyContext } from "./../../router/context/index";
import { TableContent } from "./../../components/table/TableContent";
import { TablePagination } from "./../../components/table/TablePagination";
import CertificatUpdate from "./../../components/Certificat/CertificatUpdate";

import { useToast, Center, Box } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/hooks";
import AjoutActe from "../../components/Acte/_parcial/AjoutActe";
import { useGetListActe } from "../../services/api/acte";
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
    fn: (data) => (
      <CertificatUpdate
        data={data.structure}
        type={data.type}
        id={data.id}
        cms_users_id={data.cms_users_id}
      />
    ),
  });
  let header = ["code", "designation"];

  return (
    <React.Fragment>
      <Box>
        <Center>
          <AjoutActe user={user} />
        </Center>
        <TableContent header={header} content={content} fntable={fntable} />
        <TablePagination
          total={total}
          next_page_url={next}
          prev_page_url={prev}
          page={page}
          setPage={setPage}
        />
      </Box>
    </React.Fragment>
  );
};
export default ListeDact;
