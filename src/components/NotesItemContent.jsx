import React from "react";
import NotesItemBody from "./NotesItemBody";
import NotesItemTitle from "./NotesItemTitle";

const NotesItemContent = ({ createdAt, title, body }) => {
  return (
    <div className="note-item__content">
      <NotesItemTitle createdAt={createdAt} title={title} />
      <NotesItemBody body={body} />
    </div>
  );
};

export default NotesItemContent;
