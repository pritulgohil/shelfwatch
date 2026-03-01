import React from "react";
import styles from "./ProductCards.module.css";
import Image from "next/image";
import { MapPin, Clock4 } from "lucide-react";

const ProductCards = ({ product }) => {
  return (
    <div
      className={`${styles.productCard} cursor-pointer hover:shadow-md transition-shadow duration-200 ease-in-out`}
    >
      <div className={styles.leftSide}>
        <div className={styles.imageContainer}>
          <Image
            src={product.image}
            alt="Store Image"
            width={50}
            height={50}
            className={styles.stockImage}
          />
        </div>
        <div className={styles.productDetails}>
          <div className={styles.productMainDetails}>
            <div className={styles.productHeader}>{product.name}</div>
            <div className={styles.statusWrapper}>
              <div
                className={`${styles.stockPill} ${product.status === "In Stock" ? styles.inStock : product.status === "Low Stock" ? styles.lowStock : styles.outOfStock}`}
              >
                {product.status}
              </div>
            </div>
          </div>
          <div className={styles.brandData}>
            {product.brand} • {product.description}
          </div>
          <div className={styles.productSubDetails}>
            <div className={styles.category}>{product.category}</div>
            <div className={styles.price}>${product.price}</div>
          </div>
          <div className={styles.productMetadata}>
            <div className={styles.location}>
              <MapPin size={14} />
              {product.store}
            </div>
            <div className={styles.time}>
              <Clock4 size={14} />
              {product.timeAgo}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCards;
