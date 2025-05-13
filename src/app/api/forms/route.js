import mongoose from "mongoose";
import { Form } from "../../model/form";
import { NextResponse } from "next/server";

//const uri = process.env.MONGO_URI;

export async function POST(request){
   const uri = process.env.MONGO_URI;
   const payload = await request.json()
   await mongoose.connect(uri);
   let form = new Form (payload);
   console.log(form)
   const result = await Form.save();
   console.log(result)
   return NextResponse.json({result,success:true})
   
}