import React from "react";
import styles from "./ProductDisplay.module.css";
import ProductOverview from "@/app/components/ProductOverview/ProductOverview";
import { PriceCard } from "@/app/components/PriceCard/PriceCard";
import StockReportButton from "@/app/components/StockReportButton/StockReportButton";
import ActivityReportCard from "@/app/components/ActivityReportCard/ActivityReportCard";
import ProductSpecifications from "../ProductSpecifications/ProductSpecifications";
import RecentReports from "../RecentReports/RecentReports";
import Footer from "@/app/components/Footer/Footer";

const ProductDisplay = ({ product }) => {
  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.contentContainer}>
          <div className={styles.leftSide}>
            <ProductOverview product={product} />
            <ProductSpecifications />
            <RecentReports />
          </div>
          <div className={styles.rightSide}>
            <PriceCard />
            <StockReportButton />
            <ActivityReportCard />
          </div>
        </div>
        <Footer />
      </div>
      <div className={styles.mobileMainContainer}>
        <div className={styles.mobileContentContainer}>
          <ProductOverview product={product} />
          <PriceCard />
          <StockReportButton />
          <ProductSpecifications />
          <RecentReports />
          <ActivityReportCard />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ProductDisplay;
