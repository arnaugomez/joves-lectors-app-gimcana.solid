interface QuizProgress {
  teamName: string;
  /** Id of the selected quiz */
  quiz: string | null;
  /** Index of the current question selected in the quiz */
  currentQuestion: number;
}
