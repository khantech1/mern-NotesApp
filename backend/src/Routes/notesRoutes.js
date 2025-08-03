import express, { Router } from "express"
import { createNote, deleteNote, getAllNotes, updateNote ,getNoteById} from "../Controllers/notesControllers.js";

const router = express.Router();
router.get("/:id",getNoteById);
router.get("/",getAllNotes);
router.post("/",createNote);
router.put("/:id",updateNote);
router.delete("/:id",deleteNote);

export default router;