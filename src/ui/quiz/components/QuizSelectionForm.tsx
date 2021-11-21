import { Accessor, createEffect, For, Show } from "solid-js";
import { quizzes } from "../../../quiz/data/dummy";

interface Props {
  teamName: string;
  setTeamName: (teamName: string) => void;
  showSelectQuiz: Accessor<boolean>;
  onSelectQuiz: (quiz: string) => void;
}
export const QuizSelectionForm = ({
  showSelectQuiz,
  teamName,
  setTeamName,
  onSelectQuiz,
}: Props) => {
  return (
    <>
      <section class="pb-4">
        <h2 className="h4">Escriviu el vostre nom d'equip</h2>
        <input
          class="form-control"
          type="text"
          value={teamName}
          onInput={(e) => setTeamName(e.currentTarget.value)}
        />
      </section>

      <Show when={showSelectQuiz()}>
        <section class="pb-4">
          <h2 className="h4">Trieu una gimcana</h2>
          <div class="flex">
            <For each={quizzes}>
              {(quiz) => (
                <button
                  onClick={() => onSelectQuiz(quiz.id)}
                  class="btn btn-primary me-2"
                >
                  {quiz.name}
                </button>
              )}
            </For>
          </div>
        </section>
      </Show>
    </>
  );
};
