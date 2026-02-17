import React from "react";
import styles from "./Footer.module.css";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <div className={styles.mainContainer}>
      <Separator />
      <div className={styles.contentContainer}>
        <p>
          ShelfWatch is a community-driven tool. Stock info is reported by
          shoppers and may not be 100% accurate. Not affiliated with Costco
          Wholesale.
        </p>
      </div>
    </div>
  );
};

export default Footer;
