import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CalendarIcon } from "../../assets";
// import styles from "./DatePickerButton.module.scss";

interface DatePickerProps {
  // your custom props
}

const DatePickerButton: React.FC<DatePickerProps> = (props) => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div>
      <DatePicker
        className="text-primary rounded border bg-light"
        // DatePickerButton props
        selected={startDate}
        onChange={(date: any) => setStartDate(date)}
        showIcon={true}
        // wrapperClassName={styles.datePicker}
      />
    </div>
  );
};

export default DatePickerButton;
