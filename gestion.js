import express from "express";
import 'dotenv/config'
import asiento from "./routes/asiento.js";
import informacioncliente from "./routes/informacioncliente.js";

import informacionpasaje from "./routes/informacionpasaje.js";
import informaciontransporte from "./routes/informaciontransporte.js";
import ruta from "./routes/ruta.js";
import valor from "./routes/valor.js";
import vendedor from "./routes/vendedor.js";

const gestion = express()
gestion.use(express.json())
gestion.use("/api/asiento", asiento)
gestion.use("/api/infocl", informacioncliente)
gestion.use("/api/infop", informacionpasaje)
gestion.use("/api/infotr", informaciontransporte)
gestion.use("/api/ruta", ruta)
gestion.use("/api/valor", valor)
gestion.use("/api/vendedor", vendedor)

gestion.listen(process.env.PORT, () => {
    console.log(`Servidor escuchando en el puerto ${process.env.PORT}`);
})