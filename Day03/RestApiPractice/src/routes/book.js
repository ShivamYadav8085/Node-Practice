import {Router} from 'express'
import * as bookController from '../controllers/book.js'
import { validate } from '../middleware/middleware.js';
import { authenticate } from '../middleware/authenticate.js';

const router = Router();

router.get("/",authenticate,bookController.getAllBooks)
router.post("/",validate,bookController.createABook)
router.get("/:id",bookController.getBookById)
router.get("/author/:authorName",bookController.getBooksByAuthor)
// router.delete("/:authorName",bookController.deleteBookByAuthor)
router.delete("/:id",bookController.deleteBookById)
export { router }