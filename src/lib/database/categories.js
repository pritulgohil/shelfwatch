import { supabase } from "@/lib/supabase";

export async function getCategories() {
  const { data, error } = await supabase.from("categories").select("*");
  if (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
  return data;
}
