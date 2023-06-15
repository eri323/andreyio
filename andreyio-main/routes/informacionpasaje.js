import { Router } from "express"
import httpinformacionpasaje from "../controllers/informacionpasaje.js"
import {check} from "express-validation"


const router = new Router()

router.get('/hola', [
    check("Nmro_ticket","Numero de tickete ausente").not().isEmpty(),
    check("tipo_venta", "Especifique el tipo de venta").not().isEmpty(),
    check("Num_pasajes", "Especifique numero de pasajes").not().isEmpty(),
    check("Total_pasajes", "Especifique total de pasajes").not().isEmpty(),
], httpinformacionpasaje.getinformacionpasaje)

export default router