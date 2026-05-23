"use client";

import React, { useEffect, useState } from "react";
import styles from "./StoreSelector.module.css";
import StoreCards from "@/components/stores/StoreCards/StoreCards";
import StockReportButton from "@/components/common/StockReportButton/StockReportButton";
import { useStoreContext } from "@/context/StoreContext";
import StoreSelectorSkeleton from "@/components/skeletons/StoreSelectorSkeleton";

const StoreSelector = () => {
  const { stores, setStores, setCurrentStore } = useStoreContext();
  const [loading, setLoading] = useState(true);

  const handleCurrentStore = (store) => {
    setCurrentStore(store);
  };

  useEffect(() => {
    const fetchStores = async () => {
      try {
        const response = await fetch("/api/stores/fetch-stores");
        const data = await response.json();
        setStores(data);
      } catch (error) {
        console.error("Error fetching stores:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStores();
  }, [setStores]);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.contentContainer}>
        <div className={styles.sectionHeader}>Browse by Store</div>
        <div className={styles.storeCards}>
          {loading
            ? Array.from({ length: 2 }).map((_, i) => (
              <StoreSelectorSkeleton key={i} />
            ))
            : stores.map((store) => (
              <StoreCards
                key={store.id}
                store={store}
                onClick={() => handleCurrentStore(store)}
              />
            ))}
        </div>

        <StockReportButton />
      </div>
    </div>
  );
};

export default StoreSelector;
