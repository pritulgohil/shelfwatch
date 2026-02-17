import React from "react";
import styles from "./RecentUpdates.module.css";
import ProductCards from "../ProductCards/ProductCards";
import products from "@/data/products.json";

export const RecentUpdates = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.contentContainer}>
        <div className={styles.sectionHeader}>Recently Updated</div>
        <div className={styles.productCardsContainer}>
          {products.map((product) => (
            <ProductCards key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};
