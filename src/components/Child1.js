import React from "react";

function Child1({ optionChange }) {
  return (
    <div>
      <h2>Child Component 1</h2>
      <button value={'Option 1'} onClick={(e)=>optionChange(e.target.value)}>Option 1</button>
    </div>
  );
}

export default Child1;
