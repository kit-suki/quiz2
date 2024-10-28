import React from 'react';
import { Play } from 'lucide-react';

interface StartScreenProps {
  onStart: () => void;
}

export const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-blue-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-blue-900 mb-8">画像クイズゲーム</h1>
        <p className="text-lg text-blue-700 mb-8">全10問の2択クイズに挑戦しよう！</p>
        <button
          onClick={onStart}
          className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg shadow-lg transition-all transform hover:scale-105"
        >
          <Play size={24} />
          スタート
        </button>
      </div>
    </div>
  );
};