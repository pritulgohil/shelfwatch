"use client";

import { createContext, useState, useContext } from "react";

export const CategoryContext = createContext(null);

export const CategoryProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState(
    "52efbe65-925b-4d93-8c23-63d0dcc3c31a",
  );

  return (
    <CategoryContext.Provider value={{ selectedCategory, setSelectedCategory }}>
      {children}
    </CategoryContext.Provider>
  );
};

export const useCategoryContext = () => {
  const context = useContext(CategoryContext);
  if (!context) {
    throw new Error("useCategoryContext must be used within a CategoryProvider");
  }
  return context;
};
