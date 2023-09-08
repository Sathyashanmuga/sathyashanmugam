import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import route from "Routes/routes";
dotenv.config()

const app=express();
app.use(express.json())
app.use("/info",route)



const connect=async()=>{
    try{
        await mongoose.connect(process.env.MONGO)
        console.log("connected to momgo DB");

    }
    catch(err){
        console.log(err); 
    }
}

app.listen(5000,()=>{
    connect();
    console.log("server is running");
}
)
 