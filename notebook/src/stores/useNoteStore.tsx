import { create } from "zustand";
import { generateId } from "../helpers/createID";
import { persist, createJSONStorage } from "zustand/middleware";

export interface Note {
  id?: string;
  title?: string;
  createAt?: number;
}

interface NoteStore {
  notes: Note[];
  addNote: (title: string) => void;
  updateNote: (id: string, title: string) => void;
  deleteNote: (id: string) => void;
}

export const useNoteStore = create(
  persist<NoteStore>(
    (set, get) => ({
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

      updateNote: (id, newTitle) => {
        const { notes } = get();
        set({
          notes: notes.map((n) => ({
            ...n,
            title: id === n.id ? newTitle : n.title,
          })),
        });
      },

      deleteNote: (id) => {
        const { notes } = get();
        const filteredNotes = notes.filter((n) => n.id !== id);
        set({ notes: [...filteredNotes] });
      },
    }),
    {
      name: "notes-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
