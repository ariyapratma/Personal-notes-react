import React from "react";

const ButtonActive = ({ id, onActive }) => {
  return (
    <button
      className="note-item__archive-button"
      onClick={() => {
        onActive(id);
      }}
    >
      Pindahkan
    </button>
  );
};

export default ButtonActive;
