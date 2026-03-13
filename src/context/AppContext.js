"use client"; // Client component because we use useState

import { createContext, useState, useContext } from "react";

// 1️⃣ Create Context
export const AppContext = createContext(null);

// 2️⃣ Create Provider
export const AppProvider = ({ children }) => {
  // Shared state
  const [selectedCategory, setSelectedCategory] = useState(
    "52efbe65-925b-4d93-8c23-63d0dcc3c31a",
  );
  // Values to expose
  const value = {
    selectedCategory,
    setSelectedCategory,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

// 3️⃣ Custom Hook for consuming context
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
