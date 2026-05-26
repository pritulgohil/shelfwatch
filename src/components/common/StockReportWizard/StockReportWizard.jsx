"use client";

import { useState, useEffect } from "react";
import { ArrowLeft, CirclePlus, Search, ImagePlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useStoreContext } from "@/context/StoreContext";
import { useReportContext } from "@/context/ReportContext";
import StoreCards from "@/components/stores/StoreCards/StoreCards";
import styles from "./StockReportWizard.module.css";

const StockReportWizard = () => {
  const { stores, currentStore, setCurrentStore } = useStoreContext();
  const { submitReport } = useReportContext();
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState([]);
  const selectedStore = stores?.find((s) => s.id === currentStore);

  // Form states
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [stockStatus, setStockStatus] = useState("In Stock");
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [price, setPrice] = useState("");
  const [loading, setLoading] = useState(false);
  const [priceError, setPriceError] = useState(false);
  const [nickname, setNickname] = useState("");

  const handleClose = () => {
    setOpen(false);
    setCurrentStore(null);
    setSearchQuery("");
    resetForm();
  };

  const handleBack = () => {
    setCurrentStore(null);
    setSearchQuery("");
    resetForm();
  };

  const resetForm = () => {
    setSelectedProduct(null);
    setStockStatus("In Stock");
    setImageFile(null);
    if (imagePreview) {
      URL.revokeObjectURL(imagePreview);
    }
    setImagePreview(null);
    setPrice("");
    setPriceError(false);
    setNickname("");
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

  useEffect(() => {
    return () => {
      if (imagePreview) {
        URL.revokeObjectURL(imagePreview);
      }
    };
  }, [imagePreview]);

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (imagePreview) {
      URL.revokeObjectURL(imagePreview);
    }

    setImageFile(file);
    const previewUrl = URL.createObjectURL(file);
    setImagePreview(previewUrl);
  };

  const handleSubmitReport = async () => {
    if (!price) {
      setPriceError(true);
      return;
    }

    setPriceError(false);
    setLoading(true);

    try {
      const result = await submitReport({
        productId: selectedProduct?.id,
        storeId: currentStore,
        categoryId: selectedProduct?.category_id,
        stockStatus,
        price,
        imageFile,
        nickname,
      });

      if (result.success) {
        handleClose();
      } else {
        console.error(result.error);
      }
    } catch (error) {
      console.error("Submit failed:", error);
    }

    setLoading(false);
  };

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
          onClick={() => setCurrentStore(null)}
        >
          <CirclePlus size={16} />
          Report Stock Update
        </Button>
      </DialogTrigger>
      <DialogContent className={styles.dialogContent}>
        {currentStore ? (
          selectedProduct ? (
            <>
              <DialogHeader>
                <button className={styles.backButton} onClick={() => setSelectedProduct(null)}>
                  <ArrowLeft size={16} />
                  Back to products
                </button>
              </DialogHeader>
              <div className={styles.dialoagHeader}>
                <h2>Report Stock Update</h2>
                <p>{selectedProduct?.brand} {selectedProduct?.name}</p>
              </div>

              <div className={styles.formBody}>
                {/* Stock Status */}
                <div className={styles.inputContainer}>
                  <div className={styles.formFieldTitle}>Stock Status</div>

                  <div className={styles.formField}>
                    <div
                      className={`${styles.stockPill} ${
                        stockStatus === "In Stock" ? styles.inStockActive : ""
                      }`}
                      onClick={() => setStockStatus("In Stock")}
                    >
                      In Stock
                    </div>

                    <div
                      className={`${styles.stockPill} ${
                        stockStatus === "Low Stock" ? styles.lowStockActive : ""
                      }`}
                      onClick={() => setStockStatus("Low Stock")}
                    >
                      Low Stock
                    </div>

                    <div
                      className={`${styles.stockPill} ${
                        stockStatus === "Out of Stock"
                          ? styles.outOfStockActive
                          : ""
                      }`}
                      onClick={() => setStockStatus("Out of Stock")}
                    >
                      Out of Stock
                    </div>
                  </div>
                </div>

                {/* Price */}
                <div className={styles.inputContainer}>
                  <div className={styles.formFieldTitle}>Price</div>

                  <div className="relative w-full">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2">
                      $
                    </span>

                    <Input
                      type="number"
                      value={price}
                      onChange={(e) => {
                        setPrice(e.target.value);
                        if (e.target.value) setPriceError(false);
                      }}
                      placeholder="0.00"
                      className={`pl-7 h-12 border ${
                        priceError ? "border-2 border-red-500" : ""
                      }`}
                    />
                  </div>
                </div>

                {/* Image Upload */}
                <div className={styles.inputContainer}>
                  <div className={styles.formFieldTitle}>
                    Upload Image (optional)
                  </div>

                  <label className={styles.uploadBox}>
                    <input
                      type="file"
                      accept="image/*"
                      hidden
                      onChange={handleImageChange}
                    />

                    {imagePreview ? (
                      <img
                        src={imagePreview}
                        alt="Selected preview"
                        className="w-full h-40 object-cover rounded-lg"
                      />
                    ) : (
                      <div className="flex flex-col items-center gap-2 justify-center">
                        <ImagePlus size={20} />
                        <span>Add Image</span>
                      </div>
                    )}
                  </label>
                </div>

                {/* Nickname */}
                <div className={styles.inputContainer}>
                  <div className={styles.formFieldTitle}>Nickname (optional)</div>

                  <Input
                    type="text"
                    value={nickname}
                    onChange={(e) => setNickname(e.target.value)}
                    placeholder="e.g. StockSpotter119"
                    className="h-12"
                  />
                </div>

                {/* Submit */}
                <div className={styles.inputContainer}>
                  <Button
                    className={styles.submitButton}
                    size="sm"
                    disabled={loading}
                    onClick={handleSubmitReport}
                  >
                    {loading ? "Submitting..." : "Submit Report"}
                  </Button>
                </div>
              </div>
            </>
          ) : (
            <>
              <DialogHeader>
                <button className={styles.backButton} onClick={handleBack}>
                  <ArrowLeft size={16} />
                  {selectedStore?.name}
                </button>
              </DialogHeader>
              <div className={styles.dialoagHeader}>
                <h2>Find a product</h2>
                <p>Select the product you want to report</p>
              </div>
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
                  <div key={index} className={styles.productCard} onClick={() => setSelectedProduct(product)}>
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
          )
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