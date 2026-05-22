import React from "react";
import styles from "./ProductDisplay.module.css";
import ProductOverview from "@/components/Product/ProductOverview/ProductOverview";
import { PriceCard } from "@/components/Product/PriceCard/PriceCard";
import StockReportButton from "@/components/Common/StockReportButton/StockReportButton";
import ActivityReportCard from "@/components/Product/ActivityReportCard/ActivityReportCard";
import ProductSpecifications from "../../Product/ProductSpecifications/ProductSpecifications";
import RecentReports from "../../Product/RecentReports/RecentReports";
import Footer from "@/components/Layout/Footer/Footer";

const ProductDisplay = ({ currentProductDisplay, onSuccess }) => {
  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.contentContainer}>
          <div className={styles.leftSide}>
            <ProductOverview currentProductDisplay={currentProductDisplay} />
            <ProductSpecifications
              currentProductDisplay={currentProductDisplay}
            />
            <RecentReports />
          </div>
          <div className={styles.rightSide}>
            <PriceCard currentProductDisplay={currentProductDisplay} />
            <StockReportButton onSuccess={onSuccess} />
            <ActivityReportCard currentProductDisplay={currentProductDisplay} />
          </div>
        </div>
        <Footer />
      </div>
      <div className={styles.mobileMainContainer}>
        <div className={styles.mobileContentContainer}>
          <ProductOverview currentProductDisplay={currentProductDisplay} />
          <PriceCard currentProductDisplay={currentProductDisplay} />
          <StockReportButton onSuccess={onSuccess} />
          <ProductSpecifications
            currentProductDisplay={currentProductDisplay}
          />
          <RecentReports />
          <ActivityReportCard currentProductDisplay={currentProductDisplay} />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ProductDisplay;
