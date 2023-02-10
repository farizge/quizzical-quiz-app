import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import _ from "lodash";
import data from "./data";
import Answer from "./Answer";

const quizzes = data.results.map((element) => {
  const answers = [
    ...element.incorrect_answers,
    element.correct_answer,
  ];
  return {
    question: element.question,
    answers: answers,
  };
});
console.log(quizzes);

function App() {
  const [play, setPlay] = useState(true);
  const [quizAnswer, setQuizAnswer] = useState(shuffleAnswers());
  console.log(quizAnswer);

  function shuffleAnswers() {
    const newAnswers = [];
    newAnswers.push(
      _.shuffle(
        quizzes.answers.map((answer) => ({
          value: answer,
          isChosen: false,
          id: nanoid(),
        }))
      )
    );
    return newAnswers;
  }
  function chooseAnswer(id) {
    setQuizAnswer((prevQuizAnswer) =>
      prevQuizAnswer.map((answer) => {
        return answer.id === id
          ? { ...answer, isChosen: !answer.isChosen }
          : answer;
      })
    );
  }

  const quizElements = quizzes.map((element) => (
    <div>
      {quizAnswer.map((answer) => (
        <Answer
          key={answer.id}
          isChosen={answer.isChosen}
          value={answer.value}
          choose={() => chooseAnswer(answer.id)}
        />
      ))}
      <hr />
    </div>
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
