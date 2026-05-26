import {NextResponse} from "next/server"
import { uploadReportImage } from "@/lib/db/reports/reports"

export async function POST(req){
    try {
        const formData = await req.formData();
        const imageFile = formData.get("imageFile");

        if(!imageFile || imageFile.size === 0){
            return NextResponse.json({error: "No file provided"}, {status: 400});
        }

        const imageUrl = await uploadReportImage(imageFile);
        return NextResponse.json({success: true, imageUrl});

    } catch (error) {
        console.error("Error uploading image:", error);
        return NextResponse.json({error: "Failed to upload image"}, {status: 500});
    }
}