import { getProductDisplay } from "@/lib/database/products/products";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  try {
    const { product_id, store_id } = await params;

    const product = await getProductDisplay(product_id, store_id);

    return NextResponse.json(product || {}, { status: 200 });
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
