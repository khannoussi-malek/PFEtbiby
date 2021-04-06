import React from "react";
import { useField } from "@formiz/core";
import {
  FormControl,
  FormLabel,
  FormHelperText,
  Text,
  Input,
} from "@chakra-ui/react";
export const PrixFix = (props) => {
  const { errorMessage, id, isValid, isSubmitted, setValue } = useField(props);
  const { label, type, required, note, Placeholder, value } = props;
  const [isTouched, setIsTouched] = React.useState(false);
  const showError = !isValid && (isTouched || isSubmitted);
  return (
    <FormControl>
      <FormLabel htmlFor={id}>
        {label}
        {!!required && " *"}
      </FormLabel>
      <Input
        color="gray.700"
        id={id}
        type={type || "text"}
        placeholder={Placeholder || label}
        value={value || ""}
        onChange={(e) => setValue(value)}
        onBlur={() => setIsTouched(true)}
        aria-invalid={showError}
        aria-required={!!required}
        aria-describedby={showError ? `${id}-error` : null}
      />

      {showError && (
        <Text id={`${id}-error`} color="tomato">
          {errorMessage}
        </Text>
      )}

      {note && <FormHelperText id={`${id}-note`}>{note}</FormHelperText>}
    </FormControl>
  );
};
