import React from "react";

const Answer = (props) => {
  const styles = {
    backgroundColor: props.isChosen ? "#D6DBF5" : "white",
  };
  return (
    <button
      style={styles}
      className="answers"
      //onClick={props.choose}
    >
      {props.value}
    </button>
  );
};

export default Answer;
