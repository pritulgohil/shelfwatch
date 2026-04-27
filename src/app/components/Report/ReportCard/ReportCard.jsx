import React from "react";
import styles from "./ReportCard.module.css";
import Image from "next/image";
import { MapPin, Clock4 } from "lucide-react";
import { useAppContext } from "@/context/AppContext";
import { getTimeAgo } from "@/lib/utils/timeAgo";

const ReportCards = ({ report }) => {
  const { setCurrentProduct, setCurrentStore } = useAppContext();

  const handleCurrentProduct = (report) => {
    setCurrentProduct(report.products.id);
    setCurrentStore(report.stores.id);
  };
  return (
    <div
      className={`${styles.productCard} cursor-pointer hover:shadow-md transition-shadow duration-200 ease-in-out`}
      onClick={() => handleCurrentProduct(report)}
    >
      <div className={styles.leftSide}>
        <div className={styles.imageContainer}>
          <Image
            src={report.image_url || "/images/placeholder.jpg"}
            alt="Store Image"
            width={50}
            height={50}
            className={styles.stockImage}
          />
        </div>
        <div className={styles.productDetails}>
          <div className={styles.productMainDetails}>
            <div className={styles.productHeader}>
              {report.products.brand} {report.products.name}
            </div>
            <div className={styles.statusWrapper}>
              <div
                className={`${styles.stockPill} ${report.product_status.status_name === "In Stock" ? styles.inStock : report.product_status.status_name === "Low Stock" ? styles.lowStock : report.product_status.status_name === "No Reports" ? styles.noReports : styles.outOfStock}`}
              >
                {report.product_status.status_name}
              </div>
            </div>
          </div>
          <div className={styles.brandData}>
            {report.products.brand} • {report.products.description}
          </div>
          <div className={styles.productSubDetails}>
            <div className={styles.category}>
              {report.products.categories.name}
            </div>
            <div className={styles.price}>$ {report.price}</div>
          </div>
          <div className={styles.productMetadata}>
            <div className={styles.location}>
              <MapPin size={14} />
              {report.stores.name}
            </div>
            <div className={styles.time}>
              <Clock4 size={14} />
              {getTimeAgo(report.created_at)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportCards;
