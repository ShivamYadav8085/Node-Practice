import { Router } from "express";
import * as bookController from "../controllers/book.js";
import { validateBook } from "../shared/middleware/validation/validateBook.js";
import { authenticate } from "../shared/middleware/authenticate.js";

const router = Router();

router.get("/", bookController.getAllBooks);
router.post("/", authenticate, validateBook, bookController.createABook);
router.get("/:id", authenticate, bookController.getBookById);
router.get(
  "/author/:authorName",
  bookController.getBooksByAuthor
);
router.delete("/:id", authenticate, bookController.deleteBookById);

export { router };
