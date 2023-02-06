import React from "react";

const Quiz = (props) => {
  return (
    <div>
      <h2>{props.question}</h2>
      <button>{props.answer}</button>
    </div>
  );
};

export default Quiz;
