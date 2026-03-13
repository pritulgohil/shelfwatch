import Footer from "@/app/components/Layout/Footer/Footer";
import CategoryPills from "@/app/components/Categories/CategoryPills/CategoryPills";
import ProductRender from "@/app/components/Renderers/ProductRender/ProductRender";
import SearchBar from "@/app/components/Common/SearchBar/SearchBar";
import StockPills from "@/app/components/Categories/StockPills/StockPills";
import StoreHeader from "@/app/components/Common/PageHeader/PageHeader";
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
