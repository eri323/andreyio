import { Router } from "express"
import httpinformacioncliente from "../controllers/informacioncliente.js"
import {check} from "express-validator"


const router = new Router()

router.get('/hola', [
    check("CC_cliente","Por favor digite numero de cedula").not().isEmpty(),
    check("Nombre_cliente", "Por favor digite nombre").not().isEmpty(),
    check("Telefono_cliente", "Por favor digite numero de telefono").not().isEmpty(),
    check("Telefono_cliente", "Por favor digite numero de telefono valido").isLength(10)
], httpinformacioncliente.getinformacioncliente)

export default router