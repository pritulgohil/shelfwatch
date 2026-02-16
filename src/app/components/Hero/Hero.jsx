import React from "react";
import styles from "./Hero.module.css";
import { Input } from "@/components/ui/input";
import { LucideSearch } from "lucide-react";

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
        <div className={styles.searchBarContainer}>
          <div className={styles.searchBarInput}>
            {/* Icon inside input */}
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
    </div>
  );
};

export default Hero;
