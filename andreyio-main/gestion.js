import express from "express";
import 'dotenv/config'

const gestion = express()
gestion.use(express.json())

gestion.listen(process.env.PORT, () => {
    console.log(`Servidor escuchando en el puerto ${process.env.PORT}`);
})