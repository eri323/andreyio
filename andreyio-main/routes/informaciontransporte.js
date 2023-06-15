import { Router } from "express"
import httpinformaciontransporte from "../controllers/informaciontransporte.js"
import {check} from "express-validator"

const router = new Router()

router.get('/hola', [
    check("vehiculo","Identifieue el vehiculo").not().isEmpty(),
    check("Numasientos","Identifieue el numero de asientos").not().isEmpty(),
    check("horario","Especifique el horario de buses").not().isEmpty(),
], httpinformaciontransporte.getinformaciontransporte)

export default router