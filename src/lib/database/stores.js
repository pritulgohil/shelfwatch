import { supabase } from "@/lib/supabase";

export async function getStores() {
  const { data, error } = await supabase.from("stores").select("*");
  if (error) {
    console.error("Error fetching stores:", error);
    return [];
  }
  return data;
}
