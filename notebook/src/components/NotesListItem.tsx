import React from "react";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

interface NotesListItem {
  id: string;
  title: string;
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

  return (
    <ListItem
      key={id}
      sx={{
        borderBottom: "1px solid #bbb",
        marginBottom: "20px",
      }}
      onClick={(e) => {
        e.currentTarget.classList.toggle("qqq");
        const q = e.currentTarget
          .querySelector(".note")
          ?.classList.toggle("completed-note");
      }}
      secondaryAction={
        <Box sx={{ display: "flex" }}>
          {isEditMode ? (
            <ListItemButton
              onClick={() => {
                onEdit(id, value);
                setIsEditMode(false);
              }}>
              <CheckBoxIcon color="success" />
            </ListItemButton>
          ) : (
            <ListItemButton
              onClick={() => {
                setIsEditMode(true);
              }}>
              <EditIcon color="info" />
            </ListItemButton>
          )}

          <ListItemButton onClick={() => onRemove(id)}>
            <DeleteIcon color="error" />
          </ListItemButton>
        </Box>
      }>
      <Box
        sx={{
          width: "70%",
          overflow: "hidden",
        }}>
        {isEditMode ? (
          <Input
            value={value}
            autoFocus={true}
            sx={{ backgroundColor: "#fff" }}
            onChange={(e) => setValue(e.target.value)}
          />
        ) : (
          <ListItemText
            disableTypography={true}
            primary={value}
            className="note"
          />
        )}
      </Box>
    </ListItem>
  );
};

export default NotesListItem;
