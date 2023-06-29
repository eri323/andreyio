import { Router } from "express"
import httpruta from "../controllers/ruta.js"
import {check} from "express-validator"

const router = new Router()

router.get('/hola', httpruta.getRuta)

router.post('/', [
    check("sucursal", "Sucursal no identificada").not().isEmpty(),
    check("Origen", "Origen no identificada").not().isEmpty(),
    check("Destino", "Destino no identificada").not().isEmpty(),
    check("fecha_salida", "Fecha-salida no identificada").not().isEmpty()
], httpruta.postRuta)

export default router