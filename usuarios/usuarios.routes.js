import { createusuarios, deleteusuarios, getusuarios, patchusuarios } from "./usuarios.controller";
import {Router} from 'express';
const router = Router();

// Endpoint GET /prueba Read
router.get('/', getusuarios );

// Endpoint POST /prueba Create
router.post('/', createusuarios );

// Endpoint PATCH /prueba Update
router.patch('/', patchusuarios );

// Endpoint DELETE /prueba Delete
router.delete('/', deleteusuarios );

export default router;