"use client";

import { CategoryProvider } from "./CategoryContext";
import { StoreProvider } from "./StoreContext";
import { ProductProvider } from "./ProductContext";
import { ReportProvider } from "./ReportContext";

export const AppProvider = ({ children }) => {
  return (
    <CategoryProvider>
      <StoreProvider>
        <ProductProvider>
          <ReportProvider>
            {children}
          </ReportProvider>
        </ProductProvider>
      </StoreProvider>
    </CategoryProvider>
  );
};
