import mongoose from "mongoose"

const formSchema = new mongoose.Schema(
    {
        name:String,
        phone:String,
        dob:String,
        add:String,
        job:String,
        country:String
    }
);

export const Form = mongoose.models.Form || mongoose.model("Form",formSchema)