"use client";

import Footer from "@/components/layout/Footer/Footer";
import CategoryPills from "@/components/categories/CategoryPills/CategoryPills";
import ProductRender from "@/components/products/ProductList/ProductList";
import SearchBar from "@/components/common/SearchBar/SearchBar";
import StockPills from "@/components/categories/StockPills/StockPills";
import StoreHeader from "@/components/common/PageHeader/PageHeader";
import styles from "./page.module.css";
import { useStoreContext } from "@/context/StoreContext";

export default function StorePage() {
  const { currentStore } = useStoreContext();

  if (!currentStore) {
    return <div>Loading store...</div>;
  }

  return (
    <div className={styles.mainContainer}>
      <StoreHeader />
      <SearchBar />
      <CategoryPills />
      <StockPills />
      <div className={styles.contentContainer}>
        <ProductRender />
      </div>
      <Footer />
    </div>
  );
}
