import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ko from "date-fns/locale/ko";
import "./DatePickerStyles.css";

export function MyDatePicker({ selected, onChange }) {
  return (
    <div>
      <DatePicker
        selected={selected}
        onChange={onChange}
        locale={ko}
        dateFormat="yyyy.MM.dd"
        placeholderText="yyyy.mm.dd"
        showYearDropdown
        showMonthDropdown
        dropdownMode="select"
        minDate={new Date(2021, 0, 1)}
        maxDate={new Date(2030, 11, 31)}
      />
    </div>
  );
}
