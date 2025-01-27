"use client";
import Link from "next/link";
import React from "react";
import { Input } from "../Input";
import { SearchIcon } from "../Icons";
import { useHeaderContext } from "@/context/HeaderProvider";

const HeaderIcons = () => {
  const { isSmallScreen } = useHeaderContext();
  return (
    <div className="flex flex-col">
      <div className="flex cursor-pointer ">
        {!isSmallScreen && (
          <div className="flex items-center md:gap-[40px] ">
            <div className="flex md:gap-[40px]  cursor-pointer ">
              <Link href="/">
                <div className="flex gap-1 items-center flex-col hover:scale-110 transition duration-100 group ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 36 36"
                    fill="none"
                    className="sm:w-[20px] sm:h-[20px] lg:w-[26px] lg:h-[26px]"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18 3.75L3.75 15V30H12V21H24V30H32.25V15L18 3.75ZM18 7.5L7.5 15.75V27H10.5V18H25.5V27H28.5V15.75L18 7.5Z"
                      className="fill-[#898686] group-hover:fill-[#4a4a4a]"
                    />
                  </svg>
                  <h3 className="text-[12px] text-[#898686] group-hover:text-[#4a4a4a] ">
                    Home
                  </h3>
                </div>
              </Link>
              <Link href={"/contact"}>
                <div className="flex gap-1 items-center flex-col hover:scale-110 transition duration-100 group ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 36 36"
                    fill="none"
                    className="sm:w-[20px] sm:h-[20px] lg:w-[26px] lg:h-[26px]"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18 3.75C12.615 3.75 8.25 8.115 8.25 13.5C8.25 18.885 12.615 23.25 18 23.25C23.385 23.25 27.75 18.885 27.75 13.5C27.75 8.115 23.385 3.75 18 3.75ZM5.25 13.5C5.25 6.6 10.6 1.25 17.5 1.25C24.4 1.25 29.75 6.6 29.75 13.5C29.75 20.4 24.4 25.75 17.5 25.75C10.6 25.75 5.25 20.4 5.25 13.5ZM18 15.75C20.071 15.75 21.75 14.071 21.75 12C21.75 9.929 20.071 8.25 18 8.25C15.929 8.25 14.25 9.929 14.25 12C14.25 14.071 15.929 15.75 18 15.75ZM12.75 12C12.75 8.686 15.436 6 18.75 6C22.064 6 24.75 8.686 24.75 12C24.75 15.314 22.064 18 18.75 18C15.436 18 12.75 15.314 12.75 12Z"
                      className="fill-[#898686] group-hover:fill-[#4a4a4a]"
                    />
                  </svg>
                  <h3 className="text-[12px] text-[#898686] group-hover:text-[#4a4a4a]">
                    Contact
                  </h3>
                </div>
              </Link>
              <Link href={"/about"}>
                <div className="flex flex-col items-center gap-1 hover:scale-110 transition duration-100 group ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 36 36"
                    fill="none"
                    className="sm:w-[20px] sm:h-[20px] lg:w-[26px] lg:h-[26px]"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18 3.75C10.125 3.75 3.75 10.125 3.75 18C3.75 25.875 10.125 32.25 18 32.25C25.875 32.25 32.25 25.875 32.25 18C32.25 10.125 25.875 3.75 18 3.75ZM1.5 18C1.5 8.8875 8.8875 1.5 18 1.5C27.1125 1.5 34.5 8.8875 34.5 18C34.5 27.1125 27.1125 34.5 18 34.5C8.8875 34.5 1.5 27.1125 1.5 18ZM18 12.75C19.2425 12.75 20.25 11.7425 20.25 10.5C20.25 9.2575 19.2425 8.25 18 8.25C16.7575 8.25 15.75 9.2575 15.75 10.5C15.75 11.7425 16.7575 12.75 18 12.75ZM18 15.75C17.175 15.75 16.5 16.425 16.5 17.25V24.75C16.5 25.575 17.175 26.25 18 26.25C18.825 26.25 19.5 25.575 19.5 24.75V17.25C19.5 16.425 18.825 15.75 18 15.75Z"
                      className="fill-[#898686] group-hover:fill-[#4a4a4a]"
                    />
                  </svg>
                  <h3 className="text-[12px] text-[#898686] group-hover:text-[#4a4a4a]">
                    About{" "}
                  </h3>
                </div>
              </Link>
              <Link href="/login">
                <div className="flex flex-col items-center gap-1 hover:scale-110 transition duration-100 group ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 36 36"
                    fill="none"
                    className="sm:w-[20px] sm:h-[20px] lg:w-[26px] lg:h-[26px]"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18 3.75C13.995 3.75 10.75 6.995 10.75 11C10.75 15.005 13.995 18.25 18 18.25C22.005 18.25 25.25 15.005 25.25 11C25.25 6.995 22.005 3.75 18 3.75ZM7.25 11C7.25 5.34 11.84 0.75 17.5 0.75C23.16 0.75 27.75 5.34 27.75 11C27.75 16.66 23.16 21.25 17.5 21.25C11.84 21.25 7.25 16.66 7.25 11ZM18 24.75C12.615 24.75 8.25 29.115 8.25 34.5H10.75C10.75 30.685 13.935 27.5 17.75 27.5H18.25C22.065 27.5 25.25 30.685 25.25 34.5H27.75C27.75 29.115 23.385 24.75 18 24.75Z"
                      className="fill-[#898686] group-hover:fill-[#4a4a4a]"
                    />
                  </svg>
                  <h3 className="text-[12px] text-[#898686] group-hover:text-[#4a4a4a]">
                    Sign In
                  </h3>
                </div>
              </Link>
            </div>
            <div>
              <Input
                type="text"
                placeholder="What are you looking for?"
                size="xs"
                icon={<SearchIcon />}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeaderIcons;
