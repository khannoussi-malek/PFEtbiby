import React, { useState } from "react";
import { useField } from "@formiz/core";
import {
  FormControl,
  FormLabel,
  FormHelperText,
  Text,
  Input,
} from "@chakra-ui/react";
export const ImageFile = (props) => {
  const { errorMessage, id, isValid, isSubmitted } = useField(props);
  const {
    label,
    type,
    required,
    note,
    Placeholder,
    pictures,
    setPictures,
  } = props;
  const onchange = (e) => {
    let files = Array.from(e.target.files);

    let formData = new FormData();

    files.forEach((file, i) => {
      formData.append("image", file);
      formData.append("name", file.name);
    });
    setPictures(formData);
  };
  console.log({ pictures });
  const [isTouched, setIsTouched] = React.useState(false);
  const showError = !isValid && (isTouched || isSubmitted);
  return (
    <FormControl>
      <FormLabel htmlFor={id}>
        {label}
        {!!required && " *"}
      </FormLabel>
      <input
        id={id}
        type="file"
        placeholder={Placeholder || label}
        onChange={(e) => onchange(e)}
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
