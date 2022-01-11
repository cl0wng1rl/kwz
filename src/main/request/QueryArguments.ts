import { Arguments } from "../cli";
import { Difficulty, QuestionType } from "./Query";

class QueryArguments {
  private _numberOfQuestions: number;
  private _categoryCode: number;
  private _difficulty: Difficulty;
  private _questionType: QuestionType;

  constructor(args: Arguments) {
    this._numberOfQuestions = args.number || 10;
    this._categoryCode = args.category || 9;
    this._difficulty = this.getDifficulty(args.difficulty);
    this._questionType = args.trueOrFalse ? QuestionType.TrueOrFalse : QuestionType.Multiple;
  }

  get numberOfQuestions(): number {
    return this._numberOfQuestions;
  }

  get categoryCode(): number {
    return this._categoryCode;
  }

  get difficulty(): Difficulty {
    return this._difficulty;
  }

  get questionType(): QuestionType {
    return this._questionType;
  }

  private getDifficulty(difficulty: string): Difficulty {
    const key = Object.keys(Difficulty).find((k) => (<any>Difficulty)[k] === difficulty);
    return key ? (<any>Difficulty)[key] : Difficulty.Any;
  }
}

export default QueryArguments;
