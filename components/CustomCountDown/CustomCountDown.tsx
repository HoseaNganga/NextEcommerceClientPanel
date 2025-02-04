"use client";
import useCountDown from "@/Hooks/useCountDown";
import React from "react";

const CustomCountDown = () => {
  const { days, hours, minutes, seconds } = useCountDown();

  return (
    <div className="hidden sm:flex sm:justify-between gap-0.5">
      {["Days", "Hours", "Minutes", "Seconds"].map((label, index) => (
        <React.Fragment key={label}>
          <div className="grid place-content-center p-2 sm:p-0">
            <h6 className="text-sm font-semibold sm:text-[12px] md:text-sm ">
              {label}
            </h6>
            <span className="sm:text-sm font-bold text-center sm:text-left ">
              {[days, hours, minutes, seconds][index]}
            </span>
          </div>
          {index < 3 && (
            <div className="grid place-content-center p-2 text-2xl sm:text-sm font-bold text-[#DB4444]">
              :
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default CustomCountDown;
