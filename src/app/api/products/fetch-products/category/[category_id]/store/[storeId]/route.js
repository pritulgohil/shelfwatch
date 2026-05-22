import { getProductsbyId } from "@/lib/db/products/products";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  try {
    const { category_id, storeId } = await params;

    const products = await getProductsbyId(category_id, storeId);

    return NextResponse.json(products || [], { status: 200 });
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
