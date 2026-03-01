"use client";
import React, { useState } from "react";
import styles from "./StockReportButton.module.css";
import { Button } from "@/components/ui/button";
import { CirclePlus, ImagePlus } from "lucide-react";
import { Input } from "@/components/ui/input";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";

const StockReportButton = () => {
  const [stockStatus, setStockStatus] = useState("In Stock");
  return (
    <div className={styles.reportStockButtonContainer}>
      <Dialog>
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
            <div className={styles.inputContainer}>
              <div className={styles.formFieldTitle}>Stock Status</div>
              <div className={styles.formField}>
                <div
                  className={`${styles.stockPill} ${stockStatus === "In Stock" ? styles.inStockActive : ""}`}
                  onClick={() => setStockStatus("In Stock")}
                >
                  In Stock
                </div>
                <div
                  className={`${styles.stockPill} ${stockStatus === "Low Stock" ? styles.lowStockActive : ""}`}
                  onClick={() => setStockStatus("Low Stock")}
                >
                  Low Stock
                </div>
                <div
                  className={`${styles.stockPill} ${stockStatus === "Out of Stock" ? styles.outOfStockActive : ""}`}
                  onClick={() => setStockStatus("Out of Stock")}
                >
                  Out of Stock
                </div>
              </div>
            </div>
            <div className={styles.inputContainer}>
              <div className={styles.formFieldTitle}>Price</div>
              <div className={styles.formField}>
                <div className="relative w-full">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                    $
                  </span>
                  <Input
                    id="input-demo-api-key"
                    type="number"
                    placeholder="0.00"
                    className="pl-7 h-12"
                  />
                </div>
              </div>
            </div>
            <div className={styles.inputContainer}>
              <div className={styles.formFieldTitle}>Upload Image</div>
              <label className={styles.uploadBox}>
                <input type="file" accept="image/*" hidden />
                <div className="flex flex-col items-center gap-2">
                  <ImagePlus size={20} />
                  <span>Upload Image</span>
                </div>
              </label>
            </div>
            <div className={styles.inputContainer}>
              <Button className={styles.submitButton} size="sm">
                Submit Report
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default StockReportButton;
