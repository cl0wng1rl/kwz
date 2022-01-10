import Request from "./Request";

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
  private static readonly host: string = "opentdb.com";
  private path: string;

  constructor(
    private numberOfQuestions: number,
    private categoryCode: number,
    private difficulty: Difficulty,
    private questionType: QuestionType
  ) {
    this.path = this.createPath();
  }

  public getRequest(): Request {
    return new Request({ host: Query.host, path: this.path });
  }

  private createPath() {
    return `/api.php?${this.getParametersPathPart()}`;
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
    return `amount=${this.numberOfQuestions}`;
  }

  private getCategoryParameter(): string | "" {
    return this.categoryCode ? `category=${this.categoryCode}` : "";
  }

  private getDifficultyParameter(): string | "" {
    return this.difficulty != Difficulty.Any ? `difficulty=${this.difficulty}` : "";
  }

  private getTypeParameter(): string | "" {
    return this.questionType != QuestionType.Any ? `type=${this.questionType}` : "";
  }
}

export default Query;
