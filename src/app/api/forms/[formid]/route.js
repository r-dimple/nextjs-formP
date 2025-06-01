import mongoose from "mongoose";
import { Form } from "../../../model/form";
import { NextResponse } from "next/server";

const uri = process.env.MONGODB_URI;

export async function PUT(request,content){
    const formid = content.params.formid;
    const filter = {_id:formid}
    const payload = await request.json();
    console.log(payload)
    await mongoose.connect(uri);
    const result = await Form.findOneAndUpdate(filter,payload)
    return NextResponse.json({result,success:true})
}