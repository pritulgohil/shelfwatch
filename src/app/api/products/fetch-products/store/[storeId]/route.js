import { NextResponse } from "next/server";
import { getProducts } from "@/lib/db/products/products";

export async function GET(req, { params }) {
  try {
    const { storeId } = await params;

    if (!storeId) {
      return NextResponse.json(
        { error: "storeId is required" },
        { status: 400 },
      );
    }

    const products = await getProducts(storeId);

    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 },
    );
  }
}
