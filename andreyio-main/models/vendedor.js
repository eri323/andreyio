import mongoose from "mongoose";


const vendedor = new mongoose.Schema({
    Nombre: { type: String, required: true },
})