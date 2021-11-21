import { createSignal, onCleanup } from "solid-js";

export const App = () => {
  const [progress, setProgress] = createSignal<QuizProgress>({
    quiz: undefined,
    currentQuestion: 0,
    teamName: "",
  });

  return (
    <div class="container pt-4">
      <header>
        <h1>Gimcana Associació Joves Lectors</h1>
      </header>
      <main>
        <h2>Escriviu el vostre nom d'equip</h2>

        <h2>Trieu una gimcana</h2>
      </main>
      <footer>Fes-te de l'associació</footer>
    </div>
  );
};
