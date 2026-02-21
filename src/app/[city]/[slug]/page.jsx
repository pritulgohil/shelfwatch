import Footer from "@/app/components/Homepage/Footer/Footer";
import CategoryPills from "@/app/components/Storepage/CategoryPills/CategoryPills";
import ProductRender from "@/app/components/Storepage/ProductRender/ProductRender";
import SearchBar from "@/app/components/Storepage/SearchBar/SearchBar";
import StockPills from "@/app/components/Storepage/StockPills/StockPills";
import StoreHeader from "@/app/components/Storepage/StoreHeader/StoreHeader";
import stores from "@/data/stores.json";

export function generateStaticParams() {
  return stores.map((store) => ({
    city: store.city,
    slug: store.slug,
  }));
}

export default async function StorePage({ params }) {
  const { city, slug } = await params;
  const store = stores.find((s) => s.slug === slug);

  if (!store) {
    return (
      <div>
        Store not found. Looking for: {city}/{slug}
      </div>
    );
  }

  return (
    <>
      <StoreHeader store={store} />
      <SearchBar />
      <CategoryPills />
      <StockPills />
      <ProductRender city={city} slug={slug} storeId={store.id} />
      <Footer />
    </>
  );
}
