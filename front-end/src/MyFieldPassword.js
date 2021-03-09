import React, { useState } from "react";
import { useField } from "@formiz/core";

import { ViewOffIcon, ViewIcon } from "@chakra-ui/icons";
import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Text,
  InputGroup,
  InputRightElement,
  Button,
} from "@chakra-ui/react";
export const MyFieldPassword = (props) => {
  const [showPassword, setshowPassword] = useState(false);
  const { errorMessage, id, isValid, isSubmitted, setValue, value } = useField(
    props
  );
  const { label, required, note } = props;
  const [isTouched, setIsTouched] = React.useState(false);
  const showError = !isValid && (isTouched || isSubmitted);
  return (
    <FormControl mt={5}>
      <FormLabel htmlFor={id}>
        {label}
        {!!required && " *"}
      </FormLabel>
      <InputGroup>
        <Input
          id={id}
          type={showPassword ? `text` : `password`}
          value={value ?? ""}
          onChange={(e) => setValue(e.target.value)}
          onBlur={() => setIsTouched(true)}
          aria-invalid={showError}
          aria-required={!!required}
          aria-describedby={showError ? `${id}-error` : null}
        />
        <InputRightElement>
          <Button size="sm" onClick={() => setshowPassword(!showPassword)}>
            {showPassword ? <ViewIcon /> : <ViewOffIcon />}
          </Button>
        </InputRightElement>
      </InputGroup>
      {showError && (
        <Text id={`${id}-error`} color="tomato">
          🕵 {errorMessage}
        </Text>
      )}

      {note && <FormHelperText id={`${id}-note`}>{note}</FormHelperText>}
    </FormControl>
  );
};
