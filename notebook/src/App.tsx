import React from "react";
import './App.css'
import { Container, Box} from '@mui/system';
import Typography from '@mui/material/Typography';
import NoteInput from "./components/NoteInput";
import NotesList from "./components/NotesList";


const App: React.FC = () => {
	const [notes, setNotes] = React.useState([]);



  return (
    <Container maxWidth="sm">
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh'}} p={5}>
			<Typography variant="h3"  align='center' marginBottom={5}>My notes</Typography>
		  <NoteInput/>
		  <NotesList/>
			</Box>
      </Container>
  )
}

export default App;
