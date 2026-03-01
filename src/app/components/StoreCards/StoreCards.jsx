import React from "react";
import { MapPin, ChevronRight, TrendingUp, TrendingDown } from "lucide-react";
import styles from "./StoreCards.module.css";
import Link from "next/link";

const StoreCards = ({ store }) => {
  return (
    <Link className="w-full" href={`/${store.city}/${store.slug}`}>
      <div className={styles.storeCard}>
        <div className={styles.leftSide}>
          <div className={styles.storeEmblemContainer}>
            <MapPin className={styles.storeEmblem} />
          </div>
          <div className={styles.storeDetails}>
            <div className={styles.storeTitle}>{store.name}</div>
            <div className={styles.storeAddress}>{store.address}</div>
            <div className={styles.productsTracked}>
              {store.trend === "up" ? (
                <TrendingUp size={16} className="text-green-600" />
              ) : (
                <TrendingDown size={16} className="text-red-600" />
              )}
              {store.productsTracked} Products Tracked
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
