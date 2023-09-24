
import express  from "express";
import { addBook, deleteBook, getAllBooks, getById, updateBook } from "../controllers/books-contraller.js";
const router = express.Router();
// const Book = require("../model/Book");




router.get("/", getAllBooks);
router.post("/", addBook);
router.get("/:id", getById);
router.put("/:id",updateBook);
router.delete("/:id", deleteBook);
export default router;