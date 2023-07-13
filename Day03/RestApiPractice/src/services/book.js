import createError from "http-errors";
import * as fs from "fs/promises";
import _ from "lodash";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
const absolutePathOfData = resolve(
  dirname(fileURLToPath(import.meta.url)),
  "../Data/books.json"
);
const getAllBooks = async () => {
  try {
    const allBooks = await fs.readFile(absolutePathOfData);
    return JSON.parse(allBooks);
  } catch (error) {
    return createError(500, error.message);
  }
};

const getBooksByAuthor = async (authorName) => {
  try {
    const jsonOfAllBooks = await getAllBooks();
    const booksByAuthor = _.filter(jsonOfAllBooks, (book) => {
      return book.author === authorName;
    });
    if (booksByAuthor.length) {
      return booksByAuthor;
    }
    return createError(404, `Books of ${authorName} does not exist`);
  } catch (error) {
    return createError(500, error.message);
  }
};

const createABook = async (newBook) => {
  try {
    const jsonOfAllBooks = await getAllBooks();
    jsonOfAllBooks.push(newBook);
    await fs.writeFile(absolutePathOfData, JSON.stringify(jsonOfAllBooks));
    return jsonOfAllBooks;
  } catch (error) {
    return createError(500, error.message);
  }
};

const deleteBookByAuthor = async (authorName) => {
  try {
    const authorBooks = await getBooksByAuthor(authorName);
    if (authorBooks instanceof Error) {
      return createError(404, `Books of ${authorName} does not exist`);
    }
    const jsonOfAllBooks = await getAllBooks();
    const booksNotFromAuthor = _.filter(jsonOfAllBooks, (book) => {
      return book.author !== authorName;
    });
    await fs.writeFile(absolutePathOfData, JSON.stringify(booksNotFromAuthor));
    return { message: "book deleted" };
  } catch (error) {
    return createError(500, error.message);
  }
};

export { getAllBooks, getBooksByAuthor, createABook, deleteBookByAuthor };
