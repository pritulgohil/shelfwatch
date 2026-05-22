import { supabase } from "@/lib/supabase";

// export async function getStores() {
//   const { data, error } = await supabase.from("stores").select("*");
//   if (error) {
//     console.error("Error fetching stores:", error);
//     return [];
//   }
//   return data;
// }

export async function getStores() {
  const { data, error } = await supabase.from("stores").select(`
      id,
      name,
      address,
      city,
      store_slug,
      created_at,
      products_tracked:reports!left(product_id)
    `);

  if (error) {
    console.error("Error fetching stores:", error);
    return [];
  }

  return data.map((store) => ({
    ...store,
    products_tracked: new Set(
      (store.products_tracked || []).map((p) => p.product_id),
    ).size,
  }));
}

export async function getStoreById(id) {
  const { data, error } = await supabase
    .from("stores")
    .select("name, address")
    .eq("id", id)
    .single();

  if (error) {
    console.error("Error fetching store:", error);
    return null;
  }

  return data;
}
