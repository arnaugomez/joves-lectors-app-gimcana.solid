import {Question} from "./Question";

export interface Quiz {
  /** Unique identifier of the quiz */
  id: string
  name: string
  questions: Question[]
}