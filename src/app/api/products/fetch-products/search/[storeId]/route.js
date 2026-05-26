import { NextResponse } from "next/server";
import { getAllProducts } from "@/lib/db/products/products";

export async function GET(req, { params }) {
  try {
    const { storeId } = await params;
    const products = await getAllProducts(storeId);

    if (!products) {
      return NextResponse.json(
        { error: "products not found" },
        { status: 400 },
      );
    }

    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 },
    );
  }
}
