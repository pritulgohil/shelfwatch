import { supabase } from "@/lib/supabase";

export async function getProducts() {
  const { data, error } = await supabase.from("products").select(`
      *,
      categories(name),
      product_status(status_name) 
    `);

  if (error) {
    console.error("Error fetching products:", error);
    return [];
  }
  return data;
}
