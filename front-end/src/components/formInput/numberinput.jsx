import React, { useEffect } from "react";
import { useField } from "@formiz/core";
import {
  FormControl,
  FormLabel,
  FormHelperText,
  Text,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
export const MyNumberInput = (props) => {
  const { errorMessage, id, isValid, isSubmitted, setValue, value } =
    useField(props);
  const format = (val) => `$` + val;
  const parse = (val) => val.replace(/^\$/, "");
  const { label, required, note, Placeholder, dtValue, name } = props;
  const [isTouched, setIsTouched] = React.useState(false);
  const showError = !isValid && (isTouched || isSubmitted);
  useEffect(() => {
    setValue(dtValue);
  }, [dtValue]);
  return (
    <FormControl>
      <FormLabel htmlFor={id}>
        {label}
        {!!required && " *"}
      </FormLabel>
      <NumberInput
        id={id}
        name={name}
        placeholder={Placeholder || label}
        value={value || dtValue || ""}
        onChange={(valueString) =>
          valueString >= 0 ? setValue(valueString) : ``
        }
        onBlur={() => setIsTouched(true)}
        aria-invalid={showError}
        aria-required={!!required}
        aria-describedby={showError ? `${id}-error` : null}
      >
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>

      {showError && (
        <Text id={`${id}-error`} color="tomato">
          {errorMessage}
        </Text>
      )}

      {note && <FormHelperText id={`${id}-note`}>{note}</FormHelperText>}
    </FormControl>
  );
};
