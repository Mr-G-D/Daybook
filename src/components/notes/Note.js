import React from "react";

const Note = ({ note }) => {
  return (
    <div className="note white">
      <div className="right-align">
        <i
          style={{ cursor: "pointer" }}
          className="material-icons red-text"
        >
          favorite
        </i>
        <i
          style={{ cursor: "pointer" }}
          className="material-icons"
        >
          delete
        </i>
      </div>
      <h5 className="black-text">{note.title}</h5>
      <p className="truncate">{note.content}</p>
      <p className="grey-text">Days ago</p>
      <div className="right-align">
        <i className="material-icons">edit</i>
      </div>
    </div>
  );
};

export default Note;
