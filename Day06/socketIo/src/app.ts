import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();


const app: Express = express();


app.get("/", (req:Request,res:Response)=>{
    res.sendFile(__dirname+'/public/index.html')
});

export { app };
