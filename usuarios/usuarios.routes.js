import { createusuarios, deleteusuarios, getusuarios, patchusuarios } from "./usuarios.controller";
import {Router} from 'express';
const router = Router();

// Endpoint GET /prueba
router.get('/', getusuarios );

// Endpoint POST /prueba
router.post('/', createusuarios );

// Endpoint PATCH /prueba
router.patch('/', patchusuarios );

// Endpoint DELETE /prueba
router.delete('/', deleteusuarios );

export default router;