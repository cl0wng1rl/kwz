import * as readlineSync from "readline-sync";

class Player {
  public ask(question: string): string {
    return readlineSync.question(question);
  }
}

export default Player;
