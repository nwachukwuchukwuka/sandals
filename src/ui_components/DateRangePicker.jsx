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
            className="w-full md:w-[300px] justify-start text-left font-normal bg-gray-100 border-none"
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y")} -{" "}
                  {format(date.to, "LLL dd, y")}
                </>
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : (
              <span>Check-in & Check-out</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="md:w-[550px] md:p-10 flex flex-col gap-4" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={new Date()}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
          />
          <div className="flex justify-end gap-2 px-4 pb-4">
            <Button 
              variant="secondary" 
              onClick={handleClear}
              disabled={!date?.from}
            >
              Clear
            </Button>
            <Button 
              variant="default" 
              onClick={handleApply}
              disabled={!date?.from || !date?.to}
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