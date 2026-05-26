"use client";

import StoreHeader from "@/components/common/PageHeader/PageHeader";
import ProductDisplay from "@/components/products/ProductDisplay/ProductDisplay";
import { useProductPage } from "./useProductPage";

export default function StorePage() {
  const {
    currentStore,
    currentProduct,
    currentProductDisplay,
    loading,
    error,
    refreshProduct,
  } = useProductPage();

  if (loading) return <div>Loading product...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!currentProduct) return <div>No product found</div>;

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

