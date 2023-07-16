import _ from 'lodash';
import { Book } from '../shared/database/models/book.js';

const getAllBooks = async () => {
	try {
		const allBooks = await Book.find();
		return allBooks;
	} catch (error) {
		throw error;
	}
};

const getBookById = async (bookId) => {
	try {
		const book = await Book.findById(bookId);
		if (book) {
			return book;
		}
		const notFoundError = new Error(
			`Book with id:${bookId} is not present`,
		);
		notFoundError.name = 'NotFoundError';
		throw notFoundError;
	} catch (error) {
		throw error;
	}
};

const getBooksByAuthor = async (authorName) => {
	try {
		const booksOfAuthor = await Book.find({ author: authorName });
		if (booksOfAuthor.length) {
			return booksOfAuthor;
		}

		const notFoundError = new Error(
			`Book of author:${authorName} is not present`,
		);
		notFoundError.name = 'NotFoundError';
		throw notFoundError;
	} catch (error) {
		throw error;
	}
};

const createABook = async (newBook) => {
	try {
		const response = await Book.create(newBook);
		return response;
	} catch (error) {
		throw error;
	}
};

const deleteBookById = async (bookId) => {
	try {
		const response = await Book.deleteOne({ _id: bookId });
		if (response.deletedCount) {
			return response.deletedCount;
		}
		const notFoundError = new Error(`Book of id:${bookId} is not present`);
		notFoundError.name = 'NotFoundError';
		throw notFoundError;
	} catch (error) {
		throw error;
	}
};

export {
	getAllBooks,
	getBookById,
	getBooksByAuthor,
	createABook,
	deleteBookById,
};
