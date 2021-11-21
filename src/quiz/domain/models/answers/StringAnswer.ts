import {AnswerType} from "./AnswerType";

export interface StringAnswer {
  type: AnswerType.TEXT
  value: string
}