import { NextResponse } from "next/server";

export default function Middlewares(request) {
    console.log("middlware runnung => ",request.nextUrl.pathname); // console will be seen in terminal only as it runs on server side

    // below is for the redirecting all enterpoints to login as user may not authorized for firing this router
    // this code not used below config object
    // if(request.nextUrl.pathname != "/login"){
    //     return NextResponse.redirect(new URL("/login" ,request.url))
    // }


    // this code used below config object
    // config is to add only specific route to redirect to login page
    return NextResponse.redirect(new URL("/login" ,request.url))
}

// config is to add only specific route to redirect to login page
export const config = {
    // matcher : "/about/:path*"  // redirect all routes after /about 
    matcher : ["/about/:path*" , "/login/teacher"]  // redirect all routes after /about  and /login/teacher to /login
}