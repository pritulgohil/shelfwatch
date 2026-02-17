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
    <div>
      <h1>{store.name}</h1>
      <p>{store.address}</p>
      <p>{store.productsTracked} Products Tracked</p>
    </div>
  );
}
