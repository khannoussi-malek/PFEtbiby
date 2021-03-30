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
  const years = makerange(1990, new Date().getFullYear(new Date()));
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const [startDate, setStartDate] = useState(new Date());

  const { errorMessage, id, isValid, isSubmitted, setValue, value } = useField(
    props
  );

  const { label, type, required, note } = props;
  const [isTouched, setIsTouched] = React.useState(true);
  const showError = !isValid && (isTouched || isSubmitted);
  return (
    <React.Fragment>
      <FormControl>
        <FormLabel htmlFor={id}>
          {label}
          {!!required && " *"}
        </FormLabel>

        <DatePicker
          renderCustomHeader={({
            date,
            changeYear,
            changeMonth,
            decreaseMonth,
            increaseMonth,
            prevMonthButtonDisabled,
            nextMonthButtonDisabled,
          }) => (
            <div
              style={{
                margin: 10,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <button
                onClick={decreaseMonth}
                disabled={prevMonthButtonDisabled}
              >
                {"<"}
              </button>
              <select
                value={date.getYear(date)}
                onChange={({ target: { value } }) => changeYear(value)}
              >
                {years.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>

              <select
                value={months[date.getMonth(date)]}
                onChange={({ target: { value } }) =>
                  changeMonth(months.indexOf(value))
                }
              >
                {months.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>

              <button
                onClick={increaseMonth}
                disabled={nextMonthButtonDisabled}
              >
                {">"}
              </button>
            </div>
          )}
          id={id}
          onBlur={() => setIsTouched(true)}
          dateFormat="yyyy-MM-dd"
          selected={startDate}
          value={value}
          onChange={(date) => setValue(date.toISOString().slice(0, 10))}
        />

        {showError && (
          <Text id={`${id}-error`} color="tomato">
            🕵 {errorMessage}
          </Text>
        )}

        {note && <FormHelperText id={`${id}-note`}>{note}</FormHelperText>}
      </FormControl>
    </React.Fragment>
  );
};
