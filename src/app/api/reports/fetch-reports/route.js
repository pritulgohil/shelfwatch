import { NextResponse } from "next/server";
import { fetchReports } from "@/lib/db/reports/reports";

export async function GET() {
  try {
    const reports = await fetchReports();
    return NextResponse.json(reports);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch reports" },
      { status: 500 },
    );
  }
}
