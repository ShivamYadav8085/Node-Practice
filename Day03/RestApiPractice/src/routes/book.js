import { Router } from "express";
import * as bookController from "../controllers/book.js";
import {  validateRequest } from "../shared/middleware/validation/validateRequest.js";
import { authenticate } from "../shared/middleware/authenticate.js";
import { bookSchema } from "../shared/validationSchema/bookValidationSchema/bookSchema.js";

const router = Router();

router.get("/", bookController.getAllBooks);
router.post("/", authenticate, validateRequest(bookSchema), bookController.createABook);
router.get("/:id", authenticate, bookController.getBookById);
router.get(
  "/author/:authorName",
  bookController.getBooksByAuthor
);
router.delete("/:id", authenticate, bookController.deleteBookById);

export { router };
