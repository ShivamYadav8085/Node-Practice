import * as fs from 'fs/promises'
import _ from 'lodash';
import {resolve,dirname} from 'path'
import { fileURLToPath } from 'url'
const absolutePathOfData = resolve(dirname(fileURLToPath(import.meta.url)),"../Data/books.json")
const getAllBooks = async ()=>{
    try{

        const allBooks = await fs.readFile(absolutePathOfData)
        return JSON.parse(allBooks);
    }
    catch(error){
        return error.message;
    }
}

const getBooksByAuthor = async (authorName)=>{
    try{
        const jsonOfAllBooks = await getAllBooks();
        const booksByAuthor = _.find(jsonOfAllBooks,(book)=>{
            return book.author===authorName;
        })
        if (booksByAuthor) {
            return booksByAuthor;
        }
        throw new Error("Book does not exist")
    }catch(error){
        return error.message
    }
}

const createABook = async (newBook)=>{
    try {
        const jsonOfAllBooks =  await getAllBooks();
        jsonOfAllBooks.push(newBook);
        await fs.writeFile(absolutePathOfData,JSON.stringify(jsonOfAllBooks))
        return jsonOfAllBooks;
    } catch (error) {
        return error.message;
    }
    
}

const deleteBookByAuthor = async (authorName)=>{
    try{
        const jsonOfAllBooks = await getAllBooks();
        const booksNotFromAuthor = _.filter(jsonOfAllBooks,(book)=>{
            return book.author!==authorName;
        })
        if (booksNotFromAuthor) {
            await fs.writeFile(absolutePathOfData,JSON.stringify(booksNotFromAuthor))
            return {message:"book deleted"};
        }
        throw new Error("Book does not exist")
    }catch(error){
        return error.message
    }
}

export {getAllBooks,getBooksByAuthor, createABook,deleteBookByAuthor}