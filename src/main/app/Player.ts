import { question } from "readline-sync";
class Player {
  public ask(): string {
    return question();
  }
}

export default Player;
