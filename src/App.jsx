import React, { useState } from 'react';
import { Trophy } from 'lucide-react';
import QuestionScreen from './components/QuestionScreen';
import ScoreScreen from './components/ScoreScreen';
import questions from './data/questions';

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleAnswer = (answerIndex) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer !== null) {
      if (questions[currentQuestion].answerOptions[selectedAnswer].isCorrect) {
        setScore(score + 1);
      }

      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
        setSelectedAnswer(null);
      } else {
        setShowScore(true);
      }
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedAnswer(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800 flex items-center justify-center">
          <Trophy className="mr-2 text-yellow-500" />
          MCQ Quiz Game
        </h1>
        {showScore ? (
          <ScoreScreen score={score} totalQuestions={questions.length} onRestart={restartQuiz} />
        ) : (
          <QuestionScreen
            question={questions[currentQuestion]}
            questionNumber={currentQuestion + 1}
            totalQuestions={questions.length}
            onAnswerClick={handleAnswer}
            selectedAnswer={selectedAnswer}
            onNextQuestion={handleNextQuestion}
          />
        )}
      </div>
    </div>
  );
}

export default App;