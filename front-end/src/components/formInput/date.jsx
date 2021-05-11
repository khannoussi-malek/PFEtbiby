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
export const InputDate = (props) => {
  const makerange = (start, end) => {
    var ans = [];
    for (let i = start; i <= end; i++) {
      ans.push(i);
    }
    return ans;
  };
  const [startDate, setStartDate] = useState(new Date());

  const { errorMessage, id, isValid, isSubmitted, setValue, value } = useField(
    props
  );

  const { label, type, required, note, dValue, SyncWithVariable } = props;
  const [isTouched, setIsTouched] = React.useState(true);
  // const showError = !isValid && (isTouched || isSubmitted);
  return (
    <React.Fragment>
      <FormControl>
        <FormLabel htmlFor={id}>
          {label}
          {!!required && " *"}
        </FormLabel>

        <DatePicker
          selected={startDate}
          peekNextMonth
          showMonthDropdown
          showYearDropdown
          dropdownMode="select"
          id={id}
          onBlur={() => setIsTouched(true)}
          dateFormat="yyyy-MM-dd"
          selected={startDate}
          value={value || dValue}
          onChange={(date) => {
            !!SyncWithVariable && SyncWithVariable(date);
            setValue(date.toISOString().slice(0, 10), setStartDate(date));
          }}
        />
      </FormControl>
    </React.Fragment>
  );
};
