"use client";

import Footer from "@/components/Layout/Footer/Footer";
import CategoryPills from "@/components/Categories/CategoryPills/CategoryPills";
import ProductRender from "@/components/Renderers/ProductRender/ProductRender";
import SearchBar from "@/components/Common/SearchBar/SearchBar";
import StockPills from "@/components/Categories/StockPills/StockPills";
import StoreHeader from "@/components/Common/PageHeader/PageHeader";
import styles from "./page.module.css";
import { useAppContext } from "@/context/AppContext";

export default function StorePage() {
  const { currentStore } = useAppContext();

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
