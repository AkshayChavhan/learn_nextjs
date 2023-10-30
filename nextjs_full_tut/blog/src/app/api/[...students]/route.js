import { NextResponse } from 'next/server';
import React from 'react'

export async function GET(request, content) {
    const studentContent = content.params.students;
    return NextResponse.json({ data: studentContent }, { status: 200 });  //here we catching all routes
}
