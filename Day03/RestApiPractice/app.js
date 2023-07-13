import express, { json, urlencoded } from "express";
import {connect} from "mongoose"
import logger from "morgan";
import { router as bookRouter } from "./src/routes/book.js";
import { router as userRouter } from "./src/routes/user.js";

const app = express();

connect("mongodb://localhost:27017/bookAPI").then(()=>{
  console.log("Mongodb connected");
}).catch(error=>{
  throw error
})



app.use(logger("dev"));
app.use(json());
app.use(urlencoded({ extended: false }));


app.use("/books", bookRouter);
app.use("/user", userRouter);



app.use((err,req,res,next)=>{

  res.status(err.status).json({
    status:'error',
    data:[],
    error:err.message
  })
  next()
})

export { app };
