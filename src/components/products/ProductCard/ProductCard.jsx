import React, { useMemo } from "react";
import styles from "./ProductCard.module.css";
import Image from "next/image";
import { MapPin, Clock4 } from "lucide-react";
import { useProductContext } from "@/context/ProductContext";
import { useStoreContext } from "@/context/StoreContext";
import { getTimeAgo } from "@/lib/helpers/timeAgo";

const ProductCards = ({ product }) => {
  const { setCurrentProduct } = useProductContext();
  const { store } = useStoreContext();

  const latestReport = useMemo(() => {
    const reports = product?.reports || [];
    if (!reports.length) return null;

    return [...reports].sort(
      (a, b) => new Date(b.created_at) - new Date(a.created_at),
    )[0];
  }, [product?.reports]);

  const latestImage = useMemo(() => {
    const reports = product?.reports || [];

    return (
      [...reports]
        .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
        .find((r) => r.image_url?.trim())?.image_url ||
      "/images/placeholder-image.png"
    );
  }, [product?.reports]);

  if (!product || !store) {
    return <>Loading...</>;
  }

  const status = latestReport?.product_status?.status_name || "No Reports";
  const price = latestReport?.price ?? "--";
  const time = latestReport?.created_at || null;

  const statusClass =
    status === "In Stock"
      ? styles.inStock
      : status === "Low Stock"
        ? styles.lowStock
        : status === "Out of Stock"
          ? styles.outOfStock
          : styles.noReports;

  const handleCurrentProduct = () => {
    setCurrentProduct(product.id);
  };

  return (
    <div
      className={`${styles.productCard} cursor-pointer hover:shadow-md transition-shadow duration-200 ease-in-out`}
      onClick={handleCurrentProduct}
    >
      <div className={styles.leftSide}>
        <div className={styles.imageContainer}>
          <Image
            src={latestImage}
            alt="Product Image"
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
              <div className={`${styles.stockPill} ${statusClass}`}>
                {status}
              </div>
            </div>
          </div>

          <div className={styles.brandData}>
            {product.brand} • {product.description}
          </div>

          <div className={styles.productSubDetails}>
            <div className={styles.category}>{product.categories?.name}</div>

            <div className={styles.price}>$ {price}</div>
          </div>

          <div className={styles.productMetadata}>
            <div className={styles.location}>
              <MapPin size={14} />
              {store.name}
            </div>

            <div className={styles.time}>
              <Clock4 size={14} />
              {time ? getTimeAgo(time) : "--"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCards;
