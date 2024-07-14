import React from "react";

const ButtonArchive = ({ id, onArchive }) => {
  return (
    <button
      className="note-item__archive-button"
      onClick={() => {
        onArchive(id);
      }}
    >
      Aktif
    </button>
  );
};

export default ButtonArchive;
