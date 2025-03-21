import React from "react";

function Entry(sub) {
  return (
    <div className="note">
      <h1>{sub.title}</h1>
      <p>{sub.content}</p>
    </div>
  );
}
export default Entry;
