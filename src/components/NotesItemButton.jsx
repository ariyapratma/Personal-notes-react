import React from "react";
import ButtonActive from "./ButtonActive";
import ButtonArchive from "./ButtonArchive";
import ButtonDelete from "./ButtonDelete";

const NotesItemButton = ({ onDelete, id, onArchive, archived }) => {
  return (
    <div className="note-item__action">
      <ButtonDelete onDelete={onDelete} id={id} />
      {archived ? (
        <ButtonActive onActive={onActive} id={id} />
      ) : (
        <ButtonArchive onArchive={onArchive} id={id} onActive={onActive} />
      )}
    </div>
  );
};

export default NotesItemButton;
