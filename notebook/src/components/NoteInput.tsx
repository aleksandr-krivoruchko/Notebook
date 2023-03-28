import React from "react";
import { Box, TextField, IconButton, styled } from "@mui/material";
import AddBoxIcon from "@mui/icons-material/AddBox";

const StyleBox = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

interface NoteInputProps {
  onAdd: (title: string) => void;
}

const NoteInput: React.FC<NoteInputProps> = ({ onAdd }) => {
  const [inputValue, setInputValue] = React.useState("");

  const createNewNote = React.useCallback(() => {
    if (inputValue) {
      onAdd(inputValue);
    }
    setInputValue("");
  }, [inputValue]);

  return (
    <StyleBox marginBottom={2}>
      <TextField
        id="outlined-basic"
        label="I need ..."
        fullWidth={true}
        size="small"
        variant="outlined"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") createNewNote();
        }}
      />

      <IconButton color="primary" onClick={createNewNote}>
        <AddBoxIcon fontSize="large" />
      </IconButton>
    </StyleBox>
  );
};

export default NoteInput;
