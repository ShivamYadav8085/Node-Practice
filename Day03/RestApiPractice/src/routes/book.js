import { Router } from "express";
import * as bookController from "../controllers/book.js";
import { validate } from "../middleware/middleware.js";
import { authenticate } from "../middleware/authenticate.js";

const router = Router();

router.get("/", bookController.getAllBooks);
router.post("/", authenticate, validate, bookController.createABook);
router.get("/:id", authenticate, bookController.getBookById);
router.get(
  "/author/:authorName",
  bookController.getBooksByAuthor
);
router.delete("/:id", authenticate, bookController.deleteBookById);

export { router };
