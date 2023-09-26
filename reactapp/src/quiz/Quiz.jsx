import React, { useState } from "react";
import "./Quiz.css"; // Import your CSS file

function Quiz() {
  const [questions, setQuestions] = useState([
    {
      question: "What is the capital of France?",
      options: ["London", "Berlin", "Paris", "Madrid"],
      correctAnswer: 2,
      userAnswer: null,
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Mars", "Jupiter", "Venus", "Mercury"],
      correctAnswer: 0,
      userAnswer: null,
    },
    {
      question: "Who painted the Mona Lisa?",
      options: [
        "Vincent van Gogh",
        "Pablo Picasso",
        "Leonardo da Vinci",
        "Michelangelo",
      ],
      correctAnswer: 2,
      userAnswer: null,
    },
    {
      question: "What is the largest mammal?",
      options: ["African Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
      correctAnswer: 1,
      userAnswer: null,
    },
    {
      question: "Which gas do plants use for photosynthesis?",
      options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
      correctAnswer: 1,
      userAnswer: null,
    },
  ]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleAnswerSelect = (selectedOption) => {
    if (!quizCompleted) {
      const updatedQuestions = [...questions];
      updatedQuestions[currentQuestionIndex].userAnswer = selectedOption;
      setQuestions(updatedQuestions);

      if (selectedOption === questions[currentQuestionIndex].correctAnswer) {
        setScore(score + 1);
      }

      if (currentQuestionIndex === questions.length - 1) {
        setQuizCompleted(true);
      } else {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      }
    }
  };

  return (
    <div className="app-container">
      <h1>Quiz</h1>
      {!quizCompleted ? (
        <div className="question-container">
          <p>{questions[currentQuestionIndex].question}</p>
          <ul className="options-list">
            {questions[currentQuestionIndex].options.map((option, index) => (
              <li
                key={index}
                onClick={() => handleAnswerSelect(index)}
                className={`option ${
                  questions[currentQuestionIndex].userAnswer === index
                    ? "selected"
                    : ""
                }`}
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="result-container">
          <h2>Completed!</h2>
          <p>
            Your score: {score}/{questions.length}
          </p>
          <ul className="answers-summary">
            {questions.map((q, index) => (
              <li
                key={index}
                className={`answer ${
                  q.userAnswer === q.correctAnswer ? "correct" : "incorrect"
                }`}
              >
                Question {index + 1}:{" "}
                {q.userAnswer === q.correctAnswer ? "Correct" : "Incorrect"}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Quiz;
