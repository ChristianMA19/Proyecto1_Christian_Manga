import { createusuarios, deleteusuarios, getusuarioscorpas, getusuariosid, patchusuarios } from "./usuarios.controller";
import {Router} from 'express';
const router = Router();

// Endpoint GET /prueba Read
router.get('/', getusuarioscorpas );
router.get('/:idusuario', getusuariosid );

// Endpoint POST /prueba Create
router.post('/', createusuarios );

// Endpoint PATCH /prueba Update
router.patch('/:idusuario', patchusuarios );

// Endpoint DELETE /prueba Delete
router.delete('/:idusuario', deleteusuarios );

export default router;