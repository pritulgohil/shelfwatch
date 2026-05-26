"use client";

import React, { useState, useEffect } from "react";
import styles from "./StockReportButton.module.css";
import { Button } from "@/components/ui/button";
import { CirclePlus, ImagePlus } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useProductContext } from "@/context/ProductContext";
import { useStoreContext } from "@/context/StoreContext";
import { useReportContext } from "@/context/ReportContext";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";

const StockReportButton = ({ onSuccess }) => {
  const { currentProductDisplay } = useProductContext();
  const { currentStore } = useStoreContext();
  const { submitReport } = useReportContext();

  const [open, setOpen] = useState(false);
  const [stockStatus, setStockStatus] = useState("In Stock");
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [price, setPrice] = useState("");
  const [loading, setLoading] = useState(false);
  const [priceError, setPriceError] = useState(false);
  const [nickname, setNickname] = useState("");

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

  useEffect(() => {
    return () => {
      if (imagePreview) {
        URL.revokeObjectURL(imagePreview);
      }
    };
  }, [imagePreview]);

  const handleSubmitReport = async () => {
    if (!price) {
      setPriceError(true);
      return;
    }

    setPriceError(false);
    setLoading(true);

    try {
      const result = await submitReport({
        productId: currentProductDisplay?.id,
        storeId: currentStore,
        categoryId: currentProductDisplay?.category_id,
        stockStatus,
        price,
        imageFile,
        nickname,
      });

      if (result.success) {
        setPrice("");
        setStockStatus("In Stock");
        setImageFile(null);
        setImagePreview(null);
        setNickname("");
        setOpen(false);

        onSuccess?.();
      } else {
        console.error(result.error);
      }
    } catch (error) {
      console.error("Submit failed:", error);
    }

    setLoading(false);
  };

  return (
    <div className={styles.reportStockButtonContainer}>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            className={`${styles.reportStockButton} w-full p-6 cursor-pointer shadow-none`}
            size="sm"
          >
            <CirclePlus size={16} />
            Report Stock Update
          </Button>
        </DialogTrigger>

        <DialogContent className={styles.dialogContent}>
          <DialogHeader>
            <DialogTitle>Report Stock Update</DialogTitle>
            <DialogDescription>
              Enter the stock changes for this item.
            </DialogDescription>
          </DialogHeader>

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
                  <div className="flex flex-col items-center gap-2">
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
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default StockReportButton;