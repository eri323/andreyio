import mongoose from "mongoose";



const valor = new mongoose.Schema({
    precio: { type: number, required: true },
})