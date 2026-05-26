"use client";

import React, { useState } from "react";
import Footer from "@/components/layout/Footer/Footer";
import CategoryPills from "@/components/categories/CategoryPills/CategoryPills";
import ProductRender from "@/components/products/ProductList/ProductList";
import StoreSearchBar from "@/components/common/StoreSearchBar/StoreSearchBar";
import StoreHeader from "@/components/common/PageHeader/PageHeader";
import styles from "./page.module.css";
import { useStoreContext } from "@/context/StoreContext";

export default function StorePage() {
  const { currentStore } = useStoreContext();
  const [searchQuery, setSearchQuery] = useState("");

  if (!currentStore) {
    return <div>Loading store...</div>;
  }

  return (
    <div className={styles.mainContainer}>
      <StoreHeader />
      <StoreSearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <CategoryPills />
      <div className={styles.contentContainer}>
        <ProductRender searchQuery={searchQuery} />
      </div>
      <Footer />
    </div>
  );
}
