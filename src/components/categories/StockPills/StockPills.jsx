"use client";
import React, { useState } from "react";
import styles from "./StockPills.module.css";
import stocks from "@/data/stock.json";

const StockPills = () => {
  const [activeStock, setActiveStock] = useState(1);
  return (
    <div className={styles.mainContainer}>
      <div className={styles.contentContainer}>
        <div className={styles.stockPillsContainer}>
          {stocks.map((stock) => (
            <div
              key={stock.id}
              className={`${styles.stockPill} ${
                activeStock === stock.id ? styles.active : ""
              }`}
              onClick={() => setActiveStock(stock.id)}
            >
              {stock.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StockPills;
