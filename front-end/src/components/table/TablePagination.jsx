import {
  Button,
  ButtonGroup,
  Flex,
  Text,
  Box,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import * as React from "react";

export const TablePagination = (props) => {
  const { total, prev_page_url, next_page_url, setPage, page } = props;

  return (
    <Box px={2} display={total == 0 ? `none` : ``}>
      <Flex align="center" justify="space-between">
        <Text color={mode("gray.600", "gray.400")} fontSize="sm">
          {total} Colonne
        </Text>
        <ButtonGroup variant="outline" size="sm">
          {!!prev_page_url ? (
            <Button as="a" onClick={() => setPage(page - 1)} rel="Précédente">
              Précédente
            </Button>
          ) : (
            ``
          )}
          <Box m={1}> Page {page}</Box>
          {!!next_page_url ? (
            <Button as="a" onClick={() => setPage(page + 1)} rel="Suivante">
              Suivante
            </Button>
          ) : (
            ``
          )}
        </ButtonGroup>
      </Flex>
    </Box>
  );
};
