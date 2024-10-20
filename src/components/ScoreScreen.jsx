import React from 'react';
import { Trophy, RefreshCw } from 'lucide-react';

const ScoreScreen = ({ score, totalQuestions, onRestart }) => {
  const percentage = Math.round((score / totalQuestions) * 100);

  return (
    <div className="text-center">
      <Trophy className="mx-auto text-yellow-500 w-16 h-16 mb-4" />
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Quiz Completed!</h2>
      <p className="text-xl mb-6 text-gray-700">
        You scored <span className="font-bold text-blue-600">{score}</span> out of{' '}
        <span className="font-bold">{totalQuestions}</span>
      </p>
      <div className="mb-6">
        <div className="w-full bg-gray-200 rounded-full h-4">
          <div
            className="bg-blue-600 h-4 rounded-full"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
        <p className="mt-2 text-gray-600">{percentage}% Correct</p>
      </div>
      <button
        onClick={onRestart}
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-200 flex items-center justify-center mx-auto"
      >
        <RefreshCw className="mr-2" size={18} />
        Restart Quiz
      </button>
    </div>
  );
};

export default ScoreScreen;