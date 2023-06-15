import mongoose from "mongoose";

const InformacionTransporte = new mongoose.Schema({
    Vehiculo: { type: String, required: true },
    NumAsientos: { type: Number, required: true },
    horario: { type: String, required: true },
    createdAt: { type: Date, default: date.now },
    estado: { type: Number, default: 1 }
})