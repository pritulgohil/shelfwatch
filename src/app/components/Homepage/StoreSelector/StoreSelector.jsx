import React from "react";
import styles from "./StoreSelector.module.css";
import {
  MapPin,
  ChevronRight,
  TrendingUp,
  TrendingDown,
  CirclePlus,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import stores from "@/data/stores.json";
import StoreCards from "@/app/components/Homepage/StoreCards/StoreCards";

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
        <div className={styles.reportStockButtonContainer}>
          <Button
            variant="outline"
            className={`${styles.reportStockButton} w-full p-6 cursor-pointer shadow-none`}
            size="sm"
          >
            <CirclePlus size={16} /> Report Stock
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StoreSelector;
