import { decode } from "html-entities";

type OptionsObject = { [option: string]: string };

class Question {
  private statement: string;
  private answer: string = "";
  private options: OptionsObject = {};

  constructor(statement: string, answer: string, others: string[]) {
    this.statement = decode(statement);
    this.createOptionsObject(answer, others);
  }

  public isCorrect(answer: string): boolean {
    return this.answer === answer;
  }

  public toString(): string {
    let str = this.statement;
    str += "\n\n";
    Object.entries(this.options).forEach((entry: [string, string]) => {
      str += `${entry[0]}: ${entry[1]}\n`;
    });
    str += "\n";
    return str;
  }

  private createOptionsObject(answer: string, others: string[]): void {
    const positions = this.shuffledPositions(others.length + 1);
    this.answer = this.charCode(positions[0]);
    const options = [answer, ...others];
    options.forEach((_, i) => (this.options[this.charCode(i)] = decode(options[positions[i]])));
  }

  private charCode(n: number): string {
    return String.fromCharCode(n + 65);
  }

  private shuffledPositions(length: number): number[] {
    return Array.from(Array(length).keys()).sort(() => 2 * Math.random() - 1);
  }
}

export default Question;
