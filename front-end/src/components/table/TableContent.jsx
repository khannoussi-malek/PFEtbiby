import {
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
  const { header, content, fntable, message } = props;
  return (
    <React.Fragment>
      <Box
        display={!!content && content.length != 0 ? `none` : ``}
        maxW="2xl"
        mx="auto"
        px={{ base: "6", lg: "8" }}
        py={{ base: "16", sm: "20" }}
        textAlign="center"
      >
        {!!message ? (
          message()
        ) : (
          <>
            <Heading
              as="h2"
              size="lg"
              fontWeight="extrabold"
              letterSpacing="tight"
            >
              Vous n'avez aucun information
            </Heading>
          </>
        )}
      </Box>
      <Table
        overflowX="scroll"
        w="100%"
        display={content.length == 0 ? `none` : ``}
        my="8"
        borderWidth="1px"
        fontSize="sm"
      >
        <Thead bg={mode("green.100", "gray.800")}>
          <Tr textAlign="center">
            {header.map((column, index) => (
              <Th
                maxW="10%"
                whiteSpace="nowrap"
                scope="col"
                color={mode("green.900", "gray.50")}
                key={index}
              >
                {column}
              </Th>
            ))}
            {!!fntable ? (
              <Th textAlign="center" color={mode("green.900", "gray.50")}>
                acte
              </Th>
            ) : (
              ``
            )}
          </Tr>
        </Thead>
        <Tbody>
          {content.map((row, index) => (
            <Tr key={index} whiteSpace="normal">
              {Object.values(row)
                .slice(1)
                .map((column, indexcol) =>
                  indexcol < Object.values(header).length ? (
                    <Td maxW="100px" whiteSpace="nowrap" key={indexcol}>
                      {column}
                    </Td>
                  ) : null
                )}
              {!!fntable ? (
                <Td textAlign="right">
                  <Box textAlign="center">
                    {!!fntable ? fntable.fn(row) : ``}
                    {!!fntable ? !!fntable.fn2 && fntable.fn2(row) : ``}
                  </Box>
                  <Box textAlign="center">
                    {!!fntable ? !!fntable.fn3 && fntable.fn3(row) : ``}
                  </Box>
                </Td>
              ) : (
                ``
              )}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </React.Fragment>
  );
};
