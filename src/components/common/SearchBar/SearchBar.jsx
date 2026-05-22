"use client";
import React, { useState } from "react";
import styles from "./SearchBar.module.css";
import { Input } from "@/components/ui/input";
import { LucideSearch, MapPin, Clock } from "lucide-react";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

const mockProducts = [
  "Kirkland Water",
  "Chicken Breast",
  "Eggs",
  "Milk",
  "Greek Yogurt",
  "Orange Juice",
  "Salmon",
];

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = (value) => {
    setQuery(value);

    if (!value.trim()) {
      setResults([]);
      return;
    }

    const filtered = mockProducts.filter((item) =>
      item.toLowerCase().includes(value.toLowerCase()),
    );

    setResults(filtered);
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.contentContainer}>
        <div className={styles.searchBarContainer}>
          <div className={styles.searchBarInput}>
            {/* icon */}
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <LucideSearch className="h-5 w-5 text-gray-400" />
            </div>
            <Input
              type="text"
              value={query}
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="Search products (e.g. Kirkland water, chicken)..."
              className="pl-10 shadow-none"
            />
            {results.length > 0 && (
              <div className={styles.resultsDropdown}>
                <div className={styles.searchHeaderWrapper}>
                  <div className={styles.searchHeader}>4 Results</div>
                </div>
                <div className={styles.itemWrapper}>
                  <div className={styles.item}>
                    <div className={styles.leftSide}>
                      <div className={styles.imageContainer}>
                        <Image
                          src="/images/placeholder-image.png"
                          alt="Product Image"
                          width={40}
                          height={40}
                          className={styles.image}
                        />
                      </div>
                    </div>
                    <div className={styles.rightSide}>
                      <div className={styles.itemHeader}>
                        <div className={styles.itemName}>
                          Kirkland Water 40-Pack
                        </div>
                        <div className={styles.stockPill}>In Stock</div>
                      </div>
                      <div className={styles.itemMeta}>
                        <div className={styles.price}>$12.99</div>
                        <div className={styles.location}>
                          <MapPin size={12} /> Costco London North
                        </div>
                        <div className={styles.time}>
                          <Clock size={12} />
                          10 min ago
                        </div>
                      </div>
                    </div>
                  </div>
                  <Separator />
                  <div className={styles.item}>
                    <div className={styles.leftSide}>
                      <div className={styles.imageContainer}>
                        <Image
                          src="/images/placeholder-image.png"
                          alt="Product Image"
                          width={40}
                          height={40}
                          className={styles.image}
                        />
                      </div>
                    </div>
                    <div className={styles.rightSide}>
                      <div className={styles.itemHeader}>
                        <div className={styles.itemName}>
                          Kirkland Water 40-Pack
                        </div>
                        <div className={styles.stockPill}>In Stock</div>
                      </div>
                      <div className={styles.itemMeta}>
                        <div className={styles.price}>$12.99</div>
                        <div className={styles.location}>
                          <MapPin size={12} /> Costco London North
                        </div>
                        <div className={styles.time}>
                          <Clock size={12} />
                          10 min ago
                        </div>
                      </div>
                    </div>
                  </div>
                  <Separator />
                  <div className={styles.item}>
                    <div className={styles.leftSide}>
                      <div className={styles.imageContainer}>
                        <Image
                          src="/images/placeholder-image.png"
                          alt="Product Image"
                          width={40}
                          height={40}
                          className={styles.image}
                        />
                      </div>
                    </div>
                    <div className={styles.rightSide}>
                      <div className={styles.itemHeader}>
                        <div className={styles.itemName}>
                          Kirkland Water 40-Pack
                        </div>
                        <div className={styles.stockPill}>In Stock</div>
                      </div>
                      <div className={styles.itemMeta}>
                        <div className={styles.price}>$12.99</div>
                        <div className={styles.location}>
                          <MapPin size={12} /> Costco London North
                        </div>
                        <div className={styles.time}>
                          <Clock size={12} />
                          10 min ago
                        </div>
                      </div>
                    </div>
                  </div>
                  <Separator />
                  <div className={styles.item}>
                    <div className={styles.leftSide}>
                      <div className={styles.imageContainer}>
                        <Image
                          src="/images/placeholder-image.png"
                          alt="Product Image"
                          width={40}
                          height={40}
                          className={styles.image}
                        />
                      </div>
                    </div>
                    <div className={styles.rightSide}>
                      <div className={styles.itemHeader}>
                        <div className={styles.itemName}>
                          Kirkland Water 40-Pack
                        </div>
                        <div className={styles.stockPill}>In Stock</div>
                      </div>
                      <div className={styles.itemMeta}>
                        <div className={styles.price}>$12.99</div>
                        <div className={styles.location}>
                          <MapPin size={12} /> Costco London North
                        </div>
                        <div className={styles.time}>
                          <Clock size={12} />
                          10 min ago
                        </div>
                      </div>
                    </div>
                  </div>
                  <Separator />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
