import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const QuestionScreen = ({
  question,
  questionNumber,
  totalQuestions,
  onAnswerClick,
  selectedAnswer,
  onNextQuestion,
}) => {
  const isLastQuestion = questionNumber === totalQuestions;

  return (
    <div>
      <div className="mb-4 text-sm font-semibold text-gray-600">
        Question {questionNumber} of {totalQuestions}
      </div>
      <h2 className="text-xl font-bold mb-4 text-gray-800">{question.questionText}</h2>
      <div className="space-y-3 mb-6">
        {question.answerOptions.map((option, index) => (
          <button
            key={index}
            onClick={() => onAnswerClick(index)}
            className={`w-full py-3 px-4 rounded-lg transition duration-200 text-left ${
              selectedAnswer === index
                ? 'bg-blue-500 text-white'
                : 'bg-blue-100 hover:bg-blue-200 text-blue-800'
            }`}
          >
            {option.answerText}
          </button>
        ))}
      </div>
      <button
        onClick={onNextQuestion}
        disabled={selectedAnswer === null}
        className={`w-full py-3 px-4 rounded-lg transition duration-200 flex items-center justify-center ${
          selectedAnswer !== null
            ? 'bg-green-500 hover:bg-green-600 text-white'
            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
        }`}
      >
        {isLastQuestion ? (
          <>
            Submit
            <CheckCircle className="ml-2" size={18} />
          </>
        ) : (
          <>
            Next
            <ArrowRight className="ml-2" size={18} />
          </>
        )}
      </button>
    </div>
  );
};

export default QuestionScreen;