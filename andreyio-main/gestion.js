import express from "express";
import 'dotenv/config'
import asiento from "./routes/asiento.js";
import informacioncliente from "./routes/informacioncliente.js";
import asiento from "./routes/asiento.js";
import informacionpasaje from "./routes/informacionpasaje.js";
import informaciontransporte from "./routes/informaciontransporte.js";
import ruta from "./routes/ruta.js";
import valor from "./routes/valor.js";
import vendedor from "./routes/vendedor.js";

const gestion = express()
gestion.use(express.json())
app.use("/api/asiento", asiento)
app.use("/api/infocl", informacioncliente)
app.use("/api/infop", informacionpasaje)
app.use("/api/infotr", informaciontransporte)
app.use("/api/ruta", ruta)
app.use("/api/valor", valor)
app.use("/api/vendedor", vendedor)

gestion.listen(process.env.PORT, () => {
    console.log(`Servidor escuchando en el puerto ${process.env.PORT}`);
})