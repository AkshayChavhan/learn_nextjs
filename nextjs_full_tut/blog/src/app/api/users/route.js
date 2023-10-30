import { NextResponse } from "next/server";
import { user } from "../../../utils/db.js";


export async function GET(request) {
    const data = user;
    return NextResponse.json( data, { status: 200 });
}

export async function POST( request ){
    let parseData = await request.json();
    const { name , age , id} = parseData ;
    if( !name || !age || !id){
        return NextResponse.json({message : "Request fields not provided"} ,{status : 400})
    }
    // We are not creating user just added message for now
    return NextResponse.json({message : "New User Created"} ,{status : 201})
}