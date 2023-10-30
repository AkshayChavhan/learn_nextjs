import { NextResponse } from "next/server";
import { user } from "../../../../utils/db.js";


export function GET(request, content) {
    const filterdata = user.filter((item) => item.id == content.params.userid);
    if (filterdata.length === 0) {
        return NextResponse.json({ result: "Not found", status: 404 }); // Changed status to 404 (Not Found)
    } else {
        return NextResponse.json({ result: filterdata, status: 200 }); // Changed status to 200 (OK)
    }
}


export async function PUT(request, content) {
    const body = await request.json();
    console.log("content.params.userid  ,", content.params.userid, "body ,", body);
    if(!body.name || !body.id || !body.age ){
        return NextResponse.json({ result: "Please input the required data", status: 400 }); // Changed status to 404 (Not Found)
    }
    return NextResponse.json({ message : "User Updated", result : body , suceess : true , status: 200 }); // Changed status to 404 (Not Found)
}


export async function DELETE(request, content) {
    const id = content.params.userid ;
    if(!id){
        return NextResponse.json({ result: "Internal error, please try after sometime.", status: 400 }); // Changed status to 404 (Not Found)
    }
    return NextResponse.json({ message : "User deleted successfully", suceess : true , status: 200 }); // Changed status to 404 (Not Found)
}
