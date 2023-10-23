import { createrestaurantes, deleterestaurantes, getrestaurantes, patchrestaurantes } from "./restaurantes.controller";
import {Router} from 'express';
const router = Router();

// Endpoint GET /prueba
router.get('/', getrestaurantes );

// Endpoint POST /prueba
router.post('/', createrestaurantes );

// Endpoint PATCH /prueba
router.patch('/:idrestaurante', patchrestaurantes );

// Endpoint DELETE /prueba
router.delete('/:idrestaurante', deleterestaurantes );

export default router;