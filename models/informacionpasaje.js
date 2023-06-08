import mongoose from "mongoose";

const InformacionPasaje = new mongoose.Schema({
    Nmro_ticket: { type: String, required: true },
    tipo_venta: { type: String, required: true },
    fecha_venta: { type: Date, required: true, default: Date.now },
    Num_pasajes: { type: Number, required: true },
    Total_pasajes: { type: Number, required: true },
})







