import mongoose from "mongoose";

const { Schema, model } = mongoose;

const BookSchema = new Schema({
  author: {
    type: String,
  },
  title: {
    type: String,
  },
  country: {
    type: String,
  },
  imageLink: {
    type: String,
  },
  language: {
    type: String,
  },
  link: {
    type: String,
  },
  pages: {
    type: Number,
  },
  year: {
    type: Number,
  },
  createdAt:{
    type:Date,
    default:Date.now
  }
});

const Book = model("Book", BookSchema);

export { Book };
