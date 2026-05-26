"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import styles from "./ProductList.module.css";
import ProductCards from "@/components/products/ProductCard/ProductCard";
import { useCategoryContext } from "@/context/CategoryContext";
import { useStoreContext } from "@/context/StoreContext";
import { PackageX, LoaderCircle } from "lucide-react";

const ProductRender = ({ searchQuery }) => {
  const { city, slug } = useParams();
  const { selectedCategory } = useCategoryContext();
  const { currentStore } = useStoreContext();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const allProductId = "52efbe65-925b-4d93-8c23-63d0dcc3c31a";

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);

      try {
        const endpoint =
          selectedCategory === allProductId
            ? `/api/products/fetch-products/store/${currentStore}`
            : `/api/products/fetch-products/category/${selectedCategory}/store/${currentStore}`;

        const res = await fetch(endpoint);
        if (!res.ok) throw new Error("Failed to fetch products");

        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    if (currentStore) fetchProducts();
  }, [selectedCategory, currentStore]);

  const filteredProducts = products.filter((product) => {
    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase();
    return (
      product.name?.toLowerCase().includes(query) ||
      product.brand?.toLowerCase().includes(query) ||
      product.description?.toLowerCase().includes(query)
    );
  });

  return (
    <div className={styles.mainContainer}>
      <div className={styles.contentContainer}>
        {loading ? (
          <div className={styles.centerMessage}>
            <LoaderCircle className="animate-spin" />
            <p>Loading products...</p>
          </div>
        ) : filteredProducts.length === 0 ? (
          <div className={styles.centerMessage}>
            <PackageX />
            <p>No products found.</p>
          </div>
        ) : (
          <div className={styles.productCardsContainer}>
            {filteredProducts.map((product) => (
              <Link
                key={product.id}
                href={`/${city}/${slug}/${product.slug}`}
                style={{ display: "contents" }}
              >
                <ProductCards product={product} />
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductRender;
