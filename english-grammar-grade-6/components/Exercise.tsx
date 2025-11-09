
import React, { useState, useEffect } from 'react';
import type { Topic } from '../types';

interface ExerciseProps {
  topic: Topic;
}

export const Exercise: React.FC<ExerciseProps> = ({ topic }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [isQuizFinished, setIsQuizFinished] = useState(false);
  const [shuffledExercises, setShuffledExercises] = useState([...topic.exercises]);

  useEffect(() => {
    // Shuffle exercises when the topic changes and reset state
    setShuffledExercises([...topic.exercises].sort(() => Math.random() - 0.5));
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setScore(0);
    setIsQuizFinished(false);
  }, [topic]);

  if (shuffledExercises.length === 0) {
    return <p>No exercises available for this topic yet. Please check back later!</p>;
  }

  const currentQuestion = shuffledExercises[currentQuestionIndex];

  const handleAnswerSelect = (answer: string) => {
    if (isAnswered) return;
    setSelectedAnswer(answer);
  };

  const handleCheckAnswer = () => {
    if (selectedAnswer === null) return;
    setIsAnswered(true);
    if (selectedAnswer === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < shuffledExercises.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    } else {
      setIsQuizFinished(true);
    }
  };
  
  const handleRestart = () => {
    setShuffledExercises([...topic.exercises].sort(() => Math.random() - 0.5));
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setScore(0);
    setIsQuizFinished(false);
  };

  const getButtonClass = (option: string) => {
    if (!isAnswered) {
      return selectedAnswer === option
        ? 'bg-blue-200 dark:bg-blue-800 border-blue-500'
        : 'bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 border-transparent';
    }
    if (option === currentQuestion.correctAnswer) {
      return 'bg-green-100 dark:bg-green-900 border-green-500 text-green-800 dark:text-green-200';
    }
    if (option === selectedAnswer && option !== currentQuestion.correctAnswer) {
      return 'bg-red-100 dark:bg-red-900 border-red-500 text-red-800 dark:text-red-200';
    }
    return 'bg-slate-100 dark:bg-slate-700 border-transparent opacity-70';
  };

  if (isQuizFinished) {
    const percentage = Math.round((score / shuffledExercises.length) * 100);
    return (
      <div className="text-center p-6 bg-slate-100 dark:bg-slate-700 rounded-lg">
        <h3 className="text-2xl font-bold mb-4">Quiz Complete!</h3>
        <p className="text-lg mb-2">You scored {score} out of {shuffledExercises.length}.</p>
        <div className="w-full bg-slate-200 dark:bg-slate-600 rounded-full h-4 mb-4">
          <div className="bg-blue-500 h-4 rounded-full" style={{ width: `${percentage}%` }}></div>
        </div>
        <p className="font-semibold text-xl mb-6">{percentage}%</p>
        <button
          onClick={handleRestart}
          className="bg-blue-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-4">
        <span className="text-sm font-semibold text-slate-500">Question {currentQuestionIndex + 1} of {shuffledExercises.length}</span>
        <div className="w-full bg-slate-200 rounded-full h-2.5 mt-1 dark:bg-slate-600">
          <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: `${((currentQuestionIndex + 1) / shuffledExercises.length) * 100}%` }}></div>
        </div>
      </div>
      <p className="text-lg font-medium mb-6">{currentQuestion.question}</p>
      <div className="space-y-3">
        {currentQuestion.options.map(option => (
          <button
            key={option}
            onClick={() => handleAnswerSelect(option)}
            disabled={isAnswered}
            className={`w-full text-left p-4 rounded-lg border-2 transition-colors duration-200 ${getButtonClass(option)}`}
          >
            {option}
          </button>
        ))}
      </div>
      
      {isAnswered && (
        <div className={`mt-4 p-4 rounded-lg ${selectedAnswer === currentQuestion.correctAnswer ? 'bg-green-100 dark:bg-green-900' : 'bg-red-100 dark:bg-red-900'}`}>
          <p className={`font-bold ${selectedAnswer === currentQuestion.correctAnswer ? 'text-green-800 dark:text-green-200' : 'text-red-800 dark:text-red-200'}`}>
            {selectedAnswer === currentQuestion.correctAnswer ? 'Correct!' : 'Incorrect.'}
          </p>
          <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">{currentQuestion.explanation}</p>
        </div>
      )}

      <div className="mt-6 flex justify-end">
        {!isAnswered ? (
          <button
            onClick={handleCheckAnswer}
            disabled={selectedAnswer === null}
            className="bg-blue-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-600 transition-colors disabled:bg-slate-300 disabled:cursor-not-allowed dark:disabled:bg-slate-600"
          >
            Check
          </button>
        ) : (
          <button
            onClick={handleNextQuestion}
            className="bg-green-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-green-600 transition-colors"
          >
            {currentQuestionIndex < shuffledExercises.length - 1 ? 'Next Question' : 'Finish Quiz'}
          </button>
        )}
      </div>
    </div>
  );
};
