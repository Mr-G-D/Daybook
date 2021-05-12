import React from "react";
import { useDispatch, useSelector } from "react-redux";

const EditNote = () => {
  const note = useSelector((state) => state.note);
  return <div>Note Editing</div>;
};

export default EditNote;
