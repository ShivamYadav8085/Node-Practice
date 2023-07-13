import {Router} from 'express'
import * as bookController from '../controller/book.js'
import { validate } from '../middleware/middleware.js';

const router = Router();

router.get("/",bookController.getAllBooks)
router.post("/",validate,bookController.createABook)
router.get("/:authorName",bookController.getBooksByAuthor)
router.delete("/:authorName",bookController.deleteBookByAuthor)
export { router }