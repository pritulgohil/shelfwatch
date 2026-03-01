import Footer from "@/app/components/Footer/Footer";
import CategoryPills from "@/app/components/CategoryPills/CategoryPills";
import ProductRender from "@/app/components/ProductRender/ProductRender";
import SearchBar from "@/app/components/SearchBar/SearchBar";
import StockPills from "@/app/components/StockPills/StockPills";
import StoreHeader from "@/app/components/PageHeader/PageHeader";
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
