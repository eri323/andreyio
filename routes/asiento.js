import { Router } from "express"
import httpAsiento from "../controllers/asiento.js"
import { check } from "express-validator"
import validarCampos from "../middelwares/validarcampos.js"


const router = new Router()

router.get('/hola',[], httpAsiento.getAsiento)

router.post('/', [
    check("codigo_asientos", "Ausencia de id asiento").not().isEmpty(),
    check("asientos_comprados", "NaN").not().isEmpty(),
    validarCampos
], httpAsiento.postAsiento)

router.put('/Modificar', [
    check("codigo_asientos", "Ausencia de id asiento").not().isEmpty(),
    check("asientos_comprados", "NaN").not().isEmpty(),
    validarCampos
], httpAsiento.putAsiento)
export default router