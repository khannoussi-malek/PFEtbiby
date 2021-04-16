import React, { useState } from "react";
import { useField } from "@formiz/core";
import {
  FormControl,
  FormLabel,
  FormHelperText,
  Text,
  Button,
} from "@chakra-ui/react";
import { HiCloudUpload } from "react-icons/hi";
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
    setPictures(e.target.files[0]);
  };
  const [isTouched, setIsTouched] = React.useState(false);
  const showError = !isValid && (isTouched || isSubmitted);
  return (
    <FormControl>
      <FormLabel htmlFor={id}>
        <Button
          leftIcon={<HiCloudUpload />}
          onClick={() => {
            document.getElementById(id).click();
          }}
        >
          Changer la photo {!!required && " *"}
        </Button>
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
        style={{ display: "none" }}
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
