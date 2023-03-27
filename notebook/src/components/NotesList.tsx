import React from 'react';
import List from '@mui/material/List';
import  NotesListItem  from "./NotesListItem";

const NotesList: React.FC = () => {
  return (
    <List sx={{ maxWidth: '100%'}}>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9 ,10].map((value) => <NotesListItem value={value}/>)}
    </List>
  );
}

export default NotesList;