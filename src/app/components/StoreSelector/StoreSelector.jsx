"use client";

import React from "react";
import styles from "./StoreSelector.module.css";
import StoreCards from "@/app/components/StoreCards/StoreCards";
import StockReportButton from "@/app/components/StockReportButton/StockReportButton";
import { useEffect, useState } from "react";

const StoreSelector = () => {
  const [stores, setStores] = useState([]);
  useEffect(() => {
    const fetchStores = async () => {
      try {
        const response = await fetch("/api/stores");
        const data = await response.json();
        setStores(data);
        console.log("Fetched stores:", data);
      } catch (error) {
        console.error("Error fetching stores:", error);
      }
    };
    fetchStores();
  }, []);
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
