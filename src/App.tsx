import {
  createSignal,
  Show,
  createEffect,
  createMemo,
  Accessor,
} from "solid-js";
import { QuizSelectionForm } from "./ui/quiz/components/QuizSelectionForm";
import { quizzes } from "./quiz/data/dummy";
import { Quiz } from "./quiz/domain/models/Quiz";
import { Question } from "./quiz/domain/models/Question";
import { QuestionCard } from "./ui/quiz/components/QuestionCard";

export const App = () => {
  const [progress, setProgress] = createSignal<QuizProgress>({
    quiz: null,
    currentQuestion: 0,
    teamName: "",
  });

  const setTeamName = (teamName: string) => {
    setProgress({
      ...progress(),
      teamName,
    });
  };
  const selectQuiz = (quiz: string) => setProgress({ ...progress(), quiz });
  const goToNextQuestion = () =>
    setProgress((prevProgress) => ({
      ...prevProgress,
      currentQuestion: prevProgress.currentQuestion + 1,
    }));
  const restart = () =>
    setProgress({
      quiz: null,
      currentQuestion: 0,
      teamName: "",
    });

  const showSelectQuiz = createMemo(() => !!progress().teamName.length);
  const currentQuiz: Accessor<Quiz | null> = createMemo(
    () => quizzes.find((q) => q.id === progress().quiz) ?? null
  );
  const currentQuestion: Accessor<Question | null> = createMemo(() => {
    if (!currentQuiz()) {
      return null;
    }
    return currentQuiz()?.questions[progress().currentQuestion] ?? null;
  });

  return (
    <div class="container pt-4">
      <header class="pb-4">
        <h1>Gimcana Associació Joves Lectors</h1>
      </header>
      <main>
        <Show when={!!progress().quiz && currentQuestion()}>
          <QuestionCard
            onGoToNextQuestion={goToNextQuestion}
            onRestart={restart}
            question={currentQuestion as unknown as Accessor<Question>}
          />
        </Show>
        <Show when={!progress().quiz}>
          <QuizSelectionForm
            teamName={progress().teamName}
            setTeamName={setTeamName}
            showSelectQuiz={showSelectQuiz}
            onSelectQuiz={selectQuiz}
          />
        </Show>
      </main>
      <footer></footer>
    </div>
  );
};
