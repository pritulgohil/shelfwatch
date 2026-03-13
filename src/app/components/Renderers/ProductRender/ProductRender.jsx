"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import styles from "./ProductRender.module.css";
import ProductCards from "@/app/components/Product/ProductCard/ProductCard";

const ProductRender = () => {
  const { city, slug } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/products/fetch-products");
        if (!res.ok) throw new Error("Failed to fetch products");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) return <div>Loading products...</div>;

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
