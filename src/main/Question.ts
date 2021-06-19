class Question {
  private statement: string;
  private correct: number;
  private options: string[];

  constructor(statement: string, answer: string, others: string[]) {
    this.statement = statement;
    this.options = this.shuffle([answer, ...others]);
    this.correct = this.options.indexOf(answer);
  }

  private shuffle(lst: string[]): string[] {
    lst.sort(() => 2 * Math.random() - 1);
    return lst;
  }

  public toString(): string {
    return {
      statement: this.statement,
      options: this.options,
      correct: this.correct,
    }.toString();
  }
}

export default Question;
