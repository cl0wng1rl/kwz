import CONSTANTS from "./constants";
import QueryArguments from "./QueryArguments";

export enum Difficulty {
  Easy = "easy",
  Medium = "medium",
  Hard = "hard",
  Any = "",
}

export enum QuestionType {
  Multiple = "multiple",
  TrueOrFalse = "boolean",
  Any = "",
}

export type Options = { host: string; path: string };

class Query {
  private static readonly host: string = CONSTANTS.host;
  private path: string;

  constructor(private args: QueryArguments) {
    this.path = this.createPath();
  }

  public getOptions(): Options {
    return { host: Query.host, path: this.path };
  }

  private createPath() {
    return `${CONSTANTS.questionAPI}${this.getParametersPathPart()}`;
  }

  private getParametersPathPart() {
    const parameters = this.getAllParameters();
    return parameters.filter((value) => !!value).join("&");
  }

  private getAllParameters() {
    return [
      this.getNumberParameter(),
      this.getCategoryParameter(),
      this.getDifficultyParameter(),
      this.getTypeParameter(),
    ];
  }

  private getNumberParameter(): string {
    return `${CONSTANTS.amount}${this.args.numberOfQuestions}`;
  }

  private getCategoryParameter(): string | "" {
    return this.args.categoryCode ? `${CONSTANTS.category}${this.args.categoryCode}` : "";
  }

  private getDifficultyParameter(): string | "" {
    return this.args.difficulty != Difficulty.Any
      ? `${CONSTANTS.difficulty}${this.args.difficulty}`
      : "";
  }

  private getTypeParameter(): string | "" {
    return this.args.questionType != QuestionType.Any
      ? `${CONSTANTS.type}${this.args.questionType}`
      : "";
  }
}

export default Query;
