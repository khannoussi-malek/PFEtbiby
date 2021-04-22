import {
  Button,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Box,
  Text,
  Heading,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import * as React from "react";

export const TableContent = (props) => {
  const { header, content, fntable } = props;
  return (
    <React.Fragment>
      <Box
        display={content.length != 0 ? `none` : ``}
        maxW="2xl"
        mx="auto"
        px={{ base: "6", lg: "8" }}
        py={{ base: "16", sm: "20" }}
        textAlign="center"
      >
        <Heading as="h2" size="lg" fontWeight="extrabold" letterSpacing="tight">
          Vous n'avez aucun patient avec ces informations
        </Heading>
        <Text mt="4" fontSize="lg">
          Si vous n'avez pas ce patient, veuillez l'ajouter en tapant son CIN,
          son email ou son numéro de téléphone dans le champ "Ajouter un
          patient".
        </Text>
      </Box>
      <Table
        overflowX="scroll"
        display={content.length == 0 ? `none` : ``}
        my="8"
        borderWidth="1px"
        fontSize="sm"
      >
        <Thead bg={mode("gray.50", "gray.800")}>
          <Tr>
            {header.map((column, index) => (
              <Th whiteSpace="nowrap" scope="col" key={index}>
                {column}
              </Th>
            ))}
            <Th />
          </Tr>
        </Thead>
        <Tbody>
          {content.map((row, index) => (
            <Tr key={index}>
              {Object.values(row)
                .slice(1)
                .map((column, indexcol) =>
                  indexcol < Object.values(header).length ? (
                    <Td whiteSpace="nowrap" key={indexcol}>
                      {column}
                    </Td>
                  ) : null
                )}
              <Td textAlign="right">
                {!!fntable ? fntable.fn(row) : ``}
                {!!fntable.fn2 ? fntable.fn(row) : ``}
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </React.Fragment>
  );
};
