import React from "react";
import "./App.css";
import { Container, Box } from "@mui/system";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import Paper from "@mui/material/Paper";
import NoteInput from "./components/NoteInput";
import NotesListItem from "./components/NotesListItem";
import NoOneNote from "./components/NoOneNote";
import { useNoteStore } from "./stores/useNoteStore";
import pic from "./img/qqq.png";

const styles = {
  container: {
    backgroundImage: `url(${pic})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
};

const App: React.FC = () => {
  const [notes, addNote, updateNote, deleteNote] = useNoteStore((state) => [
    state.notes,
    state.addNote,
    state.updateNote,
    state.deleteNote,
  ]);

  return (
    <Paper
      sx={{
        backgroundImage: `url(${pic})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}>
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: "#ecb2db", opacity: "0.7", height: "100vh" }} p={5}>
          <Typography variant="h3" align="center" marginBottom={5}>
            My notes
          </Typography>

          <NoteInput onAdd={(title) => addNote(title)} />

          {!notes.length && <NoOneNote />}

          <List>
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
          </List>
        </Box>
      </Container>
    </Paper>
  );
};

export default App;
