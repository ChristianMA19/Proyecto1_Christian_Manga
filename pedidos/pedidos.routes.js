import { createpedidos, deletepedidos, getpedidos, getpedidosNOA, getpedidoid, patchpedidos } from "./pedidos.controller";
import {Router} from 'express';
const router = Router();

// Endpoint GET /prueba
router.get('/pedidosnoa', getpedidosNOA );
router.get('/', getpedidos );
router.get('/:idpedidos', getpedidoid );


// Endpoint POST /prueba
router.post('/', createpedidos );

// Endpoint PATCH /prueba
router.patch('/:idpedidos', patchpedidos );

// Endpoint DELETE /prueba
router.delete('/:idpedidos', deletepedidos );

export default router;