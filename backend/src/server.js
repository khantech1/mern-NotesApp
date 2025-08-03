//Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
//mongodb+srv://ikhantech1:B17iR3LFtXfHtvrE@cluster0.ntxocpa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
import express from "express"
import dotenv from "dotenv"
import cors from "cors"

import notesRoutes from "./Routes/notesRoutes.js"
import { connectDB } from "./config/db.js";

const app = express();
//middle ware
app.use(cors({
    origin:"http://localhost:5173"
}));
app.use(express.json());
app.use("/api/notes", notesRoutes);
dotenv.config();
connectDB().then(() => {
    app.listen(5001, () => {
        console.log("server start at port 5001");
    });
});


