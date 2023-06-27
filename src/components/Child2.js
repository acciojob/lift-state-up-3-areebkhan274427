import React from "react";

function Child2({ optionChange }) {
  return (
    <div>
      <h2>Child Component 2</h2>
      <button value={"Option 2"} onClick={(e)=>optionChange(e.target.value)}>Option 2</button>
    </div>
  );
}

export default Child2;
