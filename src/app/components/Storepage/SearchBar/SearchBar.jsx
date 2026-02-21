import React from "react";
import styles from "./SearchBar.module.css";
import { Input } from "@/components/ui/input";
import { LucideSearch } from "lucide-react";

const SearchBar = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.searchBarContainer}>
        <div className={styles.searchBarInput}>
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <LucideSearch className="h-5 w-5 text-gray-400" />
          </div>
          <Input
            type="text"
            placeholder="Search products (e.g. Kirkland water, chicken)..."
            className="pl-10 shadow-none" // leave space for icon
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
