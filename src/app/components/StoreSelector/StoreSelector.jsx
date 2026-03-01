import React from "react";
import styles from "./StoreSelector.module.css";
import stores from "@/data/stores.json";
import StoreCards from "@/app/components/StoreCards/StoreCards";
import StockReportButton from "@/app/components/StockReportButton/StockReportButton";

const StoreSelector = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.contentContainer}>
        <div className={styles.sectionHeader}>Browse by Store</div>
        <div className={styles.storeCards}>
          {stores.map((store) => (
            <StoreCards key={store.id} store={store} />
          ))}
        </div>
        <StockReportButton />
      </div>
    </div>
  );
};

export default StoreSelector;
