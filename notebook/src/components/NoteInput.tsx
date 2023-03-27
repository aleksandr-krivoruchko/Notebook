import React from 'react';
import {Box, TextField, IconButton, styled} from '@mui/material';
import AddBoxIcon from '@mui/icons-material/AddBox';

const StyleBox = styled(Box)({
	display: "flex",
	justifyContent: "center",
	alignItems: 'center'

})

const NoteInput: React.FC = () => {
const [note, setNote] = React.useState('');

const handleClick = () => {
		if (note === '') {
		alert('add the note')
	} else {alert(note)}
setNote('');
}

  return (
    <StyleBox  p={2} >
      <TextField id="outlined-basic" label="I need ..." size='small' variant="outlined" value={note}
  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
    setNote(event.target.value);
  }}/>
  <IconButton color="primary" onClick={handleClick}>
  <AddBoxIcon fontSize='large'/>
</IconButton>
    </StyleBox>
  );
}

export default NoteInput;