import React from "react";
import Entry from "./Entry";
import Notes from "../notes";

function Note() {
  return (
    <>
      {Notes.map((sub) => (
        <Entry key={sub.id} title={sub.title} content={sub.content} />
      ))}
    </>
  );
}

export default Note;
