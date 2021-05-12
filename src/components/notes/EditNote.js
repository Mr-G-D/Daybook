import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateNote } from "./../../store/actions/noteAction";
import useInput from "../../customhook/useInput";
import { useHistory } from "react-router-dom";

const EditNote = () => {
  const note = useSelector((state) => state.note);
  const [title, bindTitle, resetTitle] = useInput(note.title);
  const [content, bindContent, resetcontent] = useInput(note.content);
  const dispatch = useDispatch();
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateNote({ id: note.id, title, content }));
    resetTitle();
    resetcontent();
    history.push("/");
  };
  return (
    <div className="section">
      <form onSubmit={handleSubmit} className="white">
        <h5 className="grey-text text-darken-3">New Note</h5>
        <div className="input-field">
          <input
            id="note_title"
            type="text"
            className="validate"
            {...bindTitle}
          />
          <label className="active" htmlFor="note_title">
            Title
          </label>
        </div>
        <div className="input-field">
          <textarea id="body" className="materialize-textarea" {...bindContent}>
            &nbsp;{" "}
          </textarea>
          <label className="active" htmlFor="body">
            Body
          </label>
        </div>
        <button className="btn green">Update</button>
      </form>
    </div>
  );
};

export default EditNote;
