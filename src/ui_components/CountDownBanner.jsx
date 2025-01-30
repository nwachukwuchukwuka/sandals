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
    <div className="absolute top-[300px] md:top-[580px]  md:right-[87px] w-[375px] md:w-[400px] text-white p-4  ">
      <div className="flex space-x-4 text-center justify-center bg-black opacity-[50%] pt-2">
        {Object.keys(timeLeft).length > 0 && (
          <>
            <div className="flex items-center ">
              <div className="pr-4 ">
                <p className="text-lg md:text-2xl font-light">{formatNumber(timeLeft.days)}</p>
                <span className="text-[14px] ">Days</span>
              </div>
              <div className="border-l border-white h-10 mx-2"></div>
              <div className="pr-4">
                <p className="text-lg md:text-2xl font-light">{formatNumber(timeLeft.hours)}</p>
                <span className="text-[14px]">Hours</span>
              </div>
              <div className="border-l border-white h-10 mx-2"></div>
              <div className="pr-4">
                <p className="text-lg md:text-2xl font-light">{formatNumber(timeLeft.minutes)}</p>
                <span className="text-[14px]">Min.</span>
              </div>
              <div className="border-l border-white h-10 mx-2"></div>
              <div>
                <p className="text-lg md:text-2xl font-light">{formatNumber(timeLeft.seconds)}</p>
                <span className="text-[14px]">Sec.</span>
              </div>
            </div>
          </>
        )}
      </div>

      <div className="flex items-center justify-center space-x-2  md:mt-0 text-black bg-white py-3">
        <p className="text-md ">WINTER BLUES SALE NOW ON</p>
        <ChevronRight size={24} />
      </div>
    </div>
  );
};

export default CountdownBanner;
