import React, { useState } from "react";
import { Center, Box, Image, Button, Heading, Grid } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import { TableActions } from "./../../components/table/TableActions";
import { TableContent } from "./../../components/table/TableContent";
import { TablePagination } from "./../../components/table/TablePagination";
const Rappel = () => {
  const [Typeofresearch, setTypeofresearch] = useState("medicament");
  let history = useHistory();
  //costom mel api eli bach ta3mlou
  let header = [];
  //el res mta3 el api bach tet7at hna
  let content = [];
  return (
    <Box as="section" py={{ base: 0, md: "12" }} w="100%">
      <Grid templateColumns="repeat(2, 1fr)" gap={2}>
        <Button
          mx={10}
          onClick={() => {
            setTypeofresearch("consultation");
          }}
        >
          🩺 consultation
        </Button>
        <Button
          mx={10}
          onClick={() => {
            setTypeofresearch("medicament");
          }}
        >
          medicament 💊
        </Button>
      </Grid>

      <Box
        maxW={{ base: "xl", md: "7xl" }}
        mx="auto"
        px={{ base: "1", md: "8" }}
      >
        <Box>
          <Heading size="lg" mb="6">
            Contact
          </Heading>
          {/* <TableActions /> */}
          <TableContent header={header} content={content} />
          <TablePagination />
        </Box>
      </Box>
    </Box>
  );
};
export default Rappel;
