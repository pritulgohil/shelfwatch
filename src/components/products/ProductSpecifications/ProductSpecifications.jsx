import React, { useEffect } from "react";
import styles from "./ProductSpecifications.module.css";
import { Separator } from "@/components/ui/separator";
import { Tag, Info, Barcode, Store } from "lucide-react";
import { useStoreContext } from "@/context/StoreContext";

const ProductSpecifications = ({ currentProductDisplay }) => {
  const { store, currentStore, setStore } = useStoreContext();

  useEffect(() => {
    const fetchStoreById = async () => {
      try {
        const res = await fetch(`/api/stores/fetch-stores/${currentStore}`);
        const data = await res.json();
        setStore(data);
      } catch (err) {
        console.error("Error fetching store:", err);
      }
    };

    if (currentStore && !store) {
      fetchStoreById();
    }
  }, [currentStore, store]);

  if (!currentProductDisplay) {
    return <>Loading..</>;
  }

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
            <div className={styles.detailValue}>
              {currentProductDisplay.brand}
            </div>
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
            <div className={styles.detailValue}>
              {currentProductDisplay.categories.name}
            </div>
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
            <div className={styles.detailValue}>
              {currentProductDisplay.sku}
            </div>
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
              {store ? store.address : "Loading..."}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSpecifications;
