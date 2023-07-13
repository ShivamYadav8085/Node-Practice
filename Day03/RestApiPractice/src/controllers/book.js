import createError from "http-errors";

import * as bookService from "../services/book.js";

const getAllBooks = async (req, res) => {
  try {
    const books = await bookService.getAllBooks();
    return res.status(200).json(books);
    
  } catch (error) {
    return next(createError(500,error.message))
  }
 
};

const getBookById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const bookById = await bookService.getBookById(id);
    return res.status(200).json(bookById);
  } catch (error) {
    if (error.name === "NotFoundError") return next(createError(404, error.message));
    else return next(createError(500, error.message));
  }
};

const getBooksByAuthor = async (req, res, next) => {
  try {
    const { authorName } = req.params;
    const booksOfGivenAuthor = await bookService.getBooksByAuthor(authorName);
    return res.status(200).json(booksOfGivenAuthor);
  } catch (error) {
    if (error.name === "NotFoundError") return next(createError(404, error.message));
    else return next(createError(500, error.message));
  }
};

const createABook = async (req, res) => {
  const book = req.body;
  try {
    const updatedListOfBooks = await bookService.createABook(book);
    return res.status(201).json(updatedListOfBooks);
  } catch (error) {
    return next(createError(500, error.message));
  }
};

const deleteBookById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await bookService.deleteBookById(id);
    return res.status(200).json({deletedCount:response});
  } catch (error) {
    if (error.name === "NotFoundError") return next(createError(404, error.message));
    else return next(createError(500, error.message));
  }
};

export {
  getAllBooks,
  getBookById,
  getBooksByAuthor,
  createABook,
  deleteBookById,
};
