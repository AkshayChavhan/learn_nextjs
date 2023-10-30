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