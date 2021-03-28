import {
  Button,
  ButtonGroup,
  FormControl,
  FormLabel,
  HStack,
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
} from "@chakra-ui/react";
import * as React from "react";
import { BsSearch } from "react-icons/bs";

export const TableActions = (props) => {
  const { chercherFn, buttonText, buttonIcon } = props;
  let inputValue = "";
  return (
    <Stack
      pt={10}
      spacing="4"
      direction={{ base: "column", md: "row" }}
      justify="space-between"
    >
      <HStack>
        <FormControl minW={{ md: "320px" }} id="search">
          <InputGroup size="sm">
            <FormLabel srOnly>Filtrer par nom ou par e-mail</FormLabel>
            <InputLeftElement pointerEvents="none" color="gray.400">
              <BsSearch />
            </InputLeftElement>
            <Input
              rounded="base"
              type="search"
              onChange={(value) => (inputValue = value.target.value)}
              placeholder="Filtrer par nom ou par e-mail"
            />
          </InputGroup>
        </FormControl>
        <Box></Box>
      </HStack>
      <ButtonGroup size="sm" variant="outline">
        <Button
          onClick={() => chercherFn(inputValue)}
          iconSpacing="1"
          leftIcon={buttonIcon}
        >
          {buttonText}
        </Button>
      </ButtonGroup>
    </Stack>
  );
};
