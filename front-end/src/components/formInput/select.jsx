import React, { useState } from "react";
import Select, { components } from "react-select";
// import { colourOptions } from "../data";
import { useField } from "@formiz/core";
import {
  FormControl,
  FormHelperText,
  FormLabel,
} from "@chakra-ui/form-control";
import { Text } from "@chakra-ui/layout";

export const Select2 = (props) => {
  const [clickCount, setClickCount] = useState(0);
  const { errorMessage, id, isValid, isSubmitted, setValue, value } = useField(
    props
  );
  const { data, name, label, required, note } = props;
  const [isTouched, setIsTouched] = React.useState(false);
  const showError = !isValid && (isTouched || isSubmitted);

  const onClick = (e) => {
    setClickCount(clickCount + 1);
    e.preventDefault();
    e.stopPropagation();
  };
  const changeValue = (e) => {
    setValue(e);
  };
  return (
    <FormControl>
      <FormLabel htmlFor={id}>{label}</FormLabel>

      <Select
        id={id}
        isSearchable
        value={value ?? ""}
        name={name}
        placeholder={value}
        onChange={(e) => changeValue(e)}
        options={data}
        onBlur={() => setIsTouched(true)}
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
