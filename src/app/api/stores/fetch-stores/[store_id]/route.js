import { getStoreById } from "@/lib/db/stores/stores";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  try {
    const { store_id } = await params;
    const store = await getStoreById(store_id);
    return NextResponse.json(store || [], { status: 200 });
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
