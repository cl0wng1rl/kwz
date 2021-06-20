import { decode } from "html-entities";

type OptionsObject = { [option: string]: string };

class Question {
  private statement: string;
  private answer: string;
  private options: OptionsObject;

  constructor(statement: string, answer: string, others: string[]) {
    this.statement = decode(statement);
    this.options = this.createOptionsObject([answer, ...others]);
    this.answer = this.findAnswer(answer);
  }

  public isCorrect(answer: string): boolean {
    return this.answer === answer;
  }

  public toString(): string {
    let str = this.statement
    str += "\n\n";
    Object.entries(this.options).forEach((entry: [string, string]) => {
      str += `${entry[0]}: ${entry[1]}\n`;
    });
    str += "\n";
    return str;
  }

  private createOptionsObject(options: string[]): OptionsObject {
    const obj: OptionsObject = {};
    this.shuffle(options).forEach((opt, i) => (obj[String.fromCharCode(i + 65)] = opt));
    return obj;
  }

  private shuffle(lst: string[]): string[] {
    lst.sort(() => 2 * Math.random() - 1);
    return lst.map((str) => decode(str));
  }

  private findAnswer(answer: string): string {
    return Object.keys(this.options).find((key) => this.options[key] === answer) || "";
  }
}

export default Question;
