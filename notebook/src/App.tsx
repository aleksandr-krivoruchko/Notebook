import React from "react";
import "./App.css";
import { Container, Box } from "@mui/system";
import Typography from "@mui/material/Typography";
import NoteInput from "./components/NoteInput";
import NotesListItem from "./components/NotesListItem";
import NoOneNote from "./components/NoOneNote";
import { useNoteStore } from "./stores/useNoteStore";

const App: React.FC = () => {
  const [notes, addNote, updateNote, deleteNote] = useNoteStore((state) => [
    state.notes,
    state.addNote,
    state.updateNote,
    state.deleteNote,
  ]);

  return (
    <Container maxWidth="sm">
      <Box sx={{ bgcolor: "#cfe8fc", height: "100vh" }} p={5}>
        <Typography variant="h3" align="center" marginBottom={5}>
          My notes
        </Typography>

        <NoteInput onAdd={(title) => addNote(title)} />

        {!notes.length && <NoOneNote />}

        {notes.map(({ id, title }) => (
          <NotesListItem
            key={id}
            id={id}
            title={title}
            onDone={deleteNote}
            onEdit={updateNote}
            onRemove={deleteNote}
          />
        ))}
      </Box>
    </Container>
  );
};

export default App;
