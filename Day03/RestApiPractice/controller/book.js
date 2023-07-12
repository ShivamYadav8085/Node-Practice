import * as bookService from "../services/book.js"
const getAllBooks = async (req,res)=>{
    const books = await bookService.getAllBooks()
    res.status(200).json(books)
}

const getBooksByAuthor = async (req,res)=>{
    const {authorName} = req.params;
    const booksOfGivenAuthor = await bookService.getBooksByAuthor(authorName);
    res.status(200).json(booksOfGivenAuthor)
}

const createABook = async (req,res)=>{
    const book = req.body;
    const updatedListOfBooks = await bookService.createABook(book);
    res.status(201).json(updatedListOfBooks)
}

const deleteBookByAuthor = async (req,res)=>{
    const {authorName} = req.params;
    const response = await bookService.deleteBookByAuthor(authorName)
    res.status(200).json(response)
}
export {getAllBooks,getBooksByAuthor,createABook,deleteBookByAuthor}
