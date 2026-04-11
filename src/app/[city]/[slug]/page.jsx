"use client";

import Footer from "@/app/components/Layout/Footer/Footer";
import CategoryPills from "@/app/components/Categories/CategoryPills/CategoryPills";
import ProductRender from "@/app/components/Renderers/ProductRender/ProductRender";
import SearchBar from "@/app/components/Common/SearchBar/SearchBar";
import StockPills from "@/app/components/Categories/StockPills/StockPills";
import StoreHeader from "@/app/components/Common/PageHeader/PageHeader";
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
