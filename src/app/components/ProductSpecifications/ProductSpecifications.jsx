import React from "react";
import styles from "./ProductSpecifications.module.css";
import { Separator } from "@/components/ui/separator";
import { Tag, Info, Barcode, Store } from "lucide-react";

const ProductSpecifications = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.header}>Product Details</div>
      <Separator />
      <div className={styles.row}>
        <div className={styles.detailsSections}>
          <div className={styles.detailLogo}>
            <Tag size={18} />
          </div>
          <div className={styles.detailText}>
            <div className={styles.detailName}>Brand</div>
            <div className={styles.detailValue}>Kirkland</div>
          </div>
        </div>
        <Separator
          orientation="vertical"
          className="hidden sm:block self-stretch w-px"
        />
        <Separator
          orientation="horizontal"
          className="block sm:hidden w-full h-px"
        />
        <div className={styles.detailsSections}>
          <div className={styles.detailLogo}>
            <Info size={18} />
          </div>
          <div className={styles.detailText}>
            <div className={styles.detailName}>Category</div>
            <div className={styles.detailValue}>Electronics</div>
          </div>
        </div>
        <Separator
          orientation="vertical"
          className="hidden sm:block self-stretch w-px"
        />
        <Separator
          orientation="horizontal"
          className="block sm:hidden w-full h-px"
        />{" "}
        <div className={styles.detailsSections}>
          <div className={styles.detailLogo}>
            <Barcode size={18} />
          </div>
          <div className={styles.detailText}>
            <div className={styles.detailName}>Item Number</div>
            <div className={styles.detailValue}>5240229</div>
          </div>
        </div>
      </div>
      <Separator />
      <div className={styles.row}>
        <div className={styles.detailsSections}>
          <div className={styles.detailLogo}>
            <Store size={18} />
          </div>
          <div className={styles.detailText}>
            <div className={styles.detailName}>Store Location</div>
            <div className={styles.detailValue}>
              693 Wonderland Rd N, London, ON
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSpecifications;
