"use client";

import { useContext, useState, createContext, useEffect } from "react";

interface HeaderContextType {
  isSmallScreen?: boolean;
  setIsSmallScreen?: (value: boolean) => void;
  menuOpen?: boolean;
  setMenuOpen?: (value: boolean) => void;
  toggleMenu?: () => void;
}

const HeaderContext = createContext<HeaderContextType | undefined>(undefined);

export const HeaderProvider = ({ children }: { children: React.ReactNode }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    const handleResize = () => {
      setIsSmallScreen(mediaQuery.matches);
    };
    handleResize();
    mediaQuery.addEventListener("change", handleResize);
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  return (
    <HeaderContext.Provider
      value={{
        isSmallScreen,
        setIsSmallScreen,
        menuOpen,
        setMenuOpen,
        toggleMenu,
      }}
    >
      {children}
    </HeaderContext.Provider>
  );
};

export const useHeaderContext = () => {
  const context = useContext(HeaderContext);
  if (!context) {
    throw new Error("useHeaderContext must be used within a HeaderProvider");
  }
  return context;
};
