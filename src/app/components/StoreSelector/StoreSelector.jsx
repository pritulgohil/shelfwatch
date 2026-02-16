import React from "react";
import styles from "./StoreSelector.module.css";
import { MapPin, ChevronRight, TrendingUp, TrendingDown } from "lucide-react";

const StoreSelector = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.contentContainer}>
        <div className={styles.sectionHeader}>Browse by Store</div>
        <div className={styles.storeCards}>
          <div className={styles.storeCard}>
            <div className={styles.leftSide}>
              <div className={styles.storeEmblemContainer}>
                <MapPin className={styles.storeEmblem} />
              </div>
              <div className={styles.storeDetails}>
                <div className={styles.storeTitle}>Costco London North</div>
                <div className={styles.storeAddress}>
                  693 Wonderland Rd N, London, ON
                </div>
                <div className={styles.productsTracked}>
                  <TrendingUp size={16} className="text-green-600" />
                  142 Products Tracked
                </div>
              </div>
            </div>
            <div className={styles.rightSide}>
              <ChevronRight className={styles.chevronRight} size={16} />
            </div>
          </div>
          <div className={styles.storeCard}>
            <div className={styles.leftSide}>
              <div className={styles.storeEmblemContainer}>
                <MapPin className={styles.storeEmblem} />
              </div>
              <div className={styles.storeDetails}>
                <div className={styles.storeTitle}>Costco London North</div>
                <div className={styles.storeAddress}>
                  3140 Dingman Dr, London, ON
                </div>
                <div className={styles.productsTracked}>
                  <TrendingDown size={16} className="text-red-600" />
                  94 Products Tracked
                </div>
              </div>
            </div>
            <div className={styles.rightSide}>
              <ChevronRight className={styles.chevronRight} size={16} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreSelector;
