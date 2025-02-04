import React from "react";
import CustomHeader from "../CustomHeader/CustomHeader";
import CustomCountDown from "../CustomCountDown/CustomCountDown";
import FlashProductSlider from "../FlashProductsSlider/FlashProductSlider";
import Link from "next/link";

const FlashProducts = () => {
  return (
    <div className="w-full p-4">
      <CustomHeader headerTitle="Today's" />
      <div className="mt-4 flex  gap-4 items-center justify-between relative">
        <h4 className="font-bold text-black md:text-2xl sm:text-sm sm:font-semibold ">
          Flash Sales
        </h4>
        <CustomCountDown />
        <Link
          href={"/"}
          className="text-white  bg-[#DB4444]/70 hover:bg-[#DB4444] px-3 py-2.5 text-[12px] font-bold md:w-34 sm:hidden md:block text-center rounded-md "
        >
          View All Products
        </Link>
      </div>
      <FlashProductSlider />
    </div>
  );
};

export default FlashProducts;
