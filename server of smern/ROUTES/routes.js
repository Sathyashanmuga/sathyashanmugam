import express from "express"
import {createstudent,getstudent} from "../controllers/students" 


constroutes =express.Router()

routes .post ("/cs",createstudent);
routes.get("/get",getstudent);
routes.put("/update",updatestudent);
routes.delete("/delete/:id",delstudent);




export default routes;