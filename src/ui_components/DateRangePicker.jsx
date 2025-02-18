"use client";

import { useState } from "react";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { CalendarIcon } from "lucide-react";

const DateRangePicker = () => {
  const [date, setDate] = useState({
    from: undefined,
    to: undefined,
  });
  const [isOpen, setIsOpen] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const handleClear = () => {
    setDate({ from: undefined, to: undefined });
  };

  const handleApply = () => {
    setIsOpen(false);
  };

  return (
    <div className="grid gap-2 w-full md:w-[300px]">
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant="outline"
            className="w-full  rounded-none justify-between text-left font-normal bg-gray-100 border-none"
          >
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "EEE, LLL d, yyyy")} -{" "}
                  {format(date.to, "EEE, LLL d, yyyy")}
                </>
              ) : (
                format(date.from, "EEE, LLL d, yyyy")
              )
            ) : (
              <span className="text-gray-700">Check-in & Check-out</span>
            )}
            <CalendarIcon className="mr-2 h-4 w-4" />
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className=" sm:w-full flex flex-col gap-4 relative"
          align="start"
        >
          <Calendar
            initialFocus
            mode="range"
            month={currentMonth}
            onMonthChange={setCurrentMonth}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
            // className="[&_td]:h-16 [&_button]:w-12 [&_button]:h-12 [&_button]:text-lg"
          />
          <select
            value={currentMonth.getFullYear()}
            onChange={(e) => setCurrentMonth(new Date(e.target.value, 0))}
            className="p-1 cursor-pointer bg-gray-100 border-none w-[62px]  absolute top-[26px] left-[200px] md:left-[230px] text-sm font-medium focus:outline-none"
          >
            {[2025, 2026, 2027].map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
          <div className="flex justify-end gap-2 px-4 pb-4">
            <Button
              variant="secondary"
              onClick={handleClear}
              disabled={!date?.from}
              className="w-[150px] rounded-none"
            >
              Clear Dates
            </Button>
            <Button
              variant="default"
              onClick={handleApply}
              disabled={!date?.from || !date?.to}
              className="w-[150px] rounded-none"
            >
              Apply
            </Button>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default DateRangePicker;
