import React, { useContext, useState, useRef } from "react";
import { TbibyContext } from "./../../router/context/index";
import EditerCertificat from "./../../components/Certificat/editer";
import { TableContent } from "./../../components/table/TableContent";
import { useGetListCertificat } from "./../../services/api/certificat/index";
import { TablePagination } from "./../../components/table/TablePagination";
import CertificatUpdate from "./../../components/Certificat/CertificatUpdate";

import {
  Box,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Spinner,
  useToast,
  Button,
  Portal,
  PopoverFooter,
  Text,
  Avatar,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/hooks";

const CertificatPage = () => {
  const { user } = useContext(TbibyContext);
  const [content, setContent] = useState([[""]]);
  const [total, setTotal] = useState(0);
  const [next, setNext] = useState("");
  const [prev, setPrev] = useState("");
  const [page, setPage] = useState(1);
  const toast = useToast();
  const btnRef = useRef();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const params = { id: user.id, page };
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
      setContent(res.data.data);
    },
  });
  const [fntable, setFntable] = useState({
    fn: (data) => <CertificatUpdate data={data} />,
  });
  let header = ["Nom"];

  return (
    <React.Fragment>
      <EditerCertificat user={user} />
      <TableContent header={header} content={content} fntable={fntable} />
      <TablePagination
        total={total}
        next_page_url={next}
        prev_page_url={prev}
        page={page}
        setPage={setPage}
      />
    </React.Fragment>
  );
};
export default CertificatPage;
