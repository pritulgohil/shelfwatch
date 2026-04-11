"use client";

import React from "react";
import { MapPin, ChevronRight, TrendingUp, TrendingDown } from "lucide-react";
import styles from "./StoreCards.module.css";
import Link from "next/link";
import { useAppContext } from "@/context/AppContext";

const StoreCards = ({ store }) => {
  const { setCurrentStore } = useAppContext();

  const handleCurrentStore = () => {
    setCurrentStore(store.id);
  };

  return (
    <Link
      className="w-full"
      href={`/${store.city}/${store.store_slug}`}
      onClick={handleCurrentStore}
    >
      <div className={styles.storeCard}>
        <div className={styles.leftSide}>
          <div className={styles.storeEmblemContainer}>
            <MapPin className={styles.storeEmblem} />
          </div>

          <div className={styles.storeDetails}>
            <div className={styles.storeTitle}>{store.name}</div>
            <div className={styles.storeAddress}>{store.address}</div>

            <div className={styles.productsTracked}>
              {store.products_tracked > 50 ? (
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
    </Link>
  );
};

export default StoreCards;
