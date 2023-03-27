import React from 'react';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

type Props = {
  value: number
}

const NotesListItem = ({value}:Props) => {
	const handleClick = (note: number) => {
	alert(`Delete note ${note}`)
}

  return (<ListItem
          key={value}
          sx={{ borderBottom: '1px solid gray', marginBottom: '20px', flexWrap:'wrap'}}
          secondaryAction={
			<Box sx={{display: 'flex'}}>
			 <ListItemButton onClick={(note) => handleClick(value)}>
				<EditIcon color='info'/>
			 </ListItemButton>
			<ListItemButton onClick={(note) => handleClick(value)}>
				<DeleteIcon color='error'/>
			 </ListItemButton>
			 </Box>
          }
        >
          <ListItemText primary={`Note ${value}`} />
        </ListItem>

  )
}

export default NotesListItem;
