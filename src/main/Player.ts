import * as readlineSync from "readline-sync";
import { Question } from "./questions";
class Player {
  public ask(): string {
    return readlineSync.question();
  }
}

export default Player;
