import * as bookService from "../services/book.js"
const getAllBooks = async (req,res)=>{
    const books = await bookService.getAllBooks()
    if (books instanceof Error) {
        return next(books)
    }
    return res.status(200).json(books)
}

const getBooksByAuthor = async (req,res,next)=>{
    const {authorName} = req.params;
    const booksOfGivenAuthor = await bookService.getBooksByAuthor(authorName);
    if (booksOfGivenAuthor instanceof Error) {
        return next(booksOfGivenAuthor)
    }

    return res.status(200).json(booksOfGivenAuthor)
}

const createABook = async (req,res)=>{
    const book = req.body;
    const updatedListOfBooks = await bookService.createABook(book);
    if (updatedListOfBooks instanceof Error) {
        return next(updatedListOfBooks)
    }
    return res.status(201).json(updatedListOfBooks)
}

const deleteBookByAuthor = async (req,res,next)=>{
    const {authorName} = req.params;
    const response = await bookService.deleteBookByAuthor(authorName)
    if (response instanceof Error) {
        return next(response)
    }
    return res.status(200).json(response)
}
export {getAllBooks,getBooksByAuthor,createABook,deleteBookByAuthor}
