import { FinalAnswer, StringAnswer } from "./answers/AnswerTypes";

export interface Question {
  name: string;
  description?: string;
  /** Answer can be of many types: string, checkbox, number... */
  answer: StringAnswer | FinalAnswer;
}
