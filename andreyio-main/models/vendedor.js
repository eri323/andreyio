import mongoose from "mongoose";


const vendedor = new mongoose.Schema({
    Nombre: { type: String, required: true },
    createdAt: { type: Date, default: date.now },
    estado: { type: Number, default: 1 }
})