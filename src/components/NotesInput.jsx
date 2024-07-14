import React from "react";
import NotesForm from "./NotesForm";

const NotesInput = ({ addNotes }) => {
  return (
    <div className="note-input">
      <h2>Buat catatan</h2>
      <NotesForm addNotes={addNotes} />
    </div>
  );
};

export default NotesInput;
