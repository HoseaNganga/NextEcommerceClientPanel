"use client";
import Image from "next/image";
import React from "react";
import logo from "@/assets/images/apple-touch-icon.png";
import Link from "next/link";
import HeaderIcons from "./HeaderIcons";
import WishList_Cart from "./WishList_Cart";
import { HeaderProvider, useHeaderContext } from "@/context/HeaderProvider";

type Props = {};

const HeaderContent = () => {
  const { isSmallScreen, setIsSmallScreen } = useHeaderContext();
  return (
    <header className="container w-screen min-w-full sticky top-0 z-[99999] border border-b-2 ">
      <div className="bg-black w-full text-white/80 capitalize text-center text-[8px] sm:text-[10px] md:text-[12px] p-0.5 sm:p-1 md:p-2  ">
        summersale for all products and free express delivery - 50% off
      </div>
      <nav className="flex justify-between items-center w-full bg-white 2-[999] p-4">
        <Link href="/">
          <div className="flex justify-center items-center">
            <Image src={logo} width={40} height={20} alt="NexCart Logo" />
          </div>
        </Link>
        <div>
          <HeaderIcons />
        </div>
        <div>
          <WishList_Cart />
        </div>
      </nav>
    </header>
  );
};

const Header = (props: Props) => {
  return (
    <HeaderProvider>
      <HeaderContent />
    </HeaderProvider>
  );
};

export default Header;
