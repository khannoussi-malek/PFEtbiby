import React,{useEffect, useState,useRef, HTMLAttributes} from "react";
import DatePicker from "react-datepicker"; 
import { useField } from "@formiz/core";
import "react-datepicker/dist/react-datepicker.css";
import "./date-picker.css"
import {
  FormControl,
  FormLabel,
  FormHelperText,
  Text,
  Input,
} from "@chakra-ui/react";
export const InputDate = (props) => {
  const [startDate, setStartDate] = useState(new Date());

  const { errorMessage, id, isValid, isSubmitted, setValue, value } = useField(
    props
  );
  
  const { label, type, required, note } = props;
  const [isTouched, setIsTouched] = React.useState(true);
  const showError = !isValid && (isTouched || isSubmitted);
  return (
    // // <FormControl>
    //   {/* <FormLabel htmlFor={id}>
    //     {label}
    //     {!!required && " *"}
    //   </FormLabel> */}
      <DatePicker selected={startDate} onChange={date => setStartDate(date)}
      id={id}
      value={value}
      dateFormat="yyyy-MM-dd"
      onBlur={() => setIsTouched(true)}
       />

    //   {showError && (
    //     <Text id={`${id}-error`} color="tomato">
    //       🕵 {errorMessage}
    //     </Text>
    //   )}

    //   {note && <FormHelperText id={`${id}-note`}>{note}</FormHelperText>}
    // </FormControl>
  );
};

