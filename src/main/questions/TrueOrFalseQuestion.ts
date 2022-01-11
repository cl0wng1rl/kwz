import { decode } from "html-entities";
import Question from "./Question";

export type OptionsObject = { [option: string]: string };

class TrueOrFalseQuestion implements Question {
  private _statement: string;
  private _options: OptionsObject = {};
  private _answer: string = "";

  constructor(statement: string, answer: boolean) {
    this._statement = decode(statement);
    this._options = { A: "True", B: "False" };
    this._answer = answer ? "A" : "B";
  }

  get statement(): string {
    return this._statement;
  }

  get answer(): string {
    return this._options[this._answer];
  }

  get options(): OptionsObject {
    return this._options;
  }

  public isCorrect(answer: string): boolean {
    return this._answer.toUpperCase() === answer.toUpperCase();
  }
}

export default TrueOrFalseQuestion;
