"use client";
import React, { useState, useEffect } from "react";
import styles from "./CategoryPills.module.css";
// import categories from "@/data/categories.json";

const CategoryPills = () => {
  const [categoriesData, setCategoriesData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(0);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("/api/categories");
        const text = await response.text();
        const data = JSON.parse(text);
        setCategoriesData(data);
        console.log("Fetched categories:", data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.contentContainer}>
        <div className={styles.categoryPillsContainer}>
          {categoriesData.map((category) => (
            <div
              key={category.id}
              className={`${styles.pill} ${selectedCategory === category.id ? styles.active : ""}`}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.icon && (
                <div className={styles.categoryEmoji}>{category.icon}</div>
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
