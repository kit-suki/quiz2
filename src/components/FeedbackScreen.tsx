import React from 'react';
import { CheckCircle, XCircle, ArrowRight } from 'lucide-react';
import type { FeedbackState } from '../types';

interface FeedbackScreenProps {
  feedback: FeedbackState;
  onNext: () => void;
}

export const FeedbackScreen: React.FC<FeedbackScreenProps> = ({ feedback, onNext }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="max-w-2xl w-full mx-4 bg-white rounded-xl shadow-lg p-8">
        <div className="flex items-center justify-center mb-6">
          {feedback.isCorrect ? (
            <div className="flex items-center text-green-600">
              <CheckCircle size={32} className="mr-2" />
              <span className="text-2xl font-bold">正解！</span>
            </div>
          ) : (
            <div className="flex items-center text-red-600">
              <XCircle size={32} className="mr-2" />
              <span className="text-2xl font-bold">不正解...</span>
            </div>
          )}
        </div>
        
        <p className="text-gray-700 text-lg mb-8 text-center">
          {feedback.explanation}
        </p>

        <div className="flex justify-center">
          <button
            onClick={onNext}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all transform hover:scale-105"
          >
            次の問題へ
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};