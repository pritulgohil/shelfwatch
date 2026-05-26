import { NextResponse } from "next/server";
import { createReport, uploadReportImage } from "@/lib/db/reports/reports";


export async function POST(req){
    try{
        const body = await req.json();

        const{
            productId,storeId,statusId,price,imageUrl,nickname
        } = body;

        const result = await createReport({
            productId,
            storeId,
            statusId,
            price,
            imageUrl,
            nickname,
        });

        if(result.success){
            return NextResponse.json({success: true});
        }else{
            return NextResponse.json({error: "Failed to create report"}, {status: 500});
        }

    }catch(error){
        console.log("Create report failed:", error);
        return NextResponse.json({error: "Failed to create report"}, {status: 500});
    }
}