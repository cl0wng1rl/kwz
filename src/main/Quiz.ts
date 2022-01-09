import Player from "./Player";
import { Question } from "./questions";

class Quiz {
  private questions: Question[];
  private player: Player;
  private score: number;
  
  constructor(questions: Question[]) {
    this.player = new Player();
    this.questions = questions;
    this.score = 0;
  }

  public play() {
    this.questions.forEach(q => {
      const answer = this.player.ask(q.toString());
      const isCorrect = q.isCorrect(answer);
      this.score += isCorrect ? 1 : 0;
      console.log(isCorrect ? "Correct!" : "Wrong!");
    });
    console.log(`Score: ${this.score}/${this.questions.length}`);
  }
}

export default Quiz;
