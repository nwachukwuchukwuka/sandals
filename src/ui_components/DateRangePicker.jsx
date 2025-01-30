import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateRangePicker = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  return (
    <div className="relative w-full max-w-[400px] mx-auto mt-8 bg-white p-4 rounded-md shadow-lg">
      <h3 className="text-lg font-semibold text-gray-700 mb-4">Select Check-In & Check-Out Dates</h3>
      <div className="flex space-x-4 items-center">
        {/* Start Date Picker */}
        <div className="w-1/2">
          <label className="block text-sm font-medium text-gray-600 mb-2">Check-In</label>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            placeholderText="Start Date"
            className="w-full border border-gray-300 px-4 py-2 text-gray-700 bg-white rounded-md"
          />
        </div>

        {/* End Date Picker */}
        <div className="w-1/2">
          <label className="block text-sm font-medium text-gray-600 mb-2">Check-Out</label>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            placeholderText="End Date"
            className="w-full border border-gray-300 px-4 py-2 text-gray-700 bg-white rounded-md"
          />
        </div>
      </div>

      {/* Display Selected Dates */}
      <div className="mt-4 text-gray-700">
        {startDate && endDate ? (
          <p>
            You selected: <strong>{startDate.toLocaleDateString()}</strong> to{" "}
            <strong>{endDate.toLocaleDateString()}</strong>
          </p>
        ) : (
          <p className="text-sm text-gray-500">Please select a date range.</p>
        )}
      </div>
    </div>
  );
};

export default DateRangePicker;
