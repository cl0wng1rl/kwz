import * as readlineSync from "readline-sync";
class Player {
  public ask(): string {
    return readlineSync.question();
  }
}

export default Player;
