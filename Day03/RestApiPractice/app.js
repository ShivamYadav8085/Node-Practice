import express, { json, urlencoded } from "express";
import { connect } from "mongoose";
import "dotenv/config.js";
import _ from "lodash";
import status from "statuses";
import logger from "morgan";
import { router as bookRouter } from "./src/routes/book.js";
import { router as userRouter } from "./src/routes/user.js";

const app = express();

connect("mongodb://localhost:27017/bookAPI")
  .then(() => {
    console.log("Mongodb connected");
  })
  .catch((error) => {
    throw error;
  });

app.use(logger("dev"));
app.use(json());
app.use(urlencoded({ extended: false }));

app.use((req, res, next) => {
  const originalJson = res.json;
  res.json = (data) => {
    if (!data.error) {
      const formattedResponse = {
        status: status(res.statusCode),
        data: _.isArray(data) ? [...data] : _.isObject(data) ? [data] : [],
        error: null,
      };
      return originalJson.call(res, formattedResponse);
    }
    return originalJson.call(res, data);
  };
  next();
});

app.use("/books", bookRouter);
app.use("/user", userRouter);

app.use((err, req, res, next) => {
  res.status(err.status).json({
    status: status(res.statusCode),
    data: [],
    error: err.message,
  });
  next();
});

export { app };
