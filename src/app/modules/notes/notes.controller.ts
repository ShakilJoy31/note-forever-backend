import { NextFunction, Request, Response } from 'express';
import { NotesService } from './notes.service';

// User signup
const createNote = async (req: Request, res: Response) => {
    try {
        const { ...signupData } = req.body;
        console.log(signupData);
        const result = await NotesService.createNoteToDb(signupData);
        res.status(200).json({
          success: true,
          message: 'Notes created successfully.',
          data: result,
        });
      } catch (err) {
        console.error(err);
      }
  
};



export const NotesController = {
  createNote,
};
