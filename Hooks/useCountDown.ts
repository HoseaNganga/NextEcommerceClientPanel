"use client";
import { useEffect, useState } from "react";

const useCountDown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const midNight = new Date();
    midNight.setHours(24, 0, 0, 0); // Set to midnight

    const calcTimeLeft = () => {
      const timeNow = new Date();
      const timeLeftToMidnight = midNight.getTime() - timeNow.getTime();

      if (timeLeftToMidnight <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(timeLeftToMidnight / (1000 * 60 * 60 * 24)),
        hours: Math.floor((timeLeftToMidnight / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((timeLeftToMidnight / (1000 * 60)) % 60),
        seconds: Math.floor((timeLeftToMidnight / 1000) % 60),
      });
    };

    calcTimeLeft();
    const interval = setInterval(calcTimeLeft, 1000);
    return () => clearInterval(interval);
  }, []);

  // Ensure two-digit formatting
  return {
    days: timeLeft.days.toString().padStart(2, "0"),
    hours: timeLeft.hours.toString().padStart(2, "0"),
    minutes: timeLeft.minutes.toString().padStart(2, "0"),
    seconds: timeLeft.seconds.toString().padStart(2, "0"),
  };
};

export default useCountDown;
