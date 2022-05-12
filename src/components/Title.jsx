import React from "react";

function Title() {
  console.log("render Title");
  return (
    <div>
      <h3>React useCallback</h3>
    </div>
  );
}

export default React.memo(Title);
