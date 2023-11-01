import { mongodbstr } from '@/lib/db';
import { Product } from '@/lib/model/product';
import mongoose from 'mongoose';
import { NextResponse } from 'next/server';

export async function PUT (request , content) {
  const { params : { product_id }} = content ;
  const body = await request.json();
  const filter = { _id: product_id };
  await mongoose.connect(mongodbstr);
  const resultData = await Product.findOneAndUpdate(filter,body);
  return NextResponse.json({ success: true, result : resultData , message: "Successfully updated" }, { status: 200 }) 
}


export async function GET (request , content) {
  const { params : { product_id }} = content ;
  const filter = { _id: product_id };
  await mongoose.connect(mongodbstr);
  const resultData = await Product.findById(filter);
  return NextResponse.json({ success: true, result : resultData , message: "Successfully updated" }, { status: 200 }) 
}


export async function DELETE (request , content) {
  try {
    const { params : { product_id }} = content ;
    const filter = { _id: product_id };
    await mongoose.connect(mongodbstr);
    const resultData = await Product.deleteOne(filter);
    return NextResponse.json({ success: true, result : resultData , message: "Successfully deleted." }, { status: 200 }) 
  } catch (error) {
    debugger
    return NextResponse.json({ success: false, result : resultData , message: "Product not found." }, { status: 200 }) 
  }
}
