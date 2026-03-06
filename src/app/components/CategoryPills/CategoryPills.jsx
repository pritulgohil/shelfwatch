"use client";
import React, { useState, useEffect } from "react";
import styles from "./CategoryPills.module.css";

const CategoryPills = () => {
  const [categoriesData, setCategoriesData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(
    "52efbe65-925b-4d93-8c23-63d0dcc3c31a",
  );

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("/api/categories");
        const data = await response.json();
        const sortedCategories = data.sort((a, b) =>
          a.name.localeCompare(b.name),
        );
        setCategoriesData(sortedCategories);
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
