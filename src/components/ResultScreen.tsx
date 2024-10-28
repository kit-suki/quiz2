import React from 'react';
import { RotateCcw } from 'lucide-react';

interface ResultScreenProps {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
}

export const ResultScreen: React.FC<ResultScreenProps> = ({ score, totalQuestions, onRestart }) => {
  const getResultMessage = (percentage: number) => {
    if (percentage === 100) return "完璧です！素晴らしい！";
    if (percentage >= 80) return "すごい！よく頑張りました！";
    if (percentage >= 60) return "なかなかの成績です！";
    if (percentage >= 40) return "もう少し頑張りましょう！";
    return "次は頑張りましょう！";
  };

  const percentage = Math.round((score / totalQuestions) * 100);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-blue-100">
      <div className="text-center bg-white p-8 rounded-2xl shadow-xl">
        <h2 className="text-3xl font-bold text-blue-900 mb-4">クイズ完了！</h2>
        <p className="text-xl text-gray-700 mb-4">
          {totalQuestions}問中{score}問正解！
        </p>
        <div className="text-2xl font-bold mb-4">
          正答率: {percentage}%
        </div>
        <p className="text-lg text-gray-600 mb-8">
          {getResultMessage(percentage)}
        </p>
        <button
          onClick={onRestart}
          className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all transform hover:scale-105"
        >
          <RotateCcw size={20} />
          最初に戻る
        </button>
      </div>
    </div>
  );
};