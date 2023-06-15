import mongoose from "mongoose";


const Ruta = new mongoose.Schema({
    sucursal: { type: String, required: true },
    Origen: { type: String, required: true },
    Destino: { type: String, required: true },
    fecha_salida: { type: Date, required: true },
})

