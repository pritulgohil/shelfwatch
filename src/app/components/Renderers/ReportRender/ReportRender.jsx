"use client";

import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import styles from "./ReportRender.module.css";
import products from "@/data/products.json";
import ProductCards from "@/app/components/Product/ProductCard/ProductCard";

const ReportRender = () => {
  const { city, slug } = useParams();
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
              {/* <ProductCards product={product} /> */}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReportRender;
