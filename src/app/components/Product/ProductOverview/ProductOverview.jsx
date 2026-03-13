import React from "react";
import styles from "./ProductOverview.module.css";
import Image from "next/image";
import { User, Clock } from "lucide-react";

const ProductOverview = ({ product }) => {
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
        <div className={styles.productStatus}>In Stock</div>
        <div className={styles.productHeader}>{product.name}</div>
        <div className={styles.productDescription}>
          Fresh and creamy Kirkland milk for everyday nutrition.
        </div>
        <div className={styles.productMeta}>
          <div className={styles.lastReported}>
            <User size={14} />
            Last reported by
            <span className={styles.reportedBy}>Alex M.</span>
          </div>
          <div className={styles.timeAgo}>
            <Clock size={14} />
            25 minutes ago
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductOverview;
