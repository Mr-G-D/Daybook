import React from "react";
import { deleteNote, toggleFav } from "./../../store/actions/noteAction";
import moment from "moment";
import { useDispatch } from "react-redux";

const Note = ({ note }) => {
  const dispatch = useDispatch();
  const deleteNoteHandler = () => {
    dispatch(deleteNote(note));
  };
  const toggleFavHandler = () => {
    dispatch(toggleFav(note));
  };
  const favIcon = note.favorite ? "favorite" : "favorite_border";
  return (
    <div className="note white">
      <div className="right-align">
        <i
          style={{ cursor: "pointer" }}
          className="material-icons red-text"
          onClick={toggleFavHandler}
        >
          {favIcon}
        </i>
        <i style={{ cursor: "pointer" }} className="material-icons" onClick={deleteNoteHandler}>
          delete
        </i>
      </div>
      <h5 className="black-text">{note.title}</h5>
      <p className="truncate">{note.content}</p>
      <p className="grey-text">{moment(note.createdAt.toDate()).fromNow()}</p>
      <div className="right-align">
        <i style={{ cursor: "pointer" }} className="material-icons">
          edit
        </i>
      </div>
    </div>
  );
};

export default Note;
