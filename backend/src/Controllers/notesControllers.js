import Note from "../models/Note.js";

export const getAllNotes = async (req, res) => {
    try {
        const notes = await Note.find().sort({createdAt: -1});
        res.status(200).json(notes);
    }
    catch (error) {
        console.error("Server error in getting notes", error);
        res.status(500).json({ message: "internal server error" });
    }
}

export const createNote = async (req, res) => {
    try {
        const { title, content } = req.body;
        const newNote = new Note({ title,content });
        await newNote.save();
        res.status(201).json({ newNote });
    }
    catch (error) {
        console.error("Server error in create notes", error);
        res.status(500).json({ message: "internal server error" });
    }
}

export const updateNote = async (req, res) => {
    try {
        const {title,content}=req.body;
        const updatedNote=await Note.findByIdAndUpdate(req.params.id,{title,content});
        if(!updatedNote) return res.status(404).json({message:"Cannot find notes to update"});
        res.status(200).json(updatedNote);
    } catch (error) {
        console.error("Server error in updating notes", error);
        res.status(500).json({ message: "internal server error" });
    }
}
export const deleteNote =async (req, res) => {
   try {
        const {title,content}=req.body;
        const deletedNote=await Note.findByIdAndDelete(req.params.id,{title,content});
        if(!deletedNote) return res.status(404).json({message:"Cannot find notes to delete"});
        res.status(200).json(deletedNote);
    } catch (error) {
        console.error("Server error in deleting notes", error);
        res.status(500).json({ message: "internal server error" });
    }
}

export async function getNoteById(req, res) {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) return res.status(404).json({ message: "Note not found!" });
    res.json(note);
  } catch (error) {
    console.error("Error in getNoteById controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
}