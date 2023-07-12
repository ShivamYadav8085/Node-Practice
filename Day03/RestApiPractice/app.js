import express, { json, urlencoded } from "express";
import { router as bookRouter } from "./routes/book.js";
import logger from "morgan";

const app = express();

app.use(logger("dev"));
app.use(json());
app.use(urlencoded({ extended: false }));


app.use("/books", bookRouter);



app.use((err,req,res,next)=>{

  res.status(err.status).json({
    status:'error',
    data:[],
    error:err.message
  })
  next()
})

export { app };
