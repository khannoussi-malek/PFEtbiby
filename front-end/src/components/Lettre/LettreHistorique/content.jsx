import React, { useState, useContext } from "react";
import { useToast } from "@chakra-ui/react";

import { TbibyContext } from "../../../router/context";
import { TableContent } from "../../table/TableContent";
import { TablePagination } from "../../table/TablePagination";
import { useHistoriqueListLettre } from "./../../../services/api/Historique patient/index";
const ContentLetter = (props) => {
  const { user, cleanUser } = useContext(TbibyContext);
  const { patient } = props;

  const toast = useToast();
  const medecin_id = user.id;
  const [total, setTotal] = useState(0);
  const [next, setNext] = useState("");
  const [prev, setPrev] = useState("");
  const [page, setPage] = useState(1);

  const header = ["Description", "Date"];
  const [content, setContent] = useState([[""]]);

  const params = { medecin_id, patient_id: patient.id, page };
  const btnRef = React.useRef();
  const { isLoading: isLodingLettre, refetch: refetchLettre } =
    useHistoriqueListLettre({
      params,
      onError: (error) => {
        toast({
          title: ":Problème de connexion",
          description: " Il y a un problème de connexion",
          status: "success",
          duration: 4000,
          isClosable: true,
        });
      },
      onSuccess: (res) => {
        setTotal(res.data.total);
        setNext(res.data.next_page_url);
        setPrev(res.data.prev_page_url);
        res.data.data !== [] && setContent(res.data.data);
      },
    });

  return (
    <>
      <TableContent header={header} content={content} />
      <TablePagination
        total={total}
        next_page_url={next}
        prev_page_url={prev}
        page={page}
        setPage={setPage}
      />
    </>
  );
};
export default ContentLetter;
