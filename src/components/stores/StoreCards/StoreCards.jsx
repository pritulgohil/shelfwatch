"use client";

import React from "react";
import { MapPin, ChevronRight, TrendingUp, TrendingDown } from "lucide-react";
import styles from "./StoreCards.module.css";
import Link from "next/link";
import { useStoreContext } from "@/context/StoreContext";

const StoreCards = ({ store, onSelect }) => {
  const { setCurrentStore } = useStoreContext();

  const handleCurrentStore = () => {
    setCurrentStore(store.id);
  };

  const cardContent = (
    <div className={styles.storeCard}>
      <div className={styles.leftSide}>
        <div className={styles.storeEmblemContainer}>
          <MapPin className={styles.storeEmblem} />
        </div>

        <div className={styles.storeDetails}>
          <div className={styles.storeTitle}>{store.name}</div>
          <div className={styles.storeAddress}>{store.address}</div>

          <div className={styles.productsTracked}>
            {store.products_tracked > 0 ? (
              <TrendingUp size={16} className="text-green-600" />
            ) : (
              <TrendingDown size={16} className="text-red-600" />
            )}
            {store.products_tracked} Products Tracked
          </div>
        </div>
      </div>

      <div className={styles.rightSide}>
        <ChevronRight className={styles.chevronRight} size={16} />
      </div>
    </div>
  );

  if (onSelect) {
    return (
      <button className="w-full text-left" onClick={() => onSelect(store.id)}>
        {cardContent}
      </button>
    );
  }

  return (
    <Link
      className="w-full"
      href={`/${store.city}/${store.store_slug}`}
      onClick={handleCurrentStore}
    >
      {cardContent}
    </Link>
  );
};

export default StoreCards;

