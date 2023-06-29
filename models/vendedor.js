import mongoose from "mongoose";


const Vendedor = new mongoose.Schema({
    Nombre: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    estado: { type: Number, default: 1 }
})

export default mongoose.model(" Vendedor", Vendedor)