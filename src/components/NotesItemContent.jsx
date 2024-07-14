import React from "react";
import NotesItemBody from "./NotesItemBody";
import NotesItemTitle from "./NotesItemTitle";

const NotesItemContent = ({ createdAt, title, body }) => {
  return (
    <div className="note-item__content">
      <NotesItemBody body={body} />
      <NotesItemTitle createdAt={createdAt} title={title} />
    </div>
  );
};

export default NotesItemContent;
