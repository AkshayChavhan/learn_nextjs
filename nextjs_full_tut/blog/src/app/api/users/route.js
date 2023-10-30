import { NextResponse } from "next/server";
import { user } from "../../../utils/db.js";


export async function GET(request) {
    const result = user;
    console.log(result);
    return NextResponse.json({result :result.json }, { status: 201 });
}