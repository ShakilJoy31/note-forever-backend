import express from 'express';
import { NotesController } from './notes.controller';

const router = express.Router();

// router.get('/login', AuthController.verification);

router.post('/create-note', NotesController.createNote);


export const NotesRoute = router;