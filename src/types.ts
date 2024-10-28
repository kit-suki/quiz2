export interface QuizQuestion {
  id: number;
  question: string;
  explanation: string;
  options: {
    imageUrl: string;
    isCorrect: boolean;
  }[];
}

export interface GameState {
  isStarted: boolean;
  currentQuestion: number;
  score: number;
  isFinished: boolean;
  showingFeedback: boolean;
}

export interface FeedbackState {
  isCorrect: boolean;
  explanation: string;
}