"use client";

import { createContext, useState, useContext } from "react";

export const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState(
    "52efbe65-925b-4d93-8c23-63d0dcc3c31a",
  );
  const [stores, setStores] = useState([]);
  const [currentStore, setCurrentStore] = useState([]);
  const [currentProduct, setCurrentProduct] = useState([]);
  const [store, setStore] = useState(null);
  const [currentProductDisplay, setCurrentProductDisplay] = useState(null);

  const value = {
    selectedCategory,
    setSelectedCategory,
    stores,
    setStores,
    currentStore,
    setCurrentStore,
    currentProduct,
    setCurrentProduct,
    store,
    setStore,
    currentProductDisplay,
    setCurrentProductDisplay,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
