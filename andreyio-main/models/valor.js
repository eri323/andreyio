import mongoose from "mongoose";



const valor = new mongoose.Schema({
    precio: { type: number, required: true },
    total: { type: number, required: true },
    createdAt: { type: Date, default: date.now },
    estado: { type: Number, default: 1 }
})