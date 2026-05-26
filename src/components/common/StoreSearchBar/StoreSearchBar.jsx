"use client";
import React from "react";
import styles from "./StoreSearchBar.module.css";
import { Input } from "@/components/ui/input";
import { LucideSearch } from "lucide-react";

const StoreSearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.contentContainer}>
        <div className={styles.searchBarContainer}>
          <div className={styles.searchBarInput}>
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <LucideSearch className="h-5 w-5 text-gray-400" />
            </div>
            <Input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products in this store..."
              className="pl-10 shadow-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreSearchBar;
