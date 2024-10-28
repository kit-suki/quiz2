import React, { useState, useEffect } from 'react';
import type { QuizQuestion } from '../types';

interface QuizQuestionProps {
  question: QuizQuestion;
  onAnswer: (isCorrect: boolean) => void;
}

export const QuizQuestionComponent: React.FC<QuizQuestionProps> = ({ question, onAnswer }) => {
  const [shuffledOptions, setShuffledOptions] = useState([...question.options]);

  useEffect(() => {
    // 新しい問題が表示されるたびに選択肢をシャッフル
    setShuffledOptions([...question.options].sort(() => Math.random() - 0.5));
  }, [question]);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">{question.question}</h2>
      <div className="grid grid-cols-2 gap-8">
        {shuffledOptions.map((option, index) => (
          <button
            key={index}
            onClick={() => onAnswer(option.isCorrect)}
            className="group relative overflow-hidden rounded-lg shadow-lg transition-transform hover:scale-105"
          >
            <img
              src={option.imageUrl}
              alt={`選択肢 ${index + 1}`}
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity" />
          </button>
        ))}
      </div>
    </div>
  );
};