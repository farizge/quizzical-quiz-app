import React from "react";

const Answer = (props) => {
  return (
    <button onClick={props.isHeld} className="answers">
      {props.value}
    </button>
  );
};

export default Answer;
