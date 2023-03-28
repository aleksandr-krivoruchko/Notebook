import { create } from "zustand";
import { generateId } from "../helpers/createID";

export interface Note {
  id: string;
  title: string;
  createAt: number;
}

interface NoteStore {
  notes: Note[];
  addNote: (title: string) => void;
  updateNote: (id: string, title: string) => void;
  deleteNote: (id: string) => void;
}

export const useNoteStore = create<NoteStore>((set, get) => ({
  notes: [],

  addNote: (title) => {
    const { notes } = get();
    const newNote = {
      id: generateId(),
      title,
      createAt: Date.now(),
    };

    set({ notes: [newNote, ...notes] });
  },

  updateNote: (id, title) => {},

  deleteNote: (id) => {
    const { notes } = get();
    const filteredNotes = notes.filter((n) => n.id !== id);
    set({ notes: [...filteredNotes] });
  },
}));
