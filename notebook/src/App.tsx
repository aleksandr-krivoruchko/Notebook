import React from "react";
import "./App.css";
import { Container, Box } from "@mui/system";
import { IconButton, Tooltip, Typography, List, Paper } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import NoteInput from "./components/NoteInput";
import NotesListItem from "./components/NotesListItem";
import NoOneNote from "./components/NoOneNote";
import { useNoteStore } from "./stores/useNoteStore";
import pic from "./img/qqq.png";

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
        <Box
          sx={{ bgcolor: "#fff", opacity: "0.9", height: "100vh" }}
          p={5}
          textAlign="center">
          <Typography
            variant="h3"
            align="center"
            marginBottom={5}
            sx={{ color: "#ce0875" }}>
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
                onEdit={updateNote}
                onRemove={deleteNote}
              />
            ))}
          </List>
          {notes.length > 3 && (
            <Tooltip
              title="Delete all notes"
              color="secondary"
              placement="right-end">
              <IconButton onClick={() => notes.map((n) => deleteNote(n.id))}>
                <DeleteIcon
                  sx={{
                    width: "30px",
                    height: "30px",
                  }}
                />
              </IconButton>
            </Tooltip>
          )}
        </Box>
      </Container>
    </Paper>
  );
};

export default App;
