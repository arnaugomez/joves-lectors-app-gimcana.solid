import { AnswerType } from "./AnswerType";

export interface StringAnswer {
  type: AnswerType.TEXT;
  value: string;
}

export interface FinalAnswer {
  type: AnswerType.FINAL;
  value: string;
}
