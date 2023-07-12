import express, { json, urlencoded } from "express";
import { router as bookRouter } from "./routes/book.js";
import logger from "morgan";

const app = express();

app.use(logger("dev"));
app.use(json());
app.use(urlencoded({ extended: false }));

// app.use('/', indexRouter);
app.use("/books", bookRouter);

app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

export { app };
