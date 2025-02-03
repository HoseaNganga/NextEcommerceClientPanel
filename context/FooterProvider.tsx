"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface FooterContextType {
  isModalVisible: boolean;
  handleClick: (modalData: { title: string; modalData: string }) => void;
  handleClose: () => void;
  data: {
    title: string;
    modalData: string;
  } | null;
}

const FooterContext = createContext<FooterContextType | undefined>(undefined);

export const FooterProvider = ({ children }: { children: ReactNode }) => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [data, setData] = useState<{ title: string; modalData: string } | null>(
    null
  );

  const handleClick = (modalData: { title: string; modalData: string }) => {
    setData(modalData);
    setIsModalVisible(true);
  };

  const handleClose = () => {
    setIsModalVisible(false);
    setData(null);
  };

  return (
    <FooterContext.Provider
      value={{
        handleClick,
        handleClose,
        isModalVisible,
        data,
      }}
    >
      {children}
    </FooterContext.Provider>
  );
};

export const useFooterProvider = () => {
  const context = useContext(FooterContext);
  if (!context) {
    throw new Error("useFooterProvider must be used within a FooterProvider");
  }
  return context;
};
