import mongoose from "mongoose";

const InformacionPasaje = new mongoose.Schema({
    Nmro_ticket: { type: String, required: true },
    tipo_venta: { type: String, required: true },
    fecha_venta: { type: Date, required: true, default: Date.now },
    Num_pasajes: { type: Number, required: true },
    Total_pasajes: { type: Number, required: true },
    informacioncliente:{ type:mongoose.Schema.Types.ObjectId, ref:'informacioncliente', required:true},
    ruta: { type: mongoose.Schema.Types.ObjectId, ref: 'ruta', required: true },
    valor: { type: mongoose.Schema.Types.ObjectId, ref: 'valor', required: true },
    vendedor: { type: mongoose.Schema.Types.ObjectId, ref: 'vendedor', required: true },
    asiento:{ type:mongoose.Schema.Types.ObjectId, ref:'asiento', required:true}
})







