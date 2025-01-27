"use client";

import { useState } from "react";
import { CloseEyeIcon, OpenEyeIcon } from "../Icons/Icons";
import { cn } from "@/utils/tailwind-marge/tailwind_marge";

const variants = {
  primary: "bg-blue-400  text-white",
  disabled: "bg-brand-100 text-white cursor-not-allowed",
  danger: "bg-red-600 text-white hover:bg-red-700",
  success: "bg-green-600 text-white hover:bg-green-700",
  default: "text-gray-700",
  white: "bg-white text-gray-700 border-2 ",
  outline: "hover:bg-gray-100 text-gray-700 border",
};

const sizes = {
  xs: "px-4 py-2 text-sm",
  sm: "px-4 py-3 text-sm",
  md: "px-6 py-3.5 text-base",
  lg: "px-8 py-4 text-lg",
  xl: "px-4 py-3 text-md",
  xl2: "px-10 py-4 text-lg",
  icon: "",
};

type InputProps = React.HTMLAttributes<HTMLInputElement> & {
  id?: string;
  name?: string;
  value?: string | number;
  label?: string;
  min?: string;
  type?: string;
  placeholder?: string;
  error?: string;
  touched?: boolean;
  className?: string;
  testId?: string;
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  autoComplete?: string;
  icon?: React.ReactNode;
  otherProps?: React.HTMLAttributes<HTMLInputElement>;
};

export const Input: React.FC<InputProps> = ({
  id,
  name,
  variant = "default",
  size = "md",
  value,
  label,
  min,
  type = "text",
  placeholder,
  error,
  touched,
  className,
  testId,
  autoComplete,
  icon,
  ...otherProps
}) => {
  const [showPassword, setShowPassword] = useState(true);

  const ShowPasswordInfo = () => {
    return (
      <>
        <div onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? <CloseEyeIcon /> : <OpenEyeIcon />}
        </div>
      </>
    );
  };

  return (
    <div className={cn("flex flex-col items-center mb-1 w-full ", className)}>
      {label && (
        <label
          htmlFor={id}
          className={cn("mb-2 block px-3 font-medium text-sm text-gray-70")}
        >
          <span className="text-md text-center">{label}</span>
        </label>
      )}
      <div className="relative w-full">
        <div>
          {icon && (
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              {icon}
            </div>
          )}
          <input
            autoComplete={autoComplete}
            id={id}
            name={name}
            value={value}
            min={min}
            type={
              type === "password" ? (showPassword ? "password" : "text") : type
            }
            placeholder={placeholder}
            className={cn(
              "w-full items-center border shadow-sm outline-none focus:border-blue-400 focus:ring-blue-400 rounded-full placeholder-gray-400 ",
              variants[variant],
              sizes[size],
              error && touched ? "border-red-500 text-red-500" : ""
            )}
            data-testid={testId}
            {...otherProps}
          />
        </div>
        {type === "password" && (
          <div className="absolute top-3 right-3">
            <ShowPasswordInfo />
          </div>
        )}
      </div>
      {error && touched ? (
        <div className="flex justify-center w-50 mt-2 text-center ">
          <span className="text-red-500 text-sm px-2">{error}</span>
        </div>
      ) : null}
    </div>
  );
};
