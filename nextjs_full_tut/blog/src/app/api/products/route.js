import mongoose from 'mongoose'
import { mongodbstr } from "../../../lib/db.js";
import { NextResponse } from 'next/server';
import { Product } from '@/lib/model/product.js';

export async function GET() {
    try {
        await mongoose.connect(mongodbstr);
        const data = await Product.find();
        return NextResponse.json({ success: true, message: "Successfully data fetch from DB", result: data }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ success: false, message: `Error found as ${error}` }, { status: 200 })
    }
}

export async function POST(request) {
    try {
        await mongoose.connect(mongodbstr);
        const body = await request.json();
        let product = await new Product(body);
        product = await product.save();
        return NextResponse.json({ success: true, message: "Successfully data post from DB", result: product }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ success: false, message: `Error found as ${error}` }, { status: 200 })
    }
}

