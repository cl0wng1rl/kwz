export type OptionsObject = { [option: string]: string };

interface Question {
  get statement(): string;
  get answer(): string;
  get options(): OptionsObject;
  isCorrect(answer: string): boolean;
}

export default Question;
