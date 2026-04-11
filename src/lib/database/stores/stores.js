import { supabase } from "@/lib/supabase";

export async function getStores() {
  const { data, error } = await supabase.from("stores").select("*");
  if (error) {
    console.error("Error fetching stores:", error);
    return [];
  }
  return data;
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
