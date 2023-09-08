import mongoose from "mongoose";

const studentschema = new mongoose.studentschema({
    Name :{
        type:string,
        required:true,
        unique:true,
    },
    Course :{
        type:string,
        required:true,

    },
    Email:{
        type:string,
        required:true,
    },
    Contact:{
        type:Number,
        required:true,
    },
    Fees:{
        type:Number,
    },
})


export default mongoose.model("studentdetails",studentschema);
