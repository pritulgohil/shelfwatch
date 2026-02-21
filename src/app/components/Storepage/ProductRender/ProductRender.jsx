"use client";

import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

import styles from "./ProductRender.module.css";
import products from "@/data/products.json";
import ProductCards from "@/app/components/Homepage/ProductCards/ProductCards";

const ProductRender = () => {
  const { city, slug } = useParams(); // get current store route

  return (
    <div className={styles.mainContainer}>
      <div className={styles.contentContainer}>
        <div className={styles.productCardsContainer}>
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/${city}/${slug}/${product.slug}`}
              style={{ display: "contents" }}
            >
              <ProductCards product={product} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductRender;
