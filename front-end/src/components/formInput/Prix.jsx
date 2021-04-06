import React from "react";
import { useField } from "@formiz/core";
import {
  FormControl,
  FormLabel,
  FormHelperText,
  Text,
  Input,
} from "@chakra-ui/react";
export const Prix = (props) => {
  const { errorMessage, id, isValid, isSubmitted, setValue, value } = useField(
    props
  );
  const { label, type, required, note, Placeholder } = props;
  const [isTouched, setIsTouched] = React.useState(false);
  const showError = !isValid && (isTouched || isSubmitted);

  return (
    <FormControl>
      <FormLabel htmlFor={id}>
        {label}
        {!!required && " *"}
      </FormLabel>
      <Input
        min={0}
        id={id}
        type={type || "number"}
        placeholder={Placeholder || label}
        value={value ?? ""}
        onChange={(e) =>
          e.target.value < 0 ? setValue(0) : setValue(e.target.value)
        }
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
