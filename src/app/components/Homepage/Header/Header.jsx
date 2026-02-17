"use client";
import React, { useState } from "react";
import styles from "./Header.module.css";
import { Eye, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <header className={styles.mainContainer}>
      <div className={styles.contentContainer}>
        <div className={styles.leftSideContainer}>
          <div className={styles.headerIcon}>
            <Eye />
          </div>
          <div className={styles.headerTitle}>
            <h1>ShelfWatch</h1>
          </div>
        </div>

        <div className={styles.rightSideContainer}>
          <ul className={styles.menuList}>
            <li className={`${styles.menuItem} ${styles.active}`}>Home</li>
            <li className={styles.menuItem}>About</li>
            <li className={styles.menuItem}>Contact</li>
          </ul>

          <div className={styles.mobileMenuIcon}>
            <Button variant="ghost" onClick={toggleMobileMenu}>
              <Menu strokeWidth={3} />
            </Button>
          </div>
        </div>
      </div>

      <div
        className={`${styles.mobileMenuOverlay} ${
          isMobileMenuOpen ? styles.open : ""
        }`}
        onClick={toggleMobileMenu}
      />

      <aside
        className={`${styles.mobileMenuContainer} ${
          isMobileMenuOpen ? styles.open : ""
        }`}
      >
        <div className={styles.mobileMenuTopContainer}>
          <h3 className={styles.mobileMenuHeader}>Menu</h3>
          <Button variant="ghost" onClick={toggleMobileMenu}>
            <X strokeWidth={3} className="text-gray-500" />
          </Button>
        </div>
        <ul className={styles.mobileMenuList}>
          <li className={`${styles.menuItem} ${styles.active}`}>Home</li>
          <li className={styles.menuItem}>About</li>
          <li className={styles.menuItem}>Contact</li>
        </ul>
      </aside>
    </header>
  );
};

export default Header;
