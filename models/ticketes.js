import mongoose from "mongoose";

const InformacionPasaje = new mongoose.Schema({
    Nmro_ticket: { type: String, required: true },
    tipo_venta: { type: String, required: true },
    fecha_venta: { type: Date, required: true, default: Date.now },
    Num_pasajes: { type: Number, required: true },
    Total_pasajes: { type: Number, required: true },
})
const InformacionCiente = new mongoose.Schema({
    CC_cliente: { type: String, required: true },
    Nombre_cliente: { type: String, required: true },
    Telefono_cliente: { type: String, required: true },
})
const InformacionTransporte = new mongoose.Schema({
    Vehiculo: { type: String, required: true },
    NumAsientos: { type: Number, required: true },
    horario: { type: String, required: true }
})
const Ruta = new mongoose.Schema({
    sucursal: { type: String, required: true },
    Origen: { type: String, required: true },
    Destino: { type: String, required: true },
    fecha_salida: { type: Date, required: true },
})
const vendedor = new mongoose.Schema({
    Nombre: { type: String, required: true },
})
const asiento = new mongoose.Schema({
    codigo_asientos: { type: String, required: true },
    Estado_asiento: { type: String, required: true },
    asientos_comprados: { type: Number, required: true }
})
const valor = new mongoose.Schema({
    precio: { type: number, required: true },
})
app.listen(process.env.PORT, () => {
    console.log(`Servidor escuchando en el puerto ${process.env.PORT}`);
})