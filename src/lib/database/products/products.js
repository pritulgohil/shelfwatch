import { supabase } from "@/lib/supabase";

// export async function getProducts() {
//   const { data, error } = await supabase.from("products").select(`
//       *,
//       categories(name),
//       product_status(status_name)
//     `);

//   if (error) {
//     console.error("Error fetching products:", error);
//     return [];
//   }
//   return data;
// }

// export async function getProducts(storeId) {
//   const { data, error } = await supabase
//     .from("products")
//     .select(
//       `
//       *,
//       reports!left(
//         price,
//         image_url,
//         reported_by,
//         store_id,
//         status_id,
//         product_status:status_id(status_name)
//       )
//     `,
//     )
//     .eq("reports.store_id", storeId);

//   if (error) {
//     console.error("Error fetching products:", error);
//     return [];
//   }

//   return data;
// }

export async function getProducts(storeId) {
  const { data, error } = await supabase
    .from("products")
    .select(
      `
      *,
      categories(name),
      reports!left(
        price,
        image_url,
        reported_by,
        store_id,
        status_id,
        created_at,
        product_status:status_id(status_name)
      )
    `,
    )
    .eq("reports.store_id", storeId)
    .order("created_at", { foreignTable: "reports", ascending: false });

  if (error) {
    console.error("Error fetching products:", error);
    return [];
  }

  return data;
}

// export async function getProductsbyId(categoryId) {
//   const { data, error } = await supabase
//     .from("products")
//     .select(
//       `
//       *,
//       categories(name),
//       product_status(status_name)
//     `,
//     )
//     .eq("category_id", categoryId);
//   if (error) {
//     console.error(`Error fetching category with ID ${categoryId}:`, error);
//     return null;
//   }
//   return data;
// }

export async function getProductsbyId(categoryId, storeId) {
  if (!categoryId) {
    console.error("Missing categoryId");
    return [];
  }

  if (!storeId) {
    console.error("Missing storeId");
    return [];
  }

  const { data, error } = await supabase
    .from("products")
    .select(
      `
      *,
      categories(name),
      reports!left(
        price,
        image_url,
        reported_by,
        store_id,
        status_id,
        created_at,
        product_status:status_id(status_name)
      )
    `,
    )
    .eq("category_id", categoryId)
    .eq("reports.store_id", storeId)
    .order("created_at", { foreignTable: "reports", ascending: false })
    .limit(1, { foreignTable: "reports" });

  if (error) {
    console.error(`Error fetching category with ID ${categoryId}:`, error);
    return [];
  }

  return data;
}

// export async function getProductDisplay(productId, storeId) {
//   const { data, error } = await supabase
//     .from("products")
//     .select(
//       `
//       *,
//       categories(name),
//       product_status(status_name),
//       reports(price, image_url, reported_by, created_at)
//       `,
//     )
//     .eq("id", productId)
//     .eq("reports.store_id", storeId)
//     .eq("reports.product_id", productId)
//     .single();

//   if (error) {
//     console.error("Error fetching product display:", error);
//     return null;
//   }

//   return data;
// }

export async function getProductDisplay(productId, storeId) {
  const { data, error } = await supabase
    .from("products")
    .select(
      `
      *,
      categories(name),
      reports(
        price,
        image_url,
        reported_by,
        created_at,
        status_id,
        product_status(status_name)
      )
    `,
    )
    .eq("id", productId)
    .eq("reports.store_id", storeId)
    .eq("reports.product_id", productId)
    .order("created_at", {
      referencedTable: "reports",
      ascending: false,
    })
    .single();

  if (error) {
    console.error("Error fetching product display:", error);
    return null;
  }

  return data;
}
