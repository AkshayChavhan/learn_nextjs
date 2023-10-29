import { NextResponse } from "next/server";

export async function GET(request){
    return NextResponse.json({ name : "Akshay" , position : "Developer"},{status:201})
}