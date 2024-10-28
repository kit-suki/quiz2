import React, { useState, useCallback } from 'react';
import { questions } from '../data/questions';
import { StartScreen } from './StartScreen';
import { QuizQuestionComponent } from './QuizQuestion';
import { ResultScreen } from './ResultScreen';
import { ProgressBar } from './ProgressBar';
import { GameState, FeedbackState } from '../types';
import { FeedbackScreen } from './FeedbackScreen';

export const QuizGame: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>({
    isStarted: false,
    currentQuestion: 0,
    score: 0,
    isFinished: false,
    showingFeedback: false
  });

  const [feedback, setFeedback] = useState<FeedbackState | null>(null);
  const [shuffledQuestions, setShuffledQuestions] = useState<typeof questions>([]);

  const handleStart = useCallback(() => {
    // 問題を再シャッフル
    setShuffledQuestions([...questions].sort(() => Math.random() - 0.5));
    // ゲームを初期状態にリセット
    setGameState({
      isStarted: true,
      currentQuestion: 0,
      score: 0,
      isFinished: false,
      showingFeedback: false
    });
    setFeedback(null);
  }, []);

  const handleAnswer = useCallback((isCorrect: boolean) => {
    const currentQuestion = shuffledQuestions[gameState.currentQuestion];
    setFeedback({
      isCorrect,
      explanation: currentQuestion.explanation
    });
    setGameState(prev => ({
      ...prev,
      showingFeedback: true
    }));
  }, [gameState.currentQuestion, shuffledQuestions]);

  const handleNextQuestion = useCallback(() => {
    setGameState(prev => {
      const newState = {
        ...prev,
        currentQuestion: prev.currentQuestion + 1,
        showingFeedback: false,
        score: feedback?.isCorrect ? prev.score + 1 : prev.score
      };

      if (newState.currentQuestion >= shuffledQuestions.length) {
        newState.isFinished = true;
      }

      return newState;
    });
    setFeedback(null);
  }, [feedback?.isCorrect, shuffledQuestions.length]);

  // スタート画面
  if (!gameState.isStarted) {
    return <StartScreen onStart={handleStart} />;
  }

  // 結果画面
  if (gameState.isFinished) {
    return (
      <ResultScreen
        score={gameState.score}
        totalQuestions={shuffledQuestions.length}
        onRestart={handleStart}
      />
    );
  }

  // フィードバック画面
  if (gameState.showingFeedback && feedback) {
    return (
      <FeedbackScreen
        feedback={feedback}
        onNext={handleNextQuestion}
      />
    );
  }

  // クイズ画面
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <ProgressBar
        current={gameState.currentQuestion}
        total={shuffledQuestions.length}
      />
      <QuizQuestionComponent
        question={shuffledQuestions[gameState.currentQuestion]}
        onAnswer={handleAnswer}
      />
    </div>
  );
};