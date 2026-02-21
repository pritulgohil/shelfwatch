import StoreHeader from "@/app/components/Storepage/StoreHeader/StoreHeader";
import stores from "@/data/stores.json";
import products from "@/data/products.json";
import { notFound } from "next/navigation";

export default async function StorePage({ params }) {
  const { city, slug, "product-slug": productSlug } = await params;

  console.log("Looking for:", { city, slug, productSlug });

  const storeData = stores.find((s) => s.slug === slug && s.city === city);
  console.log("Store found:", storeData);

  const productData = products.find((p) => p.slug === productSlug);
  console.log("Product found:", productData);

  if (!storeData || !productData) {
    console.log(
      "Not found - storeData:",
      !!storeData,
      "productData:",
      !!productData,
    );
    return notFound();
  }

  const store = {
    name: productData.name,
    address: storeData.name,
  };

  return (
    <>
      <StoreHeader store={store} />
    </>
  );
}
