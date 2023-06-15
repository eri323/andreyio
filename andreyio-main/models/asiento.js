import mongoose from "mongoose";



const asiento = new mongoose.Schema({
    codigo_asientos: { type: String, required: true },
    Estado_asiento: { type: String, required: true },
    asientos_comprados: { type: Number, required: true },
    
})