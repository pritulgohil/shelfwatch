"use client";

import StoreHeader from "@/components/common/PageHeader/PageHeader";
import ProductDisplay from "@/components/products/ProductDisplay/ProductDisplay";
import { useProductContext } from "@/context/ProductContext";
import { useStoreContext } from "@/context/StoreContext";
import { useState, useEffect } from "react";

export default function StorePage({ params }) {
  const {
    currentProduct,
    currentProductDisplay,
    setCurrentProductDisplay,
  } = useProductContext();
  const { currentStore } = useStoreContext();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [refreshKey, setRefreshKey] = useState(0);
  useEffect(() => {
    if (!currentProduct || !currentStore) return;
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `/api/products/product-display/${currentProduct}/${currentStore}`,
        );
        if (!res.ok) throw new Error("Failed to fetch product");
        const data = await res.json();
        setCurrentProductDisplay(data);
      } catch (err) {
        console.error("Error fetching product:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [currentProduct, currentStore, refreshKey]);
  if (loading) return <div>Loading product...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!currentProduct) return <div>No product found</div>;

  const refreshProduct = () => {
    setRefreshKey((prev) => prev + 1);
  };

  return (
    <>
      <StoreHeader store={currentStore} />
      <ProductDisplay
        currentProductDisplay={currentProductDisplay}
        onSuccess={refreshProduct}
      />
    </>
  );
}
