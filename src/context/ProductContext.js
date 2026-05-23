"use client";

import { createContext, useState, useContext } from "react";

export const ProductContext = createContext(null);

export const ProductProvider = ({ children }) => {
  const [currentProduct, setCurrentProduct] = useState([]);
  const [currentProductDisplay, setCurrentProductDisplay] = useState(null);

  const value = {
    currentProduct,
    setCurrentProduct,
    currentProductDisplay,
    setCurrentProductDisplay,
  };

  return (
    <ProductContext.Provider value={value}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProductContext must be used within a ProductProvider");
  }
  return context;
};
