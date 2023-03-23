import './App.css'
import { Container, Box, border} from '@mui/system';
import { Input, Button, IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';
import AlarmIcon from '@mui/icons-material/Alarm';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Typography from '@mui/material/Typography';

function App() {

  return (
    <Container maxWidth="sm">
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }}>
			<Typography variant="h3"  align='center'>My notes</Typography>;
<Button variant="contained" endIcon={<SendIcon />}>
  Send
</Button>
<Button variant="outlined" startIcon={<DeleteIcon />} endIcon={<AlarmIcon/>}> 
  Delete
</Button>

<IconButton aria-label="delete">
  <DeleteIcon />
</IconButton>
<IconButton aria-label="delete"  color="secondary">
  <DeleteIcon />
</IconButton>
<IconButton color="secondary" aria-label="add an alarm">
  <AlarmIcon />
</IconButton>
<IconButton sx={{color:"red"}} aria-label="add to shopping cart">
  <AddShoppingCartIcon />
</IconButton>
			</Box>
		  
      </Container>
  )
}

export default App
