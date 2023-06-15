import { Router } from "express"
import httpvendedor from "../controllers/vendedor.js"
import {check} from "express-validator"

const router = new Router()

router.get('/hola', [
    check("nombre","Vendedor no identificado").not().isEmpty()
], httpvendedor.getvendedor)

export default router