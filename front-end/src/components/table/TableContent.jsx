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

export const TableContent = (props) => {
  return (
    <Table my="8" borderWidth="1px" fontSize="sm">
      <Thead bg={mode("gray.50", "gray.800")}>
        <Tr>
          {props.header.map((column, index) => (
            <Th whiteSpace="nowrap" scope="col" key={index}>
              {column}
            </Th>
          ))}
          <Th />
        </Tr>
      </Thead>
      <Tbody>
        {props.content.map((row, index) => (
          <Tr key={index}>
            {Object.values(row)
              .slice(1)
              .map((column, indexcol) => {
                return (
                  <Td whiteSpace="nowrap" key={indexcol}>
                    {column}
                  </Td>
                );
              })}
            <Td textAlign="right">
              {/* <Button variant="link" colorScheme="blue">
                Edit
              </Button> */}
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};
