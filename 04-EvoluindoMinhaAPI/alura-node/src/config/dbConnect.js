import mongoose from "mongoose"

mongoose.connect("mongodb+srv://ThiagoNET:7hi4g0TT@livros.noahtkf.mongodb.net/Livros");

let db = mongoose.connection;

export default db;