import { Accessor, createMemo, createSignal, Show } from "solid-js";
import { Question } from "../../../quiz/domain/models/Question";
import { AnswerType } from "../../../quiz/domain/models/answers/AnswerType";

interface Props {
  question: Accessor<Question>;
  onGoToNextQuestion(): void;
  onRestart(): void;
}

export const QuestionCard = ({
  question,
  onRestart,
  onGoToNextQuestion,
}: Props) => {
  const [userAnswer, setUserAnswer] = createSignal("");
  const isCorrect = createMemo(() => {
    if (
      question().answer.type === AnswerType.TEXT &&
      userAnswer().toLowerCase() === question().answer.value.toLowerCase()
    ) {
      return true;
    }
    return false;
  });
  const resetUserAnswer = () => setUserAnswer("");

  return (
    <section>
      <h2 className="h4">{question().name}</h2>
      <p>{question().description}</p>
      <Show when={question().answer.type === AnswerType.TEXT}>
        <input
          class="form-control mb-4"
          value={userAnswer()}
          onInput={(e) => setUserAnswer(e.currentTarget.value)}
          type="text"
        />
      </Show>
      <Show when={isCorrect()}>
        <button
          onClick={() => {
            resetUserAnswer();
            onGoToNextQuestion();
          }}
          className="btn btn-success"
        >
          Següent pregunta
        </button>
      </Show>
      <Show when={question().answer.type === AnswerType.FINAL}>
        <button
          onClick={() => {
            resetUserAnswer();
            onRestart();
          }}
          className="btn btn-success"
        >
          Torna a l'Inici
        </button>
      </Show>
    </section>
  );
};
