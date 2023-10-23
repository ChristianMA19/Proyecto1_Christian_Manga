import { createproductos, deleteproductos, getproductos, patchproductos } from "./productos.controller";
import {Router} from 'express';
const router = Router();

// Endpoint GET /prueba
router.get('/', getproductos );

// Endpoint POST /prueba
router.post('/', createproductos );

// Endpoint PATCH /prueba
router.patch('/', patchproductos );

// Endpoint DELETE /prueba
router.delete('/:idproducto', deleteproductos );

export default router;