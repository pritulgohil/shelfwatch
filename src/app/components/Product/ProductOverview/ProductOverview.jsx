import React from "react";
import styles from "./ProductOverview.module.css";
import Image from "next/image";
import { User, Clock } from "lucide-react";
import { getTimeAgo } from "@/lib/utils/timeAgo";

const ProductOverview = ({ currentProductDisplay }) => {
  if (!currentProductDisplay) {
    return <>Loading..</>;
  }

  return (
    <div className={styles.productDisplay}>
      <div className={styles.imageWrapper}>
        <Image
          src="/images/placeholder.png"
          alt="Product Image"
          fill
          sizes="(max-width: 768px) 100vw, 320px"
          className={styles.stockImage}
          priority
        />
      </div>
      <div className={styles.productOverview}>
        <div
          className={`${styles.productStatus} ${currentProductDisplay.product_status.status_name === "In Stock" ? styles.inStockStatus : currentProductDisplay.product_status.status_name === "Low Stock" ? styles.lowStockStatus : currentProductDisplay.product_status.status_name === "No Reports" ? styles.noReportsStatus : styles.outOfStockStatus}`}
        >
          {currentProductDisplay.product_status.status_name}
        </div>
        <div className={styles.productHeader}>
          {currentProductDisplay.brand} {currentProductDisplay.name}
        </div>
        <div className={styles.productDescription}>
          {currentProductDisplay.description}
        </div>
        <div className={styles.productMeta}>
          <div className={styles.lastReported}>
            <User size={14} />
            Last reported by
            <span className={styles.reportedBy}>
              {currentProductDisplay.reports?.[0]?.reported_by || "--"}
            </span>
          </div>
          <div className={styles.timeAgo}>
            <Clock size={14} />
            {getTimeAgo(currentProductDisplay.reports?.[0]?.created_at || "--")}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductOverview;
