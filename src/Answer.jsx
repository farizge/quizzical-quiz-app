import React from "react";

const Answer = (props) => {
  const styles = {
    backgroundColor: props.isChosen ? "#D6DBF5" : "white",
  };
  return (
    <div>
      <h2>{props.question}</h2>
      <div className="answers-container">
        <button
          style={styles}
          className="answers"
          onClick={props.choose}
        >
          {props.value}
        </button>
      </div>
    </div>
  );
};

export default Answer;
