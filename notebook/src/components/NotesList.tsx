import React from 'react';
import List from '@mui/material/List';
import  NotesListItem  from "./NotesListItem";
import { useNoteStore } from "../stores/useNoteStore";
import { Note } from "../stores/useNoteStore";

interface NotesListProps {
	notes: Note[]
}

const NotesList: React.FC<NotesListProps> = ({notes}) => {

// const notes = useNoteStore(state=>state.notes);
console.log(notes);

  return (
    <List sx={{ maxWidth: '100%'}}>{notes.map((note) => {
		console.log(note)
		
	 })}</List>
  );
}

export default NotesList;