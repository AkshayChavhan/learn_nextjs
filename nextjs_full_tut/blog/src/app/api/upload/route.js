import { NextResponse } from 'next/server';
import React from 'react'
import { writeFile } from "fs/promises";


export async function POST(req ,content) {
    const data  = await req.formData();
    const file = await data.get('file');
    if(!file){
        return NextResponse.json({ success: false, message: "File not updated" });
    }
    const byteData = await file.arrayBuffer();
    const buffer = Buffer.from(byteData);
    const path = `./public/${file.name}`
    await writeFile(path ,buffer);
    console.log("file => ", file);
    return NextResponse.json({ success: true, message: "File uploaded successfully" })
}