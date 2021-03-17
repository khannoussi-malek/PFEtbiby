import {
  Button,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import * as React from "react";

export const TableContent = (header, content, ...props) => {
  return (
    <Table my="8" borderWidth="1px" fontSize="sm">
      <Thead bg={mode("gray.50", "gray.800")}>
        <Tr>
          {/* map of header
        {columns.map((column, index) => (
            <Th whiteSpace="nowrap" scope="col" key={index}>
              {column.Header}
            </Th>
          ))} */}

          <Th whiteSpace="nowrap" scope="col" key="s4">
            h1
          </Th>
          <Th />
        </Tr>
      </Thead>
      <Tbody>
        <Tr key="a1">
          {/* map of content
        {columns.map((column, index) => (
            <Th whiteSpace="nowrap" scope="col" key={index}>
              {column.Header}
            </Th>
          ))} */}

          <Td whiteSpace="nowrap" key="q1">
            h
          </Td>
          <Td textAlign="right">
            <Button variant="link" colorScheme="blue">
              Edit
            </Button>
          </Td>
        </Tr>
      </Tbody>
    </Table>
  );
};
