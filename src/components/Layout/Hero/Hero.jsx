import React from "react";
import styles from "./Hero.module.css";
import { Input } from "@/components/ui/input";
import { LucideSearch } from "lucide-react";
import SearchBar from "@/components/common/SearchBar/SearchBar";

const Hero = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.contentContainer}>
        <div className={styles.hereTypoContainer}>
          <div className={styles.heroText}>
            <h2>Check stock before you go.</h2>
          </div>
          <div className={styles.heroDescription}>
            Get live stock updates from real shoppers in London, Ontario. See if
            your favorite products are in stock before you make the trip.{" "}
          </div>
        </div>
        <div className={styles.searchBar}>
          <SearchBar />
        </div>
      </div>
    </div>
  );
};

export default Hero;
