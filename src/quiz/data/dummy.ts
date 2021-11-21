import { Quiz } from "../domain/models/Quiz";
import { AnswerType } from "../domain/models/answers/AnswerType";

const quiz1: Quiz = {
  id: "1",
  name: "Gimcana 1",
  questions: [
    {
      name: "Primera lletra de l'abecedari",
      description: "És fàcil",
      answer: {
        type: AnswerType.TEXT,
        value: "A",
      },
    },
    {
      name: "Segona lletra de l'abecedari",
      description: "És fàcil",
      answer: {
        type: AnswerType.TEXT,
        value: "B",
      },
    },
    {
      name: "Tercera lletra de l'abecedari",
      description: "És fàcil",
      answer: {
        type: AnswerType.TEXT,
        value: "C",
      },
    },
    {
      name: "Última lletra de l'abecedari",
      description: "És fàcil",
      answer: {
        type: AnswerType.TEXT,
        value: "Z",
      },
    },
    {
      name: "Gràcies per participar",
      description: "Esperem que us hagi agradat.",
      answer: {
        type: AnswerType.FINAL,
        value: "",
      },
    },
  ],
};

const quiz2: Quiz = {
  id: "2",
  name: "Gimcana 2",
  questions: [
    {
      name: "Primera lletra de l'abecedari",
      description: "És fàcil",
      answer: {
        type: AnswerType.TEXT,
        value: "A",
      },
    },
    {
      name: "Segona lletra de l'abecedari",
      description: "És fàcil",
      answer: {
        type: AnswerType.TEXT,
        value: "B",
      },
    },
    {
      name: "Tercera lletra de l'abecedari",
      description: "És fàcil",
      answer: {
        type: AnswerType.TEXT,
        value: "C",
      },
    },
    {
      name: "Última lletra de l'abecedari",
      description: "És fàcil",
      answer: {
        type: AnswerType.TEXT,
        value: "Z",
      },
    },
    {
      name: "Gràcies per participar",
      description: "Esperem que us hagi agradat.",
      answer: {
        type: AnswerType.FINAL,
        value: "",
      },
    },
  ],
};

const quiz3: Quiz = {
  id: "3",
  name: "Gimcana 3",
  questions: [
    {
      name: "Primera lletra de l'abecedari",
      description: "És fàcil",
      answer: {
        type: AnswerType.TEXT,
        value: "A",
      },
    },
    {
      name: "Segona lletra de l'abecedari",
      description: "És fàcil",
      answer: {
        type: AnswerType.TEXT,
        value: "B",
      },
    },
    {
      name: "Tercera lletra de l'abecedari",
      description: "És fàcil",
      answer: {
        type: AnswerType.TEXT,
        value: "C",
      },
    },
    {
      name: "Última lletra de l'abecedari",
      description: "És fàcil",
      answer: {
        type: AnswerType.TEXT,
        value: "Z",
      },
    },
    {
      name: "Gràcies per participar",
      description: "Esperem que us hagi agradat.",
      answer: {
        type: AnswerType.FINAL,
        value: "",
      },
    },
  ],
};

export const quizzes: Quiz[] = [quiz1, quiz2, quiz3];
