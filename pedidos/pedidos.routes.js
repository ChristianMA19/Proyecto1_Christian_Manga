import { createpedidos, deletepedidos, getpedidos, getpedidosNOA, getpedidosid, patchpedidos } from "./pedidos.controller";
import {Router} from 'express';
const router = Router();

// Endpoint GET /prueba
//router.get('/', getpedidos );
router.get('/:idpedidos', getpedidosid );
router.get('/', getpedidosNOA );


// Endpoint POST /prueba
router.post('/', createpedidos );

// Endpoint PATCH /prueba
router.patch('/:idpedidos', patchpedidos );

// Endpoint DELETE /prueba
router.delete('/:idpedidos', deletepedidos );

export default router;