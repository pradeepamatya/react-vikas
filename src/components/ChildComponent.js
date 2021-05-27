import React from "react";
import { propTypes } from "react-bootstrap/esm/Image";

function ChildComponent(props) {
  return (
    <div>
      {/* //methods without parenthesis */}
      {/* <button onClick={props.greetHandler}>Greet Parent</button> */}
      {/* //with parenthesis  */}
      <button onClick={() => props.greetHandler("child")}>Greet Parent</button>
    </div>
  );
}

export default ChildComponent;
