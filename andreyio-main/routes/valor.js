import { Router } from "express"
import httpvalor from "../controllers/valor.js"
import {check} from "express-validator"

const router = new Router()

router.get('/hola', [
    check("precio","precio no especificado ").not().isEmpty(),
    check("total", "total no especificado").not().isEmpty()
], httpvalor.getvalor)

export default router