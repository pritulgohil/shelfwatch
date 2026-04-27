import { supabase } from "@/lib/supabase";
import { v4 as uuidv4 } from "uuid";

export async function fetchReports() {
  const { data, error } = await supabase
    .from("reports")
    .select(
      `
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
    `,
    )
    .order("created_at", { ascending: false });
  if (error) {
    console.error("Error fetching reports:", error);
    return [];
  }

  return data;
}

// export async function createReport({
//   productId,
//   storeId,
//   statusId,
//   categoryId,
//   price,
// }) {
//   try {
//     const { data, error } = await supabase
//       .from("reports")
//       .insert([
//         {
//           product_id: productId,
//           store_id: storeId || null,
//           price: price ? Number(price) : null,
//           image_url: null,
//           reported_by: "Anonymous",
//           status_id: statusId,
//           category_id: categoryId,
//         },
//       ])
//       .select()
//       .single();

//     if (error) throw error;

//     return {
//       success: true,
//       data,
//     };
//   } catch (error) {
//     console.error("Create report failed:", error);

//     return {
//       success: false,
//       error,
//     };
//   }
// }

/* ---------------- IMAGE UPLOAD ---------------- */

export async function uploadReportImage(file) {
  if (!file) return null;

  const fileExt = file.name.split(".").pop();

  const filePath = `reports/${uuidv4()}.${fileExt}`;

  const { error } = await supabase.storage
    .from("reports")
    .upload(filePath, file, {
      cacheControl: "3600",
      upsert: false,
    });

  if (error) throw error;

  const { data } = supabase.storage.from("reports").getPublicUrl(filePath);

  return data.publicUrl;
}

/* ---------------- CREATE REPORT ---------------- */

export async function createReport({
  productId,
  storeId,
  statusId,
  categoryId,
  price,
  imageFile,
}) {
  try {
    let imageUrl = null;

    if (imageFile) {
      imageUrl = await uploadReportImage(imageFile);
    }

    const { data, error } = await supabase
      .from("reports")
      .insert([
        {
          product_id: productId,
          store_id: storeId,
          price: price ? Number(price) : null,
          image_url: imageUrl,
          reported_by: "Anonymous",
          status_id: statusId,
          category_id: categoryId,
        },
      ])
      .select()
      .single();

    if (error) throw error;

    return { success: true, data };
  } catch (error) {
    console.error("Create report failed:", error);

    return { success: false, error };
  }
}
