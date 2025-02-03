"use client";

import { useFooterProvider } from "@/context/FooterProvider";
import React from "react";
import { Button } from "../Button";
import { CloseIcon } from "../Icons";

const FooterModal = () => {
  const { isModalVisible, handleClose, data } = useFooterProvider();

  if (!isModalVisible) return null;
  return (
    <div
      className="flex items-center justify-center fixed inset-0  bg-black bg-opacity-50 z-50 "
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-white rounded-lg p-6 max-w-[400px] max-h-[500px] overflow-auto shadow-lg relative leading-10">
        <Button
          icon={<CloseIcon />}
          size="xs"
          onClick={handleClose}
          className="absolute top-0 right-0  "
        ></Button>
        <h2 className="text-base font-semibold text-[#0D0D0D] mb-5 mt-5">
          {data?.title}
        </h2>
        <p className="text-[#0D0D0D] md:text-base text-sm">{data?.modalData}</p>
      </div>
    </div>
  );
};

export default FooterModal;
