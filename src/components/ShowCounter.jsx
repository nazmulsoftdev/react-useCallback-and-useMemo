import React from "react";

function ShowCounter({ counter, title }) {
  console.log(`render ${title}`);
  return (
    <div>
      <p>
        {title}: {counter}
      </p>
    </div>
  );
}

export default React.memo(ShowCounter);
