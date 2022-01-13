import Player from "./Player";
import Display from "../display";
import Question from "../questions";

class Quiz {
  private questions: Question[];
  private player: Player;
  private display: Display;
  private score: number;

  constructor(questions: Question[]) {
    this.questions = questions;
    this.player = new Player();
    this.display = new Display();
    this.score = 0;
  }

  public play() {
    this.questions.forEach((q) => this.askQuestion(q));
    this.display.printScore(this.score, this.questions.length);
  }

  private askQuestion(question: Question): void {
    this.display.printQuestion(question);
    const isCorrect = this.getPlayerResponse(question);
    this.display.printResponse(isCorrect, question.answer);
  }

  private getPlayerResponse(question: Question): boolean {
    const options = Object.keys(question.options);
    const isCorrect = question.isCorrect(this.player.ask(options));
    this.score += isCorrect ? 1 : 0;
    return isCorrect;
  }
}

export default Quiz;
