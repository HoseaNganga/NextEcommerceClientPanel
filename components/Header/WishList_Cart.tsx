import Link from "next/link";
import React from "react";
import wishlist from "@/assets/images/wishlist.png";
import shoppingcart from "@/assets/images/ShoppingCart.png";
import user from "@/assets/images/user.png";
import Image from "next/image";
import { useHeaderContext } from "@/context/HeaderProvider";

const WishList_Cart = () => {
  const { isSmallScreen, menuOpen, toggleMenu } = useHeaderContext();
  return (
    <>
      {isSmallScreen && (
        <div onClick={toggleMenu}>
          <svg
            className="w-[20px] h-[20px] lg:hidden cursor-pointer"
            viewBox="0 0 24 24"
            fill="#898686"
            stroke="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
      )}
      {menuOpen && isSmallScreen && (
        <div className="flex flex-col absolute w-[180px] h-[200px] right-[8px] rounded-[20px] z-[40] bg-gradient-to-r from-black to-purple-400  justify-center gap-[12px] p-4 ">
          <Link href={"/account"}>
            <div className="flex items-start gap-4 hover:scale-110 transition duration-100 group ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 36 36"
                fill="none"
                className="w-[20px] h-[20px] lg:w-[26px] lg:h-[26px]"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18 3.75C12.615 3.75 8.25 8.115 8.25 13.5C8.25 18.885 12.615 23.25 18 23.25C23.385 23.25 27.75 18.885 27.75 13.5C27.75 8.115 23.385 3.75 18 3.75ZM5.25 13.5C5.25 6.6 10.6 1.25 17.5 1.25C24.4 1.25 29.75 6.6 29.75 13.5C29.75 20.4 24.4 25.75 17.5 25.75C10.6 25.75 5.25 20.4 5.25 13.5ZM18 15.75C20.071 15.75 21.75 14.071 21.75 12C21.75 9.929 20.071 8.25 18 8.25C15.929 8.25 14.25 9.929 14.25 12C14.25 14.071 15.929 15.75 18 15.75ZM12.75 12C12.75 8.686 15.436 6 18.75 6C22.064 6 24.75 8.686 24.75 12C24.75 15.314 22.064 18 18.75 18C15.436 18 12.75 15.314 12.75 12Z"
                  className="fill-[#FFFFFF] group-hover:fill-[#4a4a4a]"
                />
              </svg>
              <h3 className="sm:text-[12px] text-[9px] text-[#FFFFFF] group-hover:text-[#4a4a4a] ">
                Manage Account
              </h3>
            </div>
          </Link>
          <Link href={"/orders"}>
            <div className="flex items-start gap-4 hover:scale-110 transition duration-100 group ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 36 36"
                fill="none"
                className="w-[20px] h-[20px] lg:w-[26px] lg:h-[26px]"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.75 6.75H32.25V9.75H3.75V6.75ZM3.75 13.5H32.25V16.5H3.75V13.5ZM3.75 20.25H32.25V23.25H3.75V20.25ZM3.75 27H32.25V30H3.75V27Z"
                  className="fill-[#FFFFFF] group-hover:fill-[#4a4a4a]"
                />
              </svg>
              <h3 className="sm:text-[12px] text-[9px] text-[#FFFFFF] group-hover:text-[#4a4a4a] ">
                My Orders
              </h3>
            </div>
          </Link>
          <Link href={"/cancellations"}>
            <div className="flex items-start gap-4 hover:scale-110 transition duration-100 group ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 36 36"
                fill="none"
                className="w-[20px] h-[20px] lg:w-[26px] lg:h-[26px]"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18 3.75C10.125 3.75 3.75 10.125 3.75 18C3.75 25.875 10.125 32.25 18 32.25C25.875 32.25 32.25 25.875 32.25 18C32.25 10.125 25.875 3.75 18 3.75ZM1.5 18C1.5 8.8875 8.8875 1.5 18 1.5C27.1125 1.5 34.5 8.8875 34.5 18C34.5 27.1125 27.1125 34.5 18 34.5C8.8875 34.5 1.5 27.1125 1.5 18ZM24.75 11.25L11.25 24.75M11.25 11.25L24.75 24.75"
                  className="fill-[#FFFFFF] group-hover:fill-[#4a4a4a]"
                />
              </svg>
              <h3 className="sm:text-[12px] text-[9px] text-[#FFFFFF] group-hover:text-[#4a4a4a] ">
                My Cancellations
              </h3>
            </div>
          </Link>
          <Link href={"/reviews"}>
            <div className="flex items-start gap-4 hover:scale-110 transition duration-100 group ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 36 36"
                fill="none"
                className="w-[20px] h-[20px] lg:w-[26px] lg:h-[26px]"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18 3.75C10.125 3.75 3.75 10.125 3.75 18C3.75 25.875 10.125 32.25 18 32.25C25.875 32.25 32.25 25.875 32.25 18C32.25 10.125 25.875 3.75 18 3.75ZM1.5 18C1.5 8.8875 8.8875 1.5 18 1.5C27.1125 1.5 34.5 8.8875 34.5 18C34.5 27.1125 27.1125 34.5 18 34.5C8.8875 34.5 1.5 27.1125 1.5 18ZM18 12.75C19.2425 12.75 20.25 11.7425 20.25 10.5C20.25 9.2575 19.2425 8.25 18 8.25C16.7575 8.25 15.75 9.2575 15.75 10.5C15.75 11.7425 16.7575 12.75 18 12.75ZM18 15.75C17.175 15.75 16.5 16.425 16.5 17.25V24.75C16.5 25.575 17.175 26.25 18 26.25C18.825 26.25 19.5 25.575 19.5 24.75V17.25C19.5 16.425 18.825 15.75 18 15.75Z"
                  className="fill-[#FFFFFF] group-hover:fill-[#4a4a4a]"
                />
              </svg>

              <h3 className="sm:text-[12px] text-[9px] text-[#FFFFFF] group-hover:text-[#4a4a4a] ">
                My Reviews
              </h3>
            </div>
          </Link>
          <Link href={"/logout"}>
            <div className="flex items-start gap-4 hover:scale-110 transition duration-100 group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 36 36"
                fill="none"
                className="w-[20px] h-[20px] lg:w-[26px] lg:h-[26px]"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M13.5 3.75H27.75V32.25H13.5V27H10.5V30C10.5 31.6569 11.8431 33 13.5 33H27.75C29.4069 33 30.75 31.6569 30.75 30V6C30.75 4.34315 29.4069 3 27.75 3H13.5C11.8431 3 10.5 4.34315 10.5 6V9H13.5V3.75ZM6.75 15.75L10.5 12L6.75 8.25V15.75ZM10.5 15.75H24.75V18.75H10.5V15.75Z"
                  className="fill-[#FFFFFF] group-hover:fill-[#4a4a4a]"
                />
              </svg>

              <h3 className="sm:text-[12px] text-[9px] text-[#FFFFFF] group-hover:text-[#4a4a4a] ">
                Logout
              </h3>
            </div>
          </Link>
        </div>
      )}

      {!isSmallScreen && (
        <div className="flex gap-6 items-center justify-center ">
          <Link
            href={"/wishlist"}
            className="hover:scale-110 transition duration-100 relative "
          >
            <Image src={wishlist} alt="wishlist" width={20} height={20} />
          </Link>
          <Link
            href={"/cart"}
            className="relative hover:scale-110 transition duration-100"
          >
            <div className="absolute w-4 h-4 bg-red-600 text-[8px] text-white rounded-full flex justify-center items-center p-1 top-[-12px] right-[0px] ">
              2
            </div>
            <Image
              src={shoppingcart}
              alt="shoppingcart"
              width={20}
              height={20}
            />
          </Link>
          <Link
            href="/account"
            className="hover:scale-110 transition duration-100 "
          >
            <Image src={user} width={26} height={26} alt="user logo" />
          </Link>
        </div>
      )}
    </>
  );
};

export default WishList_Cart;
