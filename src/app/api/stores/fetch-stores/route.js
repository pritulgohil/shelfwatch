import { NextResponse } from "next/server";
import { getStores } from "@/lib/database/stores/stores";

export async function GET() {
  try {
    const stores = await getStores();
    return NextResponse.json(stores);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch stores" },
      { status: 500 },
    );
  }
}
