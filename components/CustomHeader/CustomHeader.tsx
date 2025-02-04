import React from "react";

type Props = {
  headerTitle: string;
};

const CustomHeader = ({ headerTitle }: Props) => {
  return (
    <div className="mt-2 flex justify-start gap-2 items-center ">
      <div className="w-4 h-8 bg-[#DB4444] "></div>
      <h3 className="text-[#DB4444] font-bold text-sm ">{headerTitle}</h3>
    </div>
  );
};

export default CustomHeader;
