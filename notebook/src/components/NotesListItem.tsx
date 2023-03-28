import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Input from "@mui/material/Input";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { ClassNames } from "@emotion/react";

interface NotesListItem {
  id: string;
  title: string;
  onDone: (id: string) => void;
  onEdit: (id: string, title: string) => void;
  onRemove: (id: string) => void;
}

const NotesListItem: React.FC<NotesListItem> = ({
  id,
  title,
  onEdit,
  onRemove,
}) => {
  const [isEditMode, setIsEditMode] = React.useState(false);
  const [value, setValue] = React.useState(title);
  const [isDone, setIsDone] = React.useState(false);

  return (
    <ListItem
      onClick={(e) => {
        if (e.currentTarget.nodeName === "LI") {
          e.currentTarget.classList.add("www");
        }
      }}
      className="qqq"
      key={id}
      sx={{
        borderBottom: "1px solid gray",
        marginBottom: "20px",
        flexWrap: "wrap",
      }}
      secondaryAction={
        <Box sx={{ display: "flex" }}>
          {isEditMode ? (
            <ListItemButton onClick={() => setIsEditMode(false)}>
              <CheckBoxIcon color="success" />
            </ListItemButton>
          ) : (
            <ListItemButton onClick={() => setIsEditMode(true)}>
              <EditIcon color="info" />
            </ListItemButton>
          )}

          <ListItemButton onClick={() => onRemove(id)}>
            <DeleteIcon color="error" />
          </ListItemButton>
        </Box>
      }>
      <Box>
        {isEditMode ? (
          <Input
            value={value}
            autoFocus={true}
            sx={{ backgroundColor: "#fff", border: "1px dashed green" }}
            onChange={(e) => setValue(e.target.value)}
          />
        ) : (
          <ListItemText primary={value} sx={{ fontStyle: "italic" }} />
        )}
      </Box>
    </ListItem>
  );
};

export default NotesListItem;
