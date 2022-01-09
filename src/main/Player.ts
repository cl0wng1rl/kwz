import * as readlineSync from "readline-sync";
import { Question } from "./questions";
class Player {
  public ask(question: Question): string {
    console.log(question.statement);
    Object.entries(question.options).forEach((value) => console.log(`${value[0]}: ${value[1]}`));
    return readlineSync.question();
  }
}

export default Player;
