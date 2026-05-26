"use client";

import { useState, useEffect } from "react";
import { ArrowLeft, CirclePlus, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useStoreContext } from "@/context/StoreContext";
import StoreCards from "@/components/stores/StoreCards/StoreCards";
import styles from "./StockReportWizard.module.css";

const StockReportWizard = () => {
  const { stores, currentStore, setCurrentStore } = useStoreContext();
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState([]);
  const selectedStore = stores?.find((s) => s.id === currentStore);

  const handleClose = () => {
    setOpen(false);
    setCurrentStore(null);
    setSearchQuery("");
  };

  const handleBack = () => {
    setCurrentStore(null);
    setSearchQuery("");
  };

  const fetchAllProducts = async () => {
    const res = await fetch(`/api/products/fetch-products/search/${currentStore}`);
    const data = await res.json();
    setProducts(data);
  };

  useEffect(() => {
  if (currentStore) {
    fetchAllProducts();
  }
}, [currentStore]);

  console.log(products)

  const filteredProducts = products?.filter((product) => {
  const query = searchQuery.toLowerCase();

  return (
    product?.brand?.toLowerCase().includes(query) ||
    product?.name?.toLowerCase().includes(query) ||
    product?.categories?.name?.toLowerCase().includes(query)
  );
});

  return (
    <Dialog open={open} onOpenChange={(val) => { if (!val) handleClose(); else setOpen(true); }}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className={`${styles.triggerButton} w-full p-6 cursor-pointer shadow-none`}
          size="sm"
        >
          <CirclePlus size={16} />
          Report Stock Update
        </Button>
      </DialogTrigger>
      <DialogContent className={styles.dialogContent}>
        {currentStore ? (
          <>
            <DialogHeader>
              <button className={styles.backButton} onClick={handleBack}>
                <ArrowLeft size={16} />
                {selectedStore?.name}
              </button>
            </DialogHeader>
            <div className={styles.dialoagHeader}><h2>Find a product</h2><p>Select the product you want to report</p></div>
            <div className={styles.searchBarContainer}>
              <div className={styles.searchInputWrapper}>
                <Search size={18} className={styles.searchIcon} />
                <input
                  type="text"
                  placeholder="Search products"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={styles.searchInput}
                />
              </div>
            </div>
            <div className={styles.productList}>
                {filteredProducts?.map((product, index) => (
                <div key={index} className={styles.productCard}>
                  <div className={styles.productImage}>
                    <img
                      src={product?.latest_image || "/images/package.png"}
                      alt="Product"
                      className={product?.latest_image ? styles.productActualImage : styles.image}
                    />
                  </div>
                  <div className={styles.productInfo}>
                    <h3 className={styles.productName}>{product?.brand} {product?.name}</h3>
                    <p className={styles.productCategory}>{product.categories?.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle>Select a store</DialogTitle>
              <DialogDescription>Where are you reporting from?</DialogDescription>
            </DialogHeader>

            <div className={styles.storeList}>
              {stores?.map((store) => (
                <StoreCards
                  key={store.id}
                  store={store}
                  onSelect={setCurrentStore}
                  onClick={() => fetchAllProducts()}
                />
              ))}
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default StockReportWizard;