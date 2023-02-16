import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import _ from "lodash";
import Answer from "./Answer";

function App() {
  const [play, setPlay] = useState(false);
  const [quiz, setQuiz] = useState([]);
  const [answer, setAnswer] = useState([]);

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=6")
      .then((res) => res.json())
      .then((data) => setQuiz(data.results));
  }, []);

  useEffect(() => {
    setAnswer(getAnswer());
  }, [quiz]);

  function getAnswer() {
    const allAnswers = quiz.map((answer) => {
      return _.shuffle([
        ...answer.incorrect_answers,
        answer.correct_answer,
      ]);
    });
    return allAnswers.map((answer) =>
      answer.map((ans) => ({
        value: ans,
        isChosen: false,
        id: nanoid(),
      }))
    );
  }

  const quizElements = answer.map((element, index) => (
    <>
      <h2
        dangerouslySetInnerHTML={{ __html: quiz[index].question }}
      ></h2>
      <div key={index} className="answers-container">
        {element.map((ans) => (
          <Answer
            // key={ans.id}
            isChosen={ans.isChosen}
            value={ans.value}
          />
        ))}
        <hr />
      </div>
    </>
  ));

  function playGame() {
    setPlay(true);
  }

  return (
    <div className="App">
      {play ? (
        <div className="quiz-screen">{quizElements}</div>
      ) : (
        <div className="first-screen">
          <h1>QUIZZICAL</h1>
          <p>Fun Trivia Quiz</p>
          <button onClick={playGame} className="btn">
            Play Game
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
