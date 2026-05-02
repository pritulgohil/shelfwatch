import { NextResponse } from "next/server";
import { incrementReportConfirm } from "@/lib/database/reports/reports";

export async function POST(req, { params }) {
  try {
    const { reportId } = await params;

    if (!reportId) {
      return NextResponse.json(
        { success: false, error: "reportId is required" },
        { status: 400 },
      );
    }

    const result = await incrementReportConfirm(reportId);

    console.log("RPC RESULT:", result);

    if (result !== true) {
      return NextResponse.json(
        {
          success: false,
          error: "No matching report found or update failed",
          reportId,
        },
        { status: 400 },
      );
    }

    return NextResponse.json({
      success: true,
      reportId,
    });
  } catch (err) {
    console.error(err);

    return NextResponse.json(
      { success: false, error: "Server error" },
      { status: 500 },
    );
  }
}
