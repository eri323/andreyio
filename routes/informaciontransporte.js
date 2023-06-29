import { Router } from "express"
import httpinformaciontransporte from "../controllers/informaciontransporte.js"
import {check} from "express-validator"
import httpTransporte from "../controllers/informaciontransporte.js"

const router = new Router()

router.get('/hola', [], httpTransporte.getTransporte)

router.post('/', [
    check("vehiculo", "Identifieue el vehiculo").not().isEmpty(),
    check("Numasientos", "Identifieue el numero de asientos").not().isEmpty(),
    check("horario", "Especifique el horario de buses").not().isEmpty(),
], httpTransporte.postTransporte)

export default router