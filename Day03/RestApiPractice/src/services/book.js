import createError from "http-errors";
import _ from "lodash";
import { Book } from "../Models/book.js";


const getAllBooks = async () => {
  try {
    const allBooks = await Book.find();
    return allBooks;
  } catch (error) {
    return createError(500, error.message);
  }
};

const getBookById = async (bookId) => {
  try {
    const book = await Book.findById(bookId);
    return book;
  } catch (error) {
    return createError(500, error.message);
  }
};

const getBooksByAuthor = async (authorName) => {
  try {
    const booksOfAuthor =await  Book.find({author:authorName})
    return booksOfAuthor;
  } catch (error) {
    console.log(error);
    return createError(500, error.message);
  }
};

const createABook = async (newBook) => {
  try {
    const response = await Book.create(newBook);
    return response;
  } catch (error) {
    return createError(500, error.message);
  }
};

const deleteBookById = async (bookId)=>{
  try {
    const response = await Book.deleteOne({_id:bookId})
    return response
  } catch (error) {
    return createError(500,error.message)
  }
}

// const deleteBookByAuthor = async (authorName) => {
//   try {
//     const authorBooks = await getBooksByAuthor(authorName);
//     if (authorBooks instanceof Error) {
//       return createError(404, `Books of ${authorName} does not exist`);
//     }
//     const jsonOfAllBooks = await getAllBooks();
//     const booksNotFromAuthor = _.filter(jsonOfAllBooks, (book) => {
//       return book.author !== authorName;
//     });
//     await fs.writeFile(absolutePathOfData, JSON.stringify(booksNotFromAuthor));
//     return { message: "book deleted" };
//   } catch (error) {
//     return createError(500, error.message);
//   }
// };

export {
  getAllBooks,
  getBookById,
  getBooksByAuthor,
  createABook,
  deleteBookById
};
