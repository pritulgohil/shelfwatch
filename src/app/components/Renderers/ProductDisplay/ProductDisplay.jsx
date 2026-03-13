import React from "react";
import styles from "./ProductDisplay.module.css";
import ProductOverview from "@/app/components/Product/ProductOverview/ProductOverview";
import { PriceCard } from "@/app/components/Product/PriceCard/PriceCard";
import StockReportButton from "@/app/components/Common/StockReportButton/StockReportButton";
import ActivityReportCard from "@/app/components/Product/ActivityReportCard/ActivityReportCard";
import ProductSpecifications from "../../Product/ProductSpecifications/ProductSpecifications";
import RecentReports from "../../Product/RecentReports/RecentReports";
import Footer from "@/app/components/Layout/Footer/Footer";

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
