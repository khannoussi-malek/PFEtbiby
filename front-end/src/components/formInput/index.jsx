import React from "react";
import { useField } from "@formiz/core";
import {
  FormControl,
  FormLabel,
  FormHelperText,
  Text,
  Input,
} from "@chakra-ui/react";
export const MyField = (props) => {
  const { errorMessage, id, isValid, isSubmitted, setValue, value } = useField(
    props
  );
  const { label, type, required, note } = props;
  const [isTouched, setIsTouched] = React.useState(false);
  const showError = !isValid && (isTouched || isSubmitted);
  return (
    <FormControl p={3} mt={5}>
      <FormLabel htmlFor={id}>
        {label}
        {!!required && " *"}
      </FormLabel>
      <Input
        id={id}
        type={type || "text"}
        value={value ?? ""}
        onChange={(e) => setValue(e.target.value)}
        onBlur={() => setIsTouched(true)}
        aria-invalid={showError}
        aria-required={!!required}
        aria-describedby={showError ? `${id}-error` : null}
      />
      {showError && (
        <Text id={`${id}-error`} color="tomato">
          🕵 {errorMessage}
        </Text>
      )}

      {note && <FormHelperText id={`${id}-note`}>{note}</FormHelperText>}
    </FormControl>
  );
};
