import React from "react";
import { deleteNote, toggleFav } from "./../../store/actions/noteAction";
import moment from "moment";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Note = ({ note }) => {
  const dispatch = useDispatch();
  const deleteNoteHandler = () => {
    dispatch(deleteNote(note));
  };
  const toggleFavHandler = () => {
    dispatch(toggleFav(note));
  };
  const editNoteHandler = () => {
    dispatch({ type: "EDIT_NOTE", payload: note });
  };
  const favIcon = note.favorite ? "favorite" : "favorite_border";
  return (
    <div className="card container margin">
      <div className="note white center-align">
        <div className="right-align">
          <i
            style={{ cursor: "pointer" }}
            className="material-icons red-text"
            onClick={toggleFavHandler}
          >
            {favIcon}
          </i>
          <i
            style={{ cursor: "pointer" }}
            className="material-icons"
            onClick={deleteNoteHandler}
          >
            delete
          </i>
        </div>
        <Link to={"/note/" + note.id}>
          <h5 className="black-text">{note.title}</h5>
        </Link>
        <p className="truncate">{note.content}</p>
        <p className="grey-text">{moment(note.createdAt.toDate()).fromNow()}</p>
        <div className="right-align">
          <Link to={"/edit/" + note.id}>
            <i
              style={{ cursor: "pointer" }}
              className="material-icons"
              onClick={editNoteHandler}
            >
              edit
            </i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Note;
