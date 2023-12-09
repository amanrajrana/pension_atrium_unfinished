import PropTypes from "prop-types";
import DatePicker from "react-datepicker";
import { LuCalendar } from "react-icons/lu";
import "react-datepicker/dist/react-datepicker.css";

/**
 * @fileOverview dateInputField.js
 * @description This file contains the dateInputField component.
 * @module Components/home/dateInputField
 * @see https://reactdatepicker.com/
 */

function DateInputField({ date, setDate }) {
  return (
    <DatePicker
      selected={date}
      onChange={setDate}
      placeholderText="Check-out Date"
      icon={<LuCalendar />}
      showIcon={true}
      closeOnScroll={true}
      calendarIconClassname="absolute !pt-2.5 right-0 text-2xl cursor-pointer text-gray-600 3xl:text-4xl"
      wrapperClassName="w-full"
      className="!px-4 !py-3 border text-sm 3xl:text-2xl border-gray-300 placeholder-placeColor rounded-lg focus:outline-none w-full"
    />
  );
}

DateInputField.propTypes = {
  date: PropTypes.instanceOf(Date),
  setDate: PropTypes.func,
};

export default DateInputField;
