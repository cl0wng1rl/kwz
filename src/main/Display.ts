import { Question } from "./questions";

class Display {
  public printQuestion(question: Question) {
    this.print(question.statement);
    Object.entries(question.options).forEach((value) => this.print(`${value[0]}: ${value[1]}`));
  }

  public printResponse(isCorrect: boolean) {
    this.print(isCorrect ? "Correct!" : "Wrong!");
  }

  public printScore(score: number, total: number) {
    this.print(`Score: ${score}/${total}`);
  }

  private print(message: string): void {
    console.log(message);
  }
}

export default Display;
