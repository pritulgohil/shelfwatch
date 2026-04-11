import { supabase } from "@/lib/supabase";

export async function fetchReports() {
  const { data, error } = await supabase.from("reports").select(`
      id,
      created_at,
      product_id,
      price,
      image_url,
      products (
        id,
        name,
        brand,
        description,
        slug,
        categories (
          name
        )
      ),
      stores (
        id,
        name,
        city,
        store_slug
      ),
      product_status (
        status_name
      )
    `);

  if (error) {
    console.error("Error fetching reports:", error);
    return [];
  }

  return data;
}
