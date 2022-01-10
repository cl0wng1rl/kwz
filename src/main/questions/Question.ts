import { decode } from "html-entities";

export type OptionsObject = { [option: string]: string };

class Question {
  private _statement: string;
  private _options: OptionsObject = {};
  private answer: string = "";

  constructor(statement: string, answer: string, others: string[]) {
    this._statement = decode(statement);
    this.createOptionsObject(answer, others);
  }

  public isCorrect(answer: string): boolean {
    return this.answer.toUpperCase() === answer.toUpperCase();
  }

  get statement(): string {
    return this._statement;
  }

  get options(): OptionsObject {
    return this._options;
  }

  private createOptionsObject(answer: string, others: string[]): void {
    const positions = this.shuffledPositions(others.length + 1);
    this.answer = this.charCode(positions[0]);
    const options = [answer, ...others];
    options.forEach((_, i) => (this._options[this.charCode(i)] = decode(options[positions[i]])));
  }

  private charCode(n: number): string {
    return String.fromCharCode(n + 65);
  }

  private shuffledPositions(length: number): number[] {
    return Array.from(Array(length).keys()).sort(() => 2 * Math.random() - 1);
  }
}

export default Question;
