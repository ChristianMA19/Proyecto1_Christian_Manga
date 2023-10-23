import { createpedidos, deletepedidos, getpedidos, patchpedidos } from "./pedidos.controller";
import {Router} from 'express';
const router = Router();

// Endpoint GET /prueba
router.get('/', getpedidos );

// Endpoint POST /prueba
router.post('/', createpedidos );

// Endpoint PATCH /prueba
router.patch('/', patchpedidos );

// Endpoint DELETE /prueba
router.delete('/:idpedidos', deletepedidos );

export default router;