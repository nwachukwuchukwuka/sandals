import React, { useState, useEffect } from "react";
import { ChevronRight } from "lucide-react";

const CountdownBanner = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 1); // Set target to 1 day from now
    targetDate.setHours(0, 0, 0, 0);

    const difference = targetDate - new Date();

    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num) => (num < 10 ? `0${num}` : num);

  return (
    <div className="absolute top-[380px] md:top-[580px] right-[10px] md:right-[87px] w-[95%] md:w-[400px] text-white p-4 z-10 ">
      <div className="flex space-x-4 text-center justify-center bg-black opacity-[70%] pt-2">
        {Object.keys(timeLeft).length > 0 && (
          <>
            <div className="flex items-center ">
              <div className="pr-4 ">
                <p className="text-md md:text-2xl font-light">{formatNumber(timeLeft.days)}</p>
                <span className="text-[14px] ">Days</span>
              </div>
              <div className="border-l border-white h-10 mx-2"></div>
              <div className="pr-4">
                <p className="text-md md:text-2xl font-light">{formatNumber(timeLeft.hours)}</p>
                <span className="text-[14px]">Hours</span>
              </div>
              <div className="border-l border-white h-10 mx-2"></div>
              <div className="pr-4">
                <p className="text-md md:text-2xl font-light">{formatNumber(timeLeft.minutes)}</p>
                <span className="text-[14px]">Min.</span>
              </div>
              <div className="border-l border-white h-10 mx-2"></div>
              <div>
                <p className="text-md md:text-2xl font-light">{formatNumber(timeLeft.seconds)}</p>
                <span className="text-[14px]">Sec.</span>
              </div>
            </div>
          </>
        )}
      </div>

      <div className="flex items-center justify-center space-x-2  md:mt-0 text-black bg-white py-3">
        <p className="text-md ">WINTER BLUES SALE NOW ON</p>
        <div className="border rounded-full border-black">
          <ChevronRight size={20} />
        </div>

      </div>
    </div>
  );
};

export default CountdownBanner;
