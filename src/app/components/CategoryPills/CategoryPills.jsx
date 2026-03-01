"use client";
import React, { useState } from "react";
import styles from "./CategoryPills.module.css";
import categories from "@/data/categories.json";

const CategoryPills = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);
  return (
    <div className={styles.mainContainer}>
      <div className={styles.contentContainer}>
        <div className={styles.categoryPillsContainer}>
          {categories.map((category) => (
            <div
              key={category.id}
              className={`${styles.pill} ${selectedCategory === category.id ? styles.active : ""}`}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.emoji && (
                <div className={styles.categoryEmoji}>{category.emoji}</div>
              )}
              <div className={styles.categoryName}>{category.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryPills;
