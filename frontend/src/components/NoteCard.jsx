import React from 'react'
import { Link, Navigate } from 'react-router'
import { PenSquareIcon } from 'lucide-react'
import { Trash2Icon } from 'lucide-react'
import { formatDate } from "../libs/util"
import  api from "../libs/axios"
import { toast} from "react-hot-toast"
import HomePage from '../pages/HomePage'
const NoteCard=({note,setNotes})=> {
    const handleDelete= async(e,id)=>{
        e.preventDefault();
        if(!window.confirm("Are you sure to delete this note?"))
            return;
        try {
            api.delete(`/notes/${id}`);
            toast.success("Note deleted Successfully");
            
            setNotes((prev) => prev.filter((note) => note._id !== id));

            
            
        } catch (error) {
            console.log("Error in deleting in noteCard", error);
            toast.error("error in deleting that note");
    }
        

    }

  return (
    <Link to={`/note/${note._id}`} className="card bg-base-100 hover:shadow-lg transition-all duration-200
    border-t-4 border-solid border-[#00ff9d]">
        <div className="card-body">
            <h3 className="card-title text-base-content">{note.title}</h3>
            <p className="text-base-content/70 line-clamp-3">{note.content}</p>
            <span className="text-sm text-base-content/60 ">
                {formatDate(new Date(note.createdAt))}
            </span>
            <div className="flex items-center gap-1">
                <PenSquareIcon className="size-4"/>
                <button className="btn btn-ghost btn-xs text-error" onClick={(e)=>{handleDelete(e,note._id)}}>
                    <Trash2Icon className="size-4"></Trash2Icon>
                </button>
            </div>
        </div>
    </Link>
  )
}

export default NoteCard
