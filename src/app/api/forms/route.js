import mongoose from "mongoose";
import { Form } from "../../model/form";
import { NextResponse } from "next/server";

const uri = process.env.MONGODB_URI;

export async function POST(request){
   //const uri = process.env.MONGODB_URI;
   const payload = await request.json()
   await mongoose.connect(uri);
   let form = new Form (payload);
   console.log(form)
   const result = await form.save();
   console.log(result)
   return NextResponse.json({result,success:true})
   
}


export async function GET(){
   let data = [];
   let success = false
   try{
      await mongoose.connect(uri);
      data = await Form.find();
   }
   catch(error){
      data = {result : "error"}
      success = false
   }
   return NextResponse.json({result:data},{success})
}