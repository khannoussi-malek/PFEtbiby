import {
  Button,
  ButtonGroup,
  FormControl,
  FormLabel,
  Grid,
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Tooltip,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";

export const TableActions = (props) => {
  const {
    chercherFn,
    buttonText,
    buttonIcon,
    buttonhoverTesxt,
    inputhoverTesxt,
  } = props;
  const [inputValue, setInputValue] = useState("");
  return (
    <Stack
      pt={10}
      spacing="4"
      direction={{ base: "column", md: "row" }}
      justify="space-between"
    >
      <Grid templateColumns="repeat(2, 1fr)" w="100%" gap={2}>
        <Tooltip
          label={inputhoverTesxt || ``}
          aria-label={inputhoverTesxt || ``}
        >
          <FormControl w="100%" id="search">
            <InputGroup size="sm">
              <FormLabel srOnly>Filtrer par nom ou par e-mail</FormLabel>
              <InputLeftElement pointerEvents="none" color="gray.400">
                <BsSearch />
              </InputLeftElement>
              <Input
                rounded="base"
                type="search"
                onChange={(value) => setInputValue(value.target.value)}
                placeholder="Filtrer"
              />
            </InputGroup>
          </FormControl>
        </Tooltip>

        <Tooltip
          label={buttonhoverTesxt || ``}
          aria-label={buttonhoverTesxt || ``}
        >
          <ButtonGroup size="sm" variant="outline">
            <Button
              w="100%"
              onClick={() => chercherFn(inputValue)}
              iconSpacing="1"
              leftIcon={buttonIcon}
            >
              {buttonText}
            </Button>
          </ButtonGroup>
        </Tooltip>
      </Grid>
    </Stack>
  );
};
