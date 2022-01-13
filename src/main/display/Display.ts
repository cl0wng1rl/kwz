import Question from "../questions";

class Display {
  public printQuestion(question: Question) {
    this.print(question.statement);
    Object.entries(question.options).forEach((value) => this.print(`${value[0]}: ${value[1]}`));
  }

  public printResponse(isCorrect: boolean, correctAnswer: string) {
    this.print(isCorrect ? "Correct!" : `Wrong! The correct answer is "${correctAnswer}"`);
  }

  public printScore(score: number, total: number) {
    this.print(`Score: ${score}/${total}`);
  }

  public printCategory(name: string, id: number) {
    this.print(`${name}: ${id}`);
  }

  public printInvalidOption(options: string[]) {
    this.print(`Invalid option! Enter ${Display.getOptionsList(options)}...`);
  }

  private print(message: string): void {
    console.log(message);
  }

  private static getOptionsList(options: string[]) {
    const nonFinalString = options.slice(0, options.length - 1).join(", ");
    return `${nonFinalString} or ${options[options.length - 1]}`;
  }
}

export default Display;
