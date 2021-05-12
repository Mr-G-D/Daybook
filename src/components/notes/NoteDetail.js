import React from "react";

const NoteDetail = (props) => {
  const id = props.match.params.id;
  return <div>Note Detail: {id}</div>;
};

export default NoteDetail;
