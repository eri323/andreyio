import mongoose from "mongoose";

const InformacionCliente = new mongoose.Schema({
    CC_cliente: { type: String, required: true },
    Nombre_cliente: { type: String, required: true },
    Telefono_cliente: { type: String, required: true },
})