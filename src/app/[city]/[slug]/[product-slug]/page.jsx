import StoreHeader from "@/app/components/PageHeader/PageHeader";
import stores from "@/data/stores.json";
import products from "@/data/products.json";
import { notFound } from "next/navigation";
import ProductDisplay from "@/app/components/ProductDisplay/ProductDisplay";

export default async function StorePage({ params }) {
  const { city, slug, "product-slug": productSlug } = await params;

  const storeData = stores.find((s) => s.slug === slug && s.city === city);

  const productData = products.find((p) => p.slug === productSlug);

  if (!storeData || !productData) {
    return notFound();
  }

  const store = {
    name: productData.name,
    address: storeData.name,
  };

  return (
    <>
      <StoreHeader store={store} />
      <ProductDisplay product={productData} />
    </>
  );
}
