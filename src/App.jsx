import { useState, useEffect } from "react";
import data from "./data";

function App() {
  const [play, setPlay] = useState(false);
  const quiz = data.results;

  const quizElements = quiz.map((element) => {
    const answers = [
      ...element.incorrect_answers,
      element.correct_answer,
    ];
    const shuffleAnswers = answers
      .map((a) => [Math.random(), a])
      .sort((a, b) => a[0] - b[0])
      .map((a) => a[1]);

    return (
      <div className="quiz-screen">
        <h2>{element.question}</h2>
        {shuffleAnswers.map((answer) => (
          <button>{answer}</button>
        ))}
        <hr />
      </div>
    );
  });

  function playGame() {
    setPlay(true);
  }

  return (
    <div className="App">
      {play ? (
        quizElements
      ) : (
        <div className="first-screen">
          <h1>QUIZZICAL</h1>
          <p>Fun Trivia Quiz</p>
          <button onClick={playGame} className="btn-primary">
            Play Game
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
