import { NextResponse } from "next/server";
import { user } from "../../../utils/db.js";


export async function GET(request) {
    const data = user;
    return NextResponse.json( data, { status: 200 });
}