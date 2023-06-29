import { Router } from "express"
import httpVendedor from "../controllers/vendedor.js"
import {check} from "express-validator"

const router = new Router()

router.get('/hola',  httpVendedor.getVendedor)

router.post('/', [
    check("nombre", "Vendedor no identificado").not().isEmpty()
], httpVendedor.postVendedor)

export default router