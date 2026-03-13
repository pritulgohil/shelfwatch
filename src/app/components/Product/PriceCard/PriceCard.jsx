import React from "react";
import styles from "./PriceCard.module.css";
import { Button } from "@/components/ui/button";
import { ThumbsUp, ThumbsDown } from "lucide-react";

export const PriceCard = () => {
  return (
    <div className={styles.priceCard}>
      <div className={styles.priceHeader}>Reported Price</div>
      <div className={styles.productPrice}>$579.99</div>
      <div className={styles.priceReport}>
        <Button
          className={`${styles.reportButton} cursor-pointer shadow-none`}
          variant="secondary"
          size="sm"
        >
          <ThumbsUp /> 12
        </Button>
        <Button
          className={`${styles.reportButton} cursor-pointer shadow-none`}
          variant="secondary"
          size="sm"
        >
          <ThumbsDown /> 12
        </Button>
      </div>
    </div>
  );
};
