interface QuizProgress {
  teamName: string;
  /** Id of the selected quiz */
  quiz?: string
  /** Index of the current question selected in the quiz */
  currentQuestion: number
}