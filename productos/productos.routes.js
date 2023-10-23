import { createproductos, deleteproductos, getproductos, getproductosid, patchproductos } from "./productos.controller";
import {Router} from 'express';
const router = Router();

// Endpoint GET /prueba
router.get('/', getproductos );
router.get('/:idproducto', getproductosid );


// Endpoint POST /prueba
router.post('/', createproductos );

// Endpoint PATCH /prueba
router.patch('/:idproducto', patchproductos );

// Endpoint DELETE /prueba
router.delete('/:idproducto', deleteproductos );

export default router;