import { INotes } from './notes.interface';
import { NotesModel } from './notes.model';

// login signup
const createNoteToDb = async (payload:INotes) :Promise<INotes> => {
    const result = await NotesModel.create(payload);
    return result
}


export const NotesService = {
  createNoteToDb
};
