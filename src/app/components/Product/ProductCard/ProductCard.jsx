import React from "react";
import styles from "./ProductCard.module.css";
import Image from "next/image";
import { MapPin, Clock4 } from "lucide-react";

const ProductCards = ({ product }) => {
  const productStatus = "Out of Stock";
  const productCategory = "Electronics";
  console.log("Product data in ProductCard:", product);
  return (
    <div
      className={`${styles.productCard} cursor-pointer hover:shadow-md transition-shadow duration-200 ease-in-out`}
    >
      <div className={styles.leftSide}>
        <div className={styles.imageContainer}>
          <Image
            src="/images/placeholder.png"
            alt="Store Image"
            width={50}
            height={50}
            className={styles.stockImage}
          />
        </div>
        <div className={styles.productDetails}>
          <div className={styles.productMainDetails}>
            <div className={styles.productHeader}>
              {product.brand} {product.name}
            </div>
            <div className={styles.statusWrapper}>
              <div
                className={`${styles.stockPill} ${product.product_status.status_name === "In Stock" ? styles.inStock : product.product_status.status_name === "Low Stock" ? styles.lowStock : styles.outOfStock}`}
              >
                {product.product_status.status_name}
              </div>
            </div>
          </div>
          <div className={styles.brandData}>
            {product.brand} • {product.description}
          </div>
          <div className={styles.productSubDetails}>
            <div className={styles.category}>{product.categories.name}</div>
            <div className={styles.price}>
              $ {product.price ? product.price : "--"}
            </div>
          </div>
          <div className={styles.productMetadata}>
            <div className={styles.location}>
              <MapPin size={14} />
              Costco North London
            </div>
            <div className={styles.time}>
              <Clock4 size={14} />5 min ago
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCards;
