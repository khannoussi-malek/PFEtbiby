import React, { useEffect, useState, useRef, HTMLAttributes } from "react";
import DatePicker from "react-datepicker";
import { useField } from "@formiz/core";
import "react-datepicker/dist/react-datepicker.css";
import "./date-picker.css";
import {
  FormControl,
  FormLabel,
  FormHelperText,
  Text,
  Input,
} from "@chakra-ui/react";
export const InputDateRange = (props) => {
  const { errorMessage, id, isValid, isSubmitted, setValue, value } =
    useField(props);

  const { label, required } = props;
  const [isTouched, setIsTouched] = React.useState(true);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    if (!!start && !!end) {
      setValue(
        start.toISOString().slice(0, 10) + "|" + end.toISOString().slice(0, 10)
      );
    }
  };
  const showError = !isValid && (isTouched || isSubmitted);
  return (
    <React.Fragment>
      <FormControl>
        <FormLabel htmlFor={id}>
          {label}
          {!!required && " *"}
        </FormLabel>

        <DatePicker
          selected={startDate}
          onChange={onChange}
          startDate={startDate}
          endDate={endDate}
          selectsRange
          inline
          aria-required={!!required}
          onBlur={() => setIsTouched(true)}
        />
      </FormControl>
    </React.Fragment>
  );
};
